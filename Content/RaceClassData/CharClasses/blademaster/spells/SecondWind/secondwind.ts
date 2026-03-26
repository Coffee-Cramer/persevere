import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";

export const SCNDWND_ENERGIZE = std.Spells.create("shrek6", "SCNDWND_ENERGIZE")
    .Name.enGB.set("Second Wind")
    .Description.enGB.set("$s1% Rage gained.")
    .Icon.setPath("Spell_nature_reincarnation")
    //.Visual.set(8251)
    .Attributes.IS_ABILITY.set(1)
    .CastTime.set(0)
    .Range.set(0)
    .Effects.addMod(x => x
        .Type.ENERGIZE_PCT.set()
        .PowerType.RAGE.set()
        .PowerPctBase.set(3)
        .ImplicitTargetA.UNIT_CASTER.set()
    )


export const SCNDWND = std.Spells.create("shrek6", "SCNDWND")
    .Name.enGB.set("Second Wind")
    .Description.enGB.set("When you fall below 35% health, you passively generate 4% of your rage every 3 sec.")
    .Icon.setPath("Spell_nature_reincarnation")
    .Subtext.enGB.set("Passive")
    .Attributes.IS_ABILITY.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .CastTime.set(0)
    .Range.set(0)
    .CasterAuraState.Include.HEALTHLESS_35_PERCENT.set()
    .Attributes.START_PERIODIC_AT_APPLY.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_TRIGGER_SPELL.set()
        .AuraPeriod.set(3000)
        .TriggerSpell.set(SCNDWND_ENERGIZE.ID)
        .ImplicitTargetA.UNIT_CASTER.set()
    )


SCNDWND.SkillLines.add(AbilityCategory.Ronin.getSkill())


//console.log(std.Spells.load(8042).Visual.get())