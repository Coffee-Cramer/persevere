import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";
import { WINDBLADE_VISUAL } from "../../SpellVisuals/WindBladeVisual";

export const CRPPL = std.Spells.create('shrek6', 'CRPPL')
    .Name.enGB.set('Windblade')
    .Icon.setPath('Inv_sword_11')
    .Description.enGB.set("Reduces the target's movement speed by $s1% for $d1.")
    .AuraDescription.enGB.set("Movement speed reduced by $s1%.")
    .Visual.set(WINDBLADE_VISUAL.ID)
    .Power.Type.set(0)
    .Power.CostPercent.set(9)
    .Range.set(2)
    .CastTime.set(0)
    .Cooldown.GlobalTime.set(1500)
    .Duration.setSimple(10000)
    .DefenseType.set(2)
    .Attributes.IS_ABILITY.set(1)
    .Attributes.MELEE_COMBAT_START.set(true)
    .PreventionType.PACIFY.set()
    .FacingCasterFlags.SPELL_FACING_FLAG_INFRONT.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_DECREASE_SPEED.set()
        .PercentBase.set(-51)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .SkillLines.add(AbilityCategory.Ronin.getSkill())

//console.log(CRPPL_VIS.ID)