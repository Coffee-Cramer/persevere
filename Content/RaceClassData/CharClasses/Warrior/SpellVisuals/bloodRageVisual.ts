import { std } from "wow/wotlk"

const BLDRG = std.Spells.load(29131)
const ENRGE = std.SpellVisuals.load(std.Spells.load(72147).Visual.get()) //colors the user red
const BLDRG_VISUAL = std.SpellVisuals.load(BLDRG.Visual.get())

const NEWENRGEKIT = std.SpellVisualKits.create(ENRGE.StateKit.get())
NEWENRGEKIT.LeftHandEffect.set(94) //rage hand left
NEWENRGEKIT.RightHandEffect.set(94) //rage hand right

    

export const NEWBLOODRAGE_VISUAL = std.SpellVisuals.create(BLDRG_VISUAL.ID)
    .StateKit.set(NEWENRGEKIT.ID) //state effects

//BLDRG.Visual.set(NEWBLOODRAGE_VISUAL.ID)
