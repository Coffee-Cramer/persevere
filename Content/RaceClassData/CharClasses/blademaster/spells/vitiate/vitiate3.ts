import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";
import { VITIATE } from "./vitiate";
import { VTT } from "../../../../../../Classes/SpellInfo/VitiateInfo";


export const VITIATE3 = std.Spells.create('shrek6', 'VITIATE3')
    .Attributes.IS_ABILITY.set(true)
    .Attributes.MELEE_COMBAT_START.set(1)
    .Attributes.NEXT_SWING.set(1)
    .Attributes.SHEATHE_UNCHANGED.set(1)
    .Name.enGB.set(VTT.GetName())
    .Icon.setPath(VTT.GetIcon())
    .Description.enGB.set(VTT.GetDesc())
    .Subtext.enGB.set("Rank 3")
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
        .DamageBase.set(22) 
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .Effects.addModTriggerSpell('shrek6', 'VITIATE_ENRAGE3', 0, eff => eff //grant 9 rage
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
    
VITIATE3.Rank.set(VITIATE.ID, 3)

//MONK_DRUNK_RAGE.Rank.set(MONK_DRUNK_RAGE.ID, 1)
//DRUNK_RAGE.Cooldown.Category.set(DRUNK_RAGE.ID)
//DRUNK_RAGE.Cooldown.CategoryTime.set(120000)
//console.log(std.Spells.load(14278).Visual.get())