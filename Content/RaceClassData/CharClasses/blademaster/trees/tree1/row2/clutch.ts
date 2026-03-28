import { std } from "wow/wotlk";

// *************************************************************************
// * Clutch
// *************************************************************************
const DTHGRSP = std.Spells.create("shrek6", "DTHGRSP", 26022)
    .Name.enGB.set("Clutch")
    .Description.enGB.set("Reduces the duration of all Disarm effects on you by $s3%.")
    .Icon.setPath("Spell_nature_undyingstrength")
DTHGRSP.Effects.get(0).clear()

const DTHGRSP2 = std.Spells.create("shrek6", "DTHGRSP2", 26022)
    .Name.enGB.set("Clutch")
    .Description.enGB.set("Reduces the duration of all Disarm effects on you by $s3%.")
    .Icon.setPath("Spell_nature_undyingstrength")
DTHGRSP2.Effects.get(2).PointsBase.set(49)
DTHGRSP2.Effects.get(0).clear()

const DTHGRIP_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'DTHGRIP_TALENT', 2)
    .Position.set(1, 1)
    .Spells.set(0, DTHGRSP.ID)
    .Spells.set(1, DTHGRSP2.ID)