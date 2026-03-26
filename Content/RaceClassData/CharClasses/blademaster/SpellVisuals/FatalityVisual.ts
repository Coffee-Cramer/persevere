import { std } from "wow/wotlk"

const KDNYSHT = std.SpellVisuals.load(std.Spells.load(27615).Visual.get())
const BLEED = std.SpellVisuals.load(372)

const KDNYSHT_VISKIT = std.SpellVisualKits.load(738)
    .Animation.set(57)

export const FTLTYVIS = std.SpellVisuals.create()
    .CastKit.set(KDNYSHT.CastKit.get())
    .ImpactKit.set(BLEED.ImpactKit.get()) //bleed visual