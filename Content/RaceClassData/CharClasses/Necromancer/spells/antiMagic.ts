import { std } from "wow/wotlk";

export const AMS = std.Spells.create('shrek6', 'sntiMagic', 7121) //anti-magic shield by blizz parent
    .CastTime.set(0)
    .Cooldown.Time.set(120000) //2 min cd