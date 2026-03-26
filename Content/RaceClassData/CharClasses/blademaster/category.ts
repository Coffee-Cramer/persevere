import { DBC, std } from "wow/wotlk";
import { Ids } from "wow/wotlk/std/Misc/Ids";
import { SkillLine } from "wow/wotlk/std/SkillLines/SkillLine";
import { Spell } from "wow/wotlk/std/Spell/Spell";
import { BLDMSTR } from "./blademaster";
import { SWFTSTK } from "./spells/swiftStrike/swiftStrike";

export class Category{
    private name: string;
    private desc: string;
    private icon: string;
    //private iconNum?: number; //NOTE TO SELF: make a template function for numbered icon ids
    private LOC?: bool; //learn on create?

    private skill: SkillLine
    private spell: Spell
    
    constructor(inName: string, inDesc: string, inIcon: string, inLOC?: bool){
        this.name = inName;
        this.desc = inDesc;
        this.icon = inIcon;
        this.LOC = inLOC;
        
        this.skill = this.createSkill(inName, inDesc, inIcon)
        this.spell = this.createSpell(inName, inIcon)

        if(this.LOC == true) { this.enableSkill() }
    }

    private createSkill(sklNme: string, sklDesc: string, sklIcon: string){
        const SKILL = std.SkillLines.create("shrek6", sklNme)
        .Name.enGB.set(sklNme)
        .Description.enGB.set(sklDesc)
        .Icon.setPath(sklIcon)
        .Category.CLASS.set()

        return SKILL
    }

    private createSpell(splNme: string, splIcon: string){
        const SPELL = std.Spells.create("shrek6", splNme)
            .Name.enGB.set(splNme)
            .Icon.setPath(splIcon)
            .Range.set(1)
            .Effects.addMod(x => x
                .Type.WEAPON.set()
            )
            .Effects.addMod(x => x
                .Type.PROFICIENCY.set()
            )
            .Attributes.IS_PASSIVE.set(true)
            .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(true)

            DBC.SkillLineAbility.add(Ids.SkillLineAbility.id())
                .SkillLine.set(this.skill.ID)
                .Spell.set(SPELL.ID)
                .AcquireMethod.set(2)
            
            DBC.SkillRaceClassInfo.add(Ids.SkillRaceClassInfo.id())
                .SkillID.set(this.skill.ID)
                .RaceMask.set(13)
                .ClassMask.set(BLDMSTR.Mask)
                //.Flags.set(128)

            return SPELL
    }

    enableSkill(){
        this.skill.enableAutolearn(BLDMSTR.Mask)
        this.spell.AutoLearn.add(1, BLDMSTR.Mask)
    }

    public getSkill(): number { return this.skill.ID }

    public getSpell(): number { return this.spell.ID }
}

export const AbilityCategory = {
    Ronin: new Category(
        "Cyclone",
        "",
        "Ability_whirlwind",
        true
    ),
    Exec: new Category(
        "Mirage",
        "",
        "Spell_nature_mirrorimage",
        true
    ),
    Emp: new Category(
        "Mayhem",
        "",
        "ability_criticalstrike",
        true
    )
}
 