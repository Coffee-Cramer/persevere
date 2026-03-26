import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";
import { FACTION, ILLUSION_GROUP } from "./A_Faction";
import { MECHANICS } from "../../../../../../Enumerators&Arrays/mechanic_immunity_list";

const TRN = std.CreatureTemplates.create("shrek6", "TRN", 8914)
    .Models.clearAll()
    .Models.addIds(
        //9346,
        9347,
        //8773,
        //9349
    )

class Appearance{
    private num: number
    private faction: number = FACTION.ID
    private Enumerator = { i1:0, 
                           i2:1, 
                           i3:2, 
                           i4:3 }
    constructor(){
        this.num = 0 
    }
    public pickApr(inNum: number){ //select the appearance from an enumerator of options
        this.num = inNum 
        
        if(this.num == this.Enumerator.i1){
            this.num = 7029 //1775 //4483 //3354 //5641 //3328 //13842 //3328 //Orc
        }
        else if(this.num == this.Enumerator.i2){
            this.num = TRN.ID//8142//12793 //Tauren
            
        }
        else if(this.num == this.Enumerator.i3){
            this.num = 3995 //12789 //Troll
            
        }
        else if(this.num == this.Enumerator.i4){
            this.num = 5653//6395 //Undead
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


const ILLUSION_0 = std.Spells.create("shrek6", "ILLUSION_0H")
    .Name.enGB.set("Illusion: Horde")
    .Icon.setPath("Inv_bannerpvp_01")
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

const ILLUSION_1 = std.Spells.create("shrek6", "ILLUSION_1H")
    .Name.enGB.set("Illusion: Horde")
    .Icon.setPath("Inv_bannerpvp_01")
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

const ILLUSION_2 = std.Spells.create("shrek6", "ILLUSION_2H")
    .Name.enGB.set("Illusion: Horde")
    .Icon.setPath("Inv_bannerpvp_01")
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
        .CreatureTemplate.set(Appearances.Appr.pickApr(2)) //og: Appearances.Appr.pickApr()
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

const ILLUSION_3 = std.Spells.create("shrek6", "ILLUSION_3H")
    .Name.enGB.set("Illusion: Horde")
    .Icon.setPath("Inv_bannerpvp_01")
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
        .CreatureTemplate.set(Appearances.Appr.pickApr(3)) //og: Appearances.Appr.pickApr()
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


export const ILLHORDE_PARENT = std.Spells.create("shrek6", "ILLALLY_PARENT_H")  //3627
    .Name.enGB.set("Illusion: Horde")
    .Icon.setPath("Inv_bannerpvp_01")
    .Description.enGB.set("Take up the illusion of a member of the Horde. Lasts until canceled or until you attack, cast, or take damage. Cannot be casted in combat.")
    //.CastTime.setSimple(3000)
    .Visual.set(311)
    .Range.set(0)
    .Duration.set(1) 
    .Attributes.HIDE_FROM_AURA_BAR.set(1)
    .Attributes.CANNOT_USE_IN_COMBAT.set(1)
    .AuraInterruptFlags.CAST.set(1)
    .AuraInterruptFlags.HIT_BY_SPELL.set(1)
    .AuraInterruptFlags.TAKE_DAMAGE.set(1)
    .AuraInterruptFlags.setBit(12, 1) //attacking cancels
    .InterruptFlags.ON_DAMAGE.set(1)
    .InterruptFlags.ON_INTERRUPT.set(1)
    .InterruptFlags.ON_INTERRUPT_CAST.set(1)
    .InterruptFlags.ON_MOVEMENT.set(1)
    .InterruptFlags.ON_PUSHBACK.set(1)
    .Cooldown.GlobalTime.set(1500)
    .PreventionType.SILENCE.set()
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    //Visual
    .Effects.addModTriggerSpell("shrek6", "ILLALLYVISUALH", 0, x => x
        .Name.enGB.set("Illusion: Horde")
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

        castSpell(getRandomNumber(0, 3))

        function castSpell(rand: number){
            if(Math.round(rand) == 0){
                caster.CastSpell(caster, 80959, true) 
            }
            else if(Math.round(rand) == 1){
                caster.CastSpell(caster, 80960, true) 
            }
            else if(rand == 2){
                caster.CastSpell(caster, 80961, true) 
            }
            else if(rand == 3){
                caster.CastSpell(caster, 80962, true) 
            }
        }

        function getRandomNumber(min: number, max: number){
            min = Math.ceil(min)
            max = Math.ceil(max)

            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    })

ILLHORDE_PARENT.SkillLines.add(AbilityCategory.Exec.getSkill())

//console.log("ILLUSION 0: ", std.Spells.ID(ILLUSION_0)) 
//console.log("ILLUSION 1: ", std.Spells.ID(ILLUSION_1)) 
//console.log("ILLUSION 2: ", std.Spells.ID(ILLUSION_2)) 
//console.log("ILLUSION 3: ", std.Spells.ID(ILLUSION_3)) 