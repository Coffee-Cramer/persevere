import { Type } from "js-yaml";
import { std } from "wow/wotlk";
import { SpellEffectMechanic } from "wow/wotlk/std/Spell/SpellEffectMechanics";
import { AbilityCategory } from "../../category";

export const KILL = std.Spells.create('shrek6', 'kill')
    .Name.enGB.set("Death's Door")
    .Icon.setPath("Spell_shadow_auraofdarkness")
    .AuraDescription.enGB.set("Time is running out...")
    .Visual.set(5787) //5787
    .Duration.setSimple(40000)
    .Attributes.CANT_BE_CANCELED.set(true)
    .SchoolMask.SHADOW.set(1)
    .Effects.addMod(eff => eff
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_DAMAGE.set()
        .DamagePeriod.set(3000)
        .DamageBase.set(9998)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    

export const DTHDOOR = std.Spells.create('shrek6', 'deathsDoor')
    .Name.enGB.set("Death's Door")
    .Icon.setPath("Spell_shadow_sacrificialshield") //og: Spell_shadow_sacrificialshield
    .Description.enGB.set("Grants immunity to all damage for $d1. However, you will begin to die after the duration.\n\nYou cannot use Windwalk, Bladestorm, or any other beneficial buff effects while Death's Door is active.")
    .AuraDescription.enGB.set("Immunity to all damage.")
    .Visual.set(5301)
    .Duration.setSimple(12000)
    .CastTime.set(0)
    .Cooldown.Time.set(900000)
    .Cooldown.GlobalTime.set(1500)
    .SchoolMask.HOLY.set(true)
    .Attributes.UNK2.set(true)
    .Attributes.DAMAGE_REDUCE_SHIELD.set(true)
    .Mechanic.set(SpellEffectMechanic.INVULNERABLE)
    .Effects.addMod(eff => eff
        .Type.APPLY_AURA.set()
        .MiscValueA.set(1)
        .Aura.SCHOOL_IMMUNITY.set()
        .Schools.set(127)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(eff3 => eff3
        .Type.FORCE_CAST.set()
        .TriggerSpell.set(KILL.ID)
    )
//console.log(std.Spells.load(17).objectify())

DTHDOOR.SkillLines.add(AbilityCategory.Ronin.getSkill())