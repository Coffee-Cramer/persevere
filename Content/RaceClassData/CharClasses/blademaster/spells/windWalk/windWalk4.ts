import { std } from "wow/wotlk"
import { AbilityCategory } from "../../category"
import { WINDWLK } from "./windWalk"
import { WINDWALK_OBJ } from "../../../../../../Classes/SpellInfo/WindWalkInfo"

const COMBAT_INTERRUPT_WINDWLK4 = std.Spells.create('shrek6', 'COMBAT_INTERRUPT_WINDWLK4')
    .Name.enGB.set("Windwalk")
    .Icon.setPath("Spell_frost_windwalkon") 
    .CastTime.set(0)
    .Range.set(0)
    .Cooldown.Time.set(0)
    .Effects.addMod(x=>x 
        .Type.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .InlineScripts.OnAfterCast((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = ToPlayer(caster)
        if(!player) return

        if(player.IsInCombat()){
            player.RemoveAura(81019)
            player.RemoveAura(81020)
            player.RemoveAura(81021)
            player.RemoveAura(81022)
        }
    })

export const WINDWLK4 = std.Spells.create('shrek6', 'WINDWLK4')
    //stealth attributes
    .Attributes.UNK3.set(1)
    .Attributes.STOP_ATTACKING.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Attributes.CANNOT_USE_IN_COMBAT.set(1)
    //interrupt flags & dispels
    .AuraInterruptFlags.TAKE_DAMAGE.set(1)
    .AuraInterruptFlags.CAST.set(1)
    .AuraInterruptFlags.HIT_BY_SPELL.set(1)
    .AuraInterruptFlags.setBit(12, 1) //attacking cancels
    .AuraInterruptFlags.add(1024) //TALK
    .AuraInterruptFlags.add(131072) //MOUNT
    .AuraInterruptFlags.add(32768) //TRANSFORM
    .AuraInterruptFlags.add(8388608) //ENTER PVP COMBAT
    .AuraInterruptFlags.add(1) //ENTER COMBAT
    .DispelType.DISPEL_STEALTH.set()
    .CasterAuraState.Exclude.FAERIE_FIRE.set() //can't cast w/ faerie fire debuff
    .PreventionType.SILENCE.set()
    //Basic Info
    .Family.set(WINDWALK_OBJ.GetFamily())
    .ClassMask.setBit(WINDWALK_OBJ.GetClassMask(), 1)
    .Name.enGB.set(WINDWALK_OBJ.GetName())
    .Icon.setPath(WINDWALK_OBJ.GetIcon()) 
    .Description.enGB.set(WINDWALK_OBJ.GetDesc())
    .AuraDescription.enGB.set(WINDWALK_OBJ.GetAuraDesc())
    .Subtext.enGB.set("Rank 4")
    .Visual.set(WINDWALK_OBJ.GetVisual())
    .Power.Type.set(WINDWALK_OBJ.GetCostType())
    .Power.CostPercent.set(WINDWALK_OBJ.GetCost()) 
    .CastTime.set(WINDWALK_OBJ.GetCastTime())
    .Range.set(WINDWALK_OBJ.GetRange())
    .Duration.setSimple(14000)
    .Cooldown.Time.set(WINDWALK_OBJ.GetCoolDown())
    .Cooldown.GlobalTime.set(WINDWALK_OBJ.GetGlobalCD())
    .SkillLines.add(WINDWALK_OBJ.GetSkillLine())
    //stealth
    .Effects.addMod(x=>x 
        .Type.APPLY_AURA.set()
        .Aura.MOD_STEALTH.set()
        .School.NORMAL.set()
        .PointsBase.set(5)
        .PointsDieSides.set(1)
        .PointsPerLevel.set(5)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    //movement speed increase
    .Effects.addMod(x=>x 
        .Type.APPLY_AURA.set()
        .Aura.MOD_INCREASE_SPEED.set()
        .PercentBase.set(29)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x=>x 
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_TRIGGER_SPELL.set()
        .AuraPeriod.set(1000)
        .TriggerSpell.set(COMBAT_INTERRUPT_WINDWLK4.ID)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .InlineScripts.OnAfterCast((wndwlk) => {
        let caster = wndwlk.GetCaster()
        if(!caster) return

        caster.CastSpell(caster, 81018, true)
    })

WINDWLK4.Cooldown.Category.set(WINDWLK.ID)
.Cooldown.CategoryTime.set(30000)


//console.log(std.Spells.load(1856).objectify())