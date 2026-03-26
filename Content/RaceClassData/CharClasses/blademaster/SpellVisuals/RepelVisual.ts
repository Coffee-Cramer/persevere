import { std } from "wow/wotlk";

const REPELVIS = std.SpellVisuals.load(236)


const REPELVISKIT = std.SpellVisualKits.create(379)
    .Animation.set(-1)

export const NEWREPELVIS = std.SpellVisuals.create()
    .CastKit.set(REPELVISKIT.ID)
    .StateKit.set(REPELVIS.StateKit.get())