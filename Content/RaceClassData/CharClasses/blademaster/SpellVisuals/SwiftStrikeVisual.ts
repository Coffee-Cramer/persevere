import { std } from "wow/wotlk"

const HEROIC_STRIKE_VISUAL = std.SpellVisuals.load(39)
const SWORDSPEC_STRIKE_VISUAL = std.SpellVisuals.load(6560)

const HEROICSTRK_VISUALKIT = std.SpellVisualKits.load(437) //change sword spec proc animation
//console.log("HEROIC STRIKE VISUAL KIT: ",HEROICSTRK_VISUALKIT.objectify())
//console.log("HEROIC STRIKE VISUAL: ", HEROIC_STRIKE_VISUAL.objectify())

const SWORDSPEC_PROC_VISUALKIT = std.SpellVisualKits.load(411) //change sword spec proc animation
SWORDSPEC_PROC_VISUALKIT.Animation.set(57) //set to melee weapon swing, og: 57



export const SWIFTSTRIKE_VISUAL = std.SpellVisuals.create()
    .ImpactKit.set(HEROIC_STRIKE_VISUAL.ImpactKit.get())
    .CastKit.set(SWORDSPEC_STRIKE_VISUAL.CastKit.get())
    .PrecastKit.set(HEROIC_STRIKE_VISUAL.PrecastKit.get())
    .Missile.DestinationAttachment.set(1)
    