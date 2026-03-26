import { std } from "wow/wotlk";

const PUMMEL = std.Spells.load(38313)

//console.log(PUMMEL.Visual.get())

const PUMMELVIS = std.SpellVisuals.load(1023)

//console.log("CASTKIT: ",PUMMELVIS.CastKit.get())

const QLINGKIT = std.SpellVisualKits.create(1044)
    .Animation.SPELL_CAST_DIRECTED.set()

export const QLINGVISUAL = std.SpellVisuals.create(PUMMELVIS.ID)
    .CastKit.set(QLINGKIT.ID)