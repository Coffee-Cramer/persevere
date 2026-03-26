import { std } from "wow/wotlk"

export const BLOODRUSH = std.Spells.create('shrek6', 'BLOODRUSH')
    .Family.set(20)
    .Name.enGB.set("Bloodrush")
    .Icon.setPath("ability_criticalstrike") //og: ability_criticalstrike Spell_nature_eyeofthestorm
    .Description.enGB.set("The effectiveness of your specials is increased by $s1%.")
    .CastTime.set(0) //instant
    .Duration.setSimple(3000)
    .AuraDescription.enGB.set("The effectiveness of your specials is increased by $s1%.")
    .Effects.addMod(eff => eff 
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.EFFECT1.set()
        .PercentBase.set(19)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Stacks.set(8)
BLOODRUSH.Effects.get(0).ClassMask.setBit(21, 1)