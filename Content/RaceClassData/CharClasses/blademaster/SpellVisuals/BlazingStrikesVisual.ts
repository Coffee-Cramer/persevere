import { std } from "wow/wotlk"

const EVIS = std.SpellVisuals.load(671)

export const BLZVIS = std.SpellVisuals.create()
    .CastKit.set(EVIS.CastKit.get())
