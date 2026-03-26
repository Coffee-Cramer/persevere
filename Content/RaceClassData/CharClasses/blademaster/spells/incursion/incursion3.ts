import { std } from "wow/wotlk"
import { AbilityCategory } from "../../category"
import { INCURSION_OBJ } from "../../../../../../Classes/SpellInfo/IncursionInfo"

export const INCURSION3 = std.Spells.create('shrek6', 'INCURSION3')
    .Attributes.MELEE_COMBAT_START.set(true)
    .Attributes.IS_ABILITY.set(true)
    .Attributes.CANNOT_USE_IN_COMBAT.set(true)
    .Subtext.enGB.set("Rank 3")
    .Family.set(INCURSION_OBJ.GetFamily())
    .ClassMask.setBit(INCURSION_OBJ.GetClassMask(), 1)
    .Name.enGB.set(INCURSION_OBJ.GetName())
    .Icon.setPath(INCURSION_OBJ.GetIcon()) 
    .Description.enGB.set(INCURSION_OBJ.GetDesc() + "25 rage. Cannot be used in combat.")
    .Visual.set(INCURSION_OBJ.GetVisual())
    .CastTime.set(INCURSION_OBJ.GetCastTime())
    .Range.set(INCURSION_OBJ.GetRange()) //melee
    .Cooldown.Time.set(INCURSION_OBJ.GetCoolDown())
    .Cooldown.GlobalTime.set(INCURSION_OBJ.GetGlobalCD())
    .DefenseType.set(INCURSION_OBJ.GetDefenseType())
    .DefenseType.set(2)
    .SkillLines.add(INCURSION_OBJ.GetSkillLine())
    .Effects.addMod(x => x 
        .Type.WEAPON_PERCENT_DAMAGE.set()
        .DamagePctBase.set(129)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .Effects.addMod(x => x 
        .Type.APPLY_AURA.set()
        .Aura.MOD_STUN.set()
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .Effects.addModTriggerSpell('shrek6', 'INCURSION_ENRAGE3', 0, eff => eff 
        .Name.enGB.set("Rage")
        .Icon.set(1)
        .CastTime.set(0)
        .Range.set(0)
        .Effects.addMod(eff => eff 
            .Type.ENERGIZE.set()
            .PowerType.RAGE.set()
            .PowerBase.set(250)
            .ImplicitTargetA.UNIT_CASTER.set()
        )
    )