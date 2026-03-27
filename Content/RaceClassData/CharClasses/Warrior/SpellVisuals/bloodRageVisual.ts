import { std } from "wow/wotlk"

const BLDRG = std.Spells.load(29131)
const ENRGE = std.SpellVisuals.load(std.Spells.load(72147).Visual.get())
const BLDRG_VISUAL = std.SpellVisuals.load(BLDRG.Visual.get())
//const FIRE = std.SpellVisuals.load(7553)

const NEWENRGEKIT = std.SpellVisualKits.create(ENRGE.StateKit.get())
//NEWENRGEKIT.BaseEffect.set(5132) //fire base effect
NEWENRGEKIT.LeftHandEffect.set(94) //rage hands
NEWENRGEKIT.RightHandEffect.set(94) //rage hands

    

export const NEWBLOODRAGE_VISUAL = std.SpellVisuals.create(BLDRG_VISUAL.ID)
    .StateKit.set(NEWENRGEKIT.ID) //state effects

//BLDRG.Visual.set(NEWBLOODRAGE_VISUAL.ID)
