import { std } from "wow/wotlk";

//big problem; charge isn't giving rage. I can already hear the chuds screaming at me

const CHARGE = std.Spells.load(100)

const CHARGEw = std.Spells.load(7922) //the stun

//console.log(CHARGE.objectify())

CHARGE.Effects.get(1).Type.ENERGIZE.set().PowerType.RAGE.set().PowerBase.set(90)