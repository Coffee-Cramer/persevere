import { std } from "wow/wotlk"

const ENRGE = std.SpellVisuals.load(std.Spells.load(72147).Visual.get())

//console.log(ENRGE.objectify())
//console.log(ENRGE.StateKit.objectify())


const NEWENRGEKIT = std.SpellVisualKits.create(ENRGE.StateKit.get())
NEWENRGEKIT.LeftHandEffect.set(94)
NEWENRGEKIT.RightHandEffect.set(94)

const NEWCASTKIT = std.SpellVisualKits.create() 
    //.Animation.set(-1)
    .Sound.set(std.SpellVisualKits.load(14107).Sound.get()) //ENRGE sound
    

export const NEWRAGE = std.SpellVisuals.create()
    .CastKit.set(NEWCASTKIT.ID)
    .StateKit.set(NEWENRGEKIT.ID) //flame 
