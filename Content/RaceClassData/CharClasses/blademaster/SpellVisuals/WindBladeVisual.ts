import { std } from "wow/wotlk"

const GHOST_STRIKE_VISUAL = std.SpellVisuals.load(4159)
const WINDSHEAR_VISUAL = std.SpellVisuals.load(std.Spells.load(57994).Visual.get())

export const WINDBLADE_VISUAL = std.SpellVisuals.create()
    .ImpactKit.set(WINDSHEAR_VISUAL.ImpactKit.get())
    .CastKit.set(GHOST_STRIKE_VISUAL.CastKit.get())
