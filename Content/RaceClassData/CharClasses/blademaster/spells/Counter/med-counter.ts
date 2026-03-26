import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";

export const CNTRPRC = std.Spells.create('shrek6', 'CNTRPRC')
    .Family.set(33)
    .ClassMask.setBit(33, 1)
    .Name.enGB.set("Counter!")
    .Visual.set(39)
    .Range.setSimple(0, 5)
    .CastTime.set(0)
    .FacingCasterFlags.set("SPELL_FACING_FLAG_INFRONT")
    .SchoolMask.setBit(0, 1)
    .DefenseType.set(2)
    .Effects.addMod(eff => eff
        .Type.WEAPON_PERCENT_DAMAGE.set()
        .Percentage.set(49)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )

export const MEDCNTR = std.Spells.create('shrek6', 'MEDCNTR')
    .Family.set(33)
    .ClassMask.setBit(33, 1)
    .Name.enGB.set("Meditation: Counter")
    .Icon.setPath("Ability_rogue_shadowstrikes")
    .ActiveIcon.setPath("Spell_nature_wispsplode")
    .Description.enGB.set("While active, you gain a 20% chance to counter strike when hit. Dealing 50% weapon damage.")
    .AuraDescription.enGB.set('Chance to counter strike.')
    .Visual.set(5727) //211
    .Duration.set(21)
    .CastTime.set(0)
    .Cooldown.GlobalTime.set(1500)
    .Attributes.DISPLAY_IN_STANCE_BAR.set(true)
    .Attributes.PERSISTS_DEATH.set(true)
    .StanceBarOrder.set(0) //first in stance bar
    .Proc.TriggerMask.DONE_MAINHAND_ATTACK.set(true).Chance.set(20)
    .Effects.addMod(eff => eff
        .Type.APPLY_AURA.set()
        .Aura.PROC_TRIGGER_SPELL.set().TriggeredSpell.set(CNTRPRC.ID)
        .ImplicitTargetA.UNIT_CASTER.set()
        .Radius.set(23)
    )
    .SkillLines.add(AbilityCategory.Ronin.getSkill())

//console.log(std.Spells.load(20600).Visual.get())
//MEDCNTR.SkillLines.add(AbilityCategory.Myst.getSkill())
