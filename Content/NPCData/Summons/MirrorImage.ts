import { std } from "wow/wotlk"
import { EMOTES } from "../../../Enumerators&Arrays/NPCemotes"
import { MECHANICS } from "../../../Enumerators&Arrays/mechanic_immunity_list"


//*************************************************************************************************************************
//* Mirror Image NPC
//*************************************************************************************************************************
export const MIRROR_IMAGE_SUMMON = std.CreatureTemplates.create('shrek6', 'DECEPT-clone', 31216) //clone id: 45015
    MIRROR_IMAGE_SUMMON.Scale.set(1)
    MIRROR_IMAGE_SUMMON.MovementSpeed.set(1)
    MIRROR_IMAGE_SUMMON.Stats.DamageMod.set(1)
    MIRROR_IMAGE_SUMMON.UnitClass.WARRIOR.set()
    MIRROR_IMAGE_SUMMON.Stats.HealthMod.set(-0.1) //-0.15 is 1 health
    MIRROR_IMAGE_SUMMON.Rank.NORMAL.set()
    MIRROR_IMAGE_SUMMON.Stats.ManaMod.set(0)
    MIRROR_IMAGE_SUMMON.Emote.set(EMOTES.state_ready_2H)
    MIRROR_IMAGE_SUMMON.UnitFlags.MIRROR_IMAGE.set(1)
    
    .InlineScripts.OnIsSummoned((clone)=>{
        let controller = clone.GetController()

        if(!controller){
            return
        }

        let creature = ToCreature(clone)
        if(!creature) return

        if(controller.HasAura(81379)){ //Shattering Images (Rank 1) talent
            //console.log("talent got")
            clone.CastSpell(clone, 81386, true);
        }

        if(controller.HasAura(81380)){ //Shattering Images (Rank 2) talent
            //console.log("talent got")
            clone.CastSpell(clone, 81390, true);
        }

        if(controller.HasAura(81381)){ //Shattering Images (Rank 3) talent
            //console.log("talent got")
            clone.CastSpell(clone, 81391, true);
        }

        //clone.CastSpell(clone, 81386, true);
        clone.CastSpell(clone, 81294, true); //SEE-THROUGH VISUAL
        clone.CastSpell(clone, 80923, true); //CLONE ATTACK

        if(controller.HasAura(81421)){ //if controller has Convergence, despawn
            clone.DespawnOrUnsummon(0)
        }
    })



//*************************************************************************************************************************
//* Mirror Image Attack Spell Data
//*************************************************************************************************************************
const CC_MECHANICS = [
    MECHANICS.charm, 
    MECHANICS.disornt, 
    MECHANICS.disarm, 
    MECHANICS.distrct, 
    MECHANICS.fear, 
    MECHANICS.root, 
    MECHANICS.snare, 
    MECHANICS.sleep, 
    MECHANICS.stun, 
    MECHANICS.freeze, 
    MECHANICS.Knckout, 
    MECHANICS.plymrph, 
    MECHANICS.horror, 
    MECHANICS.sap,
    MECHANICS.daze
]

const SEE_THROUGH_VISUAL = std.Spells.create("shrek6", "SEE_THROUGH_VISUAL")
    .Name.enGB.set("Mirror Image")
    .Icon.setPath("Spell_nature_mirrorimage")
    .Description.enGB.set("Cloned.")
    .Visual.set(72)
    .Duration.setSimple(10000)
    .Range.setSimple(0, 30)
    .CastTime.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )

export const CLNEATK = std.Spells.create('shrek6', 'CLNEATK')
    .Name.enGB.set("Attack")
    .Icon.setPath("Spell_nature_massteleport")
    .CastTime.set(0)
    .Range.setSimple(0, 100)
    .Visual.set(219)
    .Effects.addMod(x => x
        .Type.WEAPON_PERCENT_DAMAGE.set()
        .Percentage.set(67)
        .ImplicitTargetA.SRC_CASTER.set()
        .ImplicitTargetB.UNIT_CONE_ENEMY24.set()
        .Radius.setSimple(7)
    )

export const CLNEATK_PARENT = std.Spells.create('shrek6', 'CLNEATK_PARENT', 9632)
    .Name.enGB.set("Blade Dancing")
    .Visual.set(0)
    .Duration.setSimple(10000)
CLNEATK_PARENT.Effects.get(0).TriggerSpell.set(CLNEATK.ID).AuraPeriod.set(500)
CLNEATK_PARENT.Effects.addMod(x => x
    .Type.APPLY_AURA.set()
    .Aura.MECHANIC_IMMUNITY_MASK.set()
    .Mechanics.set(CC_MECHANICS)
    .ImplicitTargetA.UNIT_CASTER.set()
)


//console.log(std.Spells.load(9632).objectify())
//console.log(std.Spells.load(9633).objectify())
//console.log(std.Spells.load(845).Visual.get())
//console.log(std.Spells.ID(CLNEATK_PARENT))
//console.log(std.Spells.ID(SEE_THROUGH_VISUAL))
//console.log(std.Spells.ID(SHATTER_PERIODIC))
//console.log(std.Spells.ID(SHATTER_PERIODIC2))
//console.log(std.Spells.ID(SHATTER_PERIODIC3))