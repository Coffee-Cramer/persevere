import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";
import { NEWRAGE } from "../../SpellVisuals/rage";

const WNDWVE_TRIGGER_ENERGIZE = std.Spells.create("shrek6", "WNDWVE_TRIGGER_ENERGIZE")
    .Name.enGB.set("Windweave")
    .Icon.setPath("Spell_nature_purge")
    .Range.set(0)
    .Duration.set(0)
    .Effects.addMod(x => x
        .Type.ENERGIZE_PCT.set()
        .PowerType.RAGE.set()
        .PowerPctBase.set(19)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

export const UNLSH = std.Spells.create("shrek6", "WNDWVE")
    .Name.enGB.set("Unleash")
    .Description.enGB.set("Gain 60% of your Rage over $d1.")
    .AuraDescription.enGB.set("20% Rage every 3 seconds.")
    .Icon.setPath("Spell_nature_purge")
    .Range.set(0)
    .Visual.set(NEWRAGE.ID) //4372
    .Duration.setSimple(6000)
    .Cooldown.Time.set(90000)
    .Cooldown.GlobalTime.set(1500)
    .Attributes.START_PERIODIC_AT_APPLY.set(1)
    .PreventionType.SILENCE.set()
    .CustomAttributes.DONT_BREAK_STEALTH.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_TRIGGER_SPELL.set()
        .TriggerSpell.set(WNDWVE_TRIGGER_ENERGIZE.ID)
        .AuraPeriod.set(3000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    
UNLSH.SkillLines.add(AbilityCategory.Emp.getSkill())
//console.log(std.Spells.load(14751).Visual.get())