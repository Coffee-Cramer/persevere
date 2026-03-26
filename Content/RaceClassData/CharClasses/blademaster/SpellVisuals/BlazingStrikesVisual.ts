import { std } from "wow/wotlk"

const EVIS = std.SpellVisuals.load(671)
const FIRE = std.SpellVisuals.load(7553)

export const BLZVIS = std.SpellVisuals.create()
    .CastKit.set(EVIS.CastKit.get())
    .StateKit.set(FIRE.StateKit.get()) //flame 