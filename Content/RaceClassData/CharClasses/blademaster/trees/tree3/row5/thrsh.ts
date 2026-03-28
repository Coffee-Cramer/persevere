import { std } from "wow/wotlk";

//*************************************************************************
// * Thrash
// ************************************************************************/
const THRASH = std.Spells.load(3417) //10% chance
//console.log(std.Spells.load(THRASH.ID).Proc.Chance.get())

const TRSHING = std.Spells.create("shrek6", "TRSHING", THRASH.ID)
TRSHING.Proc.Chance.set(2)
TRSHING.Name.enGB.set("Thrash")
TRSHING.Description.enGB.set("Adds a 3% chance to do two extra attacks.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)

const TRSHING2 = std.Spells.create("shrek6", "TRSHING2", THRASH.ID)
TRSHING2.Proc.Chance.set(5)
TRSHING2.Name.enGB.set("Thrash")
TRSHING2.Description.enGB.set("Adds a 6% chance to do two extra attacks.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)

const TRSHING3 = std.Spells.create("shrek6", "TRSHING3", THRASH.ID)
TRSHING3.Proc.Chance.set(8)
TRSHING3.Name.enGB.set("Thrash")
TRSHING3.Description.enGB.set("Adds a 9% chance to do two extra attacks.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)


const THRSHING_TALENT = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'THRSHING_TALENT', 3)
    .Position.set(5, 0)
    .Spells.set(0, TRSHING.ID)
    .Spells.set(1, TRSHING2.ID)
    .Spells.set(2, TRSHING3.ID)