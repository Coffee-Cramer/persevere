import { std } from "wow/wotlk"

export const RUSHOFBATTLE_BUFF = std.Spells.create('shrek6', 'RUSHOFBATTLE_BUFF')
    .Family.set(20)
    .Name.enGB.set("Mercilessness")
    .Icon.setPath("Ability_warrior_warcry") //og: ability_criticalstrike Spell_nature_eyeofthestorm
    .Description.enGB.set("Gain 10 rage.")
    .CastTime.set(0) //instant
    .Effects.addMod(eff => eff //for talent
        .Type.ENERGIZE.set()
        .PowerType.RAGE.set()
        .PowerBase.set(100)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
RUSHOFBATTLE_BUFF.Effects.get(0).ClassMask.setBit(21, 1)