import { std } from "wow/wotlk"
import { VTT } from "../../../../../../Classes/SpellInfo/VitiateInfo"
import { VITIATE } from "./vitiate"

export const VITIATE6 = std.Spells.create('shrek6', 'VITIATE6')
    .Attributes.IS_ABILITY.set(true)
    .Attributes.MELEE_COMBAT_START.set(1)
    .Attributes.NEXT_SWING.set(1)
    .Attributes.SHEATHE_UNCHANGED.set(1)
    .Name.enGB.set(VTT.GetName())
    .Icon.setPath(VTT.GetIcon())
    .Description.enGB.set(VTT.GetDesc())
    .Subtext.enGB.set("Rank 6")
    .Visual.set(VTT.GetVisual())
    .CastTime.set(VTT.GetCastTime())
    .Range.set(VTT.GetRange()) //melee
    .Cooldown.GlobalTime.set(1500)
    .Mana.Type.set(VTT.GetCostType()) 
    .Power.CostPercent.set(VTT.GetCost())
    .DefenseType.set(VTT.GetDefenseType())
    .SkillLines.add(VTT.GetSkillLine())
    .Effects.addMod(x=>x
        .Type.WEAPON_DAMAGE.set()
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .Effects.addMod(eff => eff 
        .Type.SCHOOL_DAMAGE.set()
        .DamageBase.set(85) 
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .Effects.addModTriggerSpell('shrek6', 'VITIATE_ENRAGE6', 0, eff => eff //grant 9 rage
        .Name.enGB.set("Rage")
        .Icon.set(1)
        .CastTime.set(0)
        .Range.set(0)
        .Effects.addMod(eff => eff 
            .Type.ENERGIZE.set()
            .PowerType.RAGE.set()
            .PowerBase.set(90)
            .ImplicitTargetA.UNIT_CASTER.set()
        )
    )
    
VITIATE6.Rank.set(VITIATE.ID, 3)