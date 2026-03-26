import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";
import { FACTION_DI_AS_HORDE, ILLUSION_GROUP } from "./A_Faction";
import { MECHANICS } from "../../../../../../Enumerators&Arrays/mechanic_immunity_list";

const DRKIRN = std.CreatureTemplates.create("shrek6", "DRKIRNH", 8901)
    .Models.clearAll()
    .Models.addIds(
        8825,
        //4936,
        //8812,
        //825,
    )

const DRKIRN_H2 = std.CreatureTemplates.create("shrek6", "DRKIRN_H2", 8901)
    .Models.clearAll()
    .Models.addIds(
        //8170,
        825
    )

class Appearance{
    private num: number
    private faction: number = FACTION_DI_AS_HORDE.ID
    private Enumerator = { i1:0, 
                           i2:1 }
    constructor(){
        this.num = 0 
    }
    public pickApr(inNum: number){ //select the appearance from an enumerator of options
        this.num = inNum 
        
        if(this.num == this.Enumerator.i1){
            this.num = DRKIRN.ID 
        }
        else if(this.num == this.Enumerator.i2){
            this.num = DRKIRN_H2.ID 
        }

        return this.num
    }  
    public getFac(){
        return this.faction
    } 
}


const Appearances = {
    Appr: new Appearance()
}


const ILLUSION_0 = std.Spells.create("shrek6", "ILLUSION_0DI")
    .Name.enGB.set("Illusion: Dark Iron")
    .Icon.setPath("Inv_helmet_08")
    .Description.enGB.set("Selected appearance.")
    .CastTime.set(0)
    .Range.set(0)
    .Duration.set(21) //infinite
    .AuraInterruptFlags.CAST.set(1)
    .AuraInterruptFlags.HIT_BY_SPELL.set(1)
    .AuraInterruptFlags.TAKE_DAMAGE.set(1)
    .AuraInterruptFlags.setBit(12, 1) //attacking cancels
    .AuraInterruptFlags.add(128) //NOT_ABOVE_WATER
    .Mechanic.set(MECHANICS.pacify)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.TRANSFORM.set()
        .CreatureTemplate.set(Appearances.Appr.pickApr(0)) //og: Appearances.Appr.pickApr()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_FACTION.set()
        .Faction.set(Appearances.Appr.getFac())  
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_PACIFY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .StackGroups.add(ILLUSION_GROUP.ID)

const ILLUSION_1 = std.Spells.create("shrek6", "ILLUSION_1DI")
    .Name.enGB.set("Illusion: Dark Iron")
    .Icon.setPath("Inv_helmet_08")
    .Description.enGB.set("Selected appearance.")
    .CastTime.set(0)
    .Range.set(0)
    .Duration.set(21) //infinite
    .AuraInterruptFlags.CAST.set(1)
    .AuraInterruptFlags.HIT_BY_SPELL.set(1)
    .AuraInterruptFlags.TAKE_DAMAGE.set(1)
    .AuraInterruptFlags.setBit(12, 1) //attacking cancels
    .AuraInterruptFlags.add(128) //NOT_ABOVE_WATER
    .Mechanic.set(MECHANICS.pacify)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.TRANSFORM.set()
        .CreatureTemplate.set(Appearances.Appr.pickApr(1)) //og: Appearances.Appr.pickApr()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_FACTION.set()
        .Faction.set(Appearances.Appr.getFac())  //stormwind: 72, ironforge: 47, gnomereagan: 54, Darnassus: 69
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_PACIFY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .StackGroups.add(ILLUSION_GROUP.ID)


export const ILLDI_PARENT = std.Spells.create("shrek6", "ILLDI_PARENT")
    .Name.enGB.set("Illusion: Dark Iron Dwarves (Horde)")
    .Icon.setPath("Inv_helmet_08")
    .Description.enGB.set("Take up the illusion of a member of the Dark Iron Dwarves. Lasts until canceled or until you attack, cast, or take damage. Cannot be casted in combat.")
    .CastTime.set(0)
    .Range.set(0)
    .Duration.set(1) 
    .Attributes.HIDE_FROM_AURA_BAR.set(1)
    .Attributes.CANNOT_USE_IN_COMBAT.set(1)
    .AuraInterruptFlags.CAST.set(1)
    .AuraInterruptFlags.HIT_BY_SPELL.set(1)
    .AuraInterruptFlags.TAKE_DAMAGE.set(1)
    .AuraInterruptFlags.setBit(12, 1) //attacking cancels
    .Cooldown.GlobalTime.set(1500)
    .PreventionType.SILENCE.set()
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    //Visual
    .Effects.addModTriggerSpell("shrek6", "ILLALLYVISUALDI", 0, x => x
        .Name.enGB.set("Illusion: Dark Iron")
        .Icon.setPath("Spell_nature_mirrorimage")
        .Description.enGB.set("")
        .CastTime.set(0)
        .Range.set(0)
        .Duration.setSimple(1)
        .Visual.set(8262)
        .Attributes.IS_HIDDEN_FROM_LOG.set(1)
        .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
        .Effects.addMod(x => x
            .Type.APPLY_AURA.set()
            .Aura.DUMMY.set()
            .ImplicitTargetA.UNIT_CASTER.set()
        )
    )
    .InlineScripts.OnCast((spell) => {
        let caster = spell.GetCaster()

        if(!caster){
            return
        }

        castSpell(getRandomNumber(0, 1))

        function castSpell(rand: number){
            if(Math.round(rand) == 0){
                caster.CastSpell(caster, 80955, true) 
            }
            else if(Math.round(rand) == 1){
                caster.CastSpell(caster, 80956, true) 
            }

        }

        function getRandomNumber(min: number, max: number){
            min = Math.ceil(min)
            max = Math.ceil(max)

            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    })

ILLDI_PARENT.SkillLines.add(AbilityCategory.Exec.getSkill())

//console.log("DARKIRON_HORDE:") 
//console.log("ILLUSION 0: ", std.Spells.ID(ILLUSION_0)) 
//console.log("ILLUSION 1: ", std.Spells.ID(ILLUSION_1)) 
