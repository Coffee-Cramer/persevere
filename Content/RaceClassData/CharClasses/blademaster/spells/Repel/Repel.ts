import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";
import { NEWREPELVIS } from "../../SpellVisuals/RepelVisual";


export const REPEL = std.Spells.create('shrek6', 'repel')
    .Family.set(19)
    .ClassMask.setBit(19,1)
    .Name.enGB.set("Repel")
    .Icon.setPath("Inv_sword_50")
    .Description.enGB.set("While active, your parry chance is increased by $s1% for $d1.") // \n\nRepel shares a 3 min cooldown with Spell Deflect.")
    .AuraDescription.enGB.set('Parry chance increased by $s1%.')
    .Visual.set(NEWREPELVIS.ID)
    .Duration.setSimple(9000)
    .CastTime.set(0)
    .Cooldown.Time.set(180000) //3 minutes
    .Cooldown.GlobalTime.set(1500)
    .Attributes.SHEATHE_UNCHANGED.set(1)
    .Effects.addMod(eff => eff
        .Type.APPLY_AURA.set()
        .Aura.MOD_PARRY_PERCENT.set()
        .PercentBase.set(69)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
.Cooldown.CategoryTime.set(180000)

REPEL.SkillLines.add(AbilityCategory.Ronin.getSkill())
//console.log(std.Spells.load(22857).Visual.get())