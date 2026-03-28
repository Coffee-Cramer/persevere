import { std } from "wow/wotlk";
// *************************************************************************
// * Obliteration
// *************************************************************************
const BLDBATH = std.Spells.create("shrek6", "BLDBATH", 16493)
    .Name.enGB.set("Obliteration")
    .Icon.setPath("Spell_shadow_deathscream") //ability_unspecified_lmao Spell_shadow_deathscream
BLDBATH.Effects.get(0).PointsBase.set(3)

const BLDBATH2 = std.Spells.create("shrek6", "BLDBATH2", 16493)
    .Name.enGB.set("Obliteration")
    .Icon.setPath("Spell_shadow_deathscream")
BLDBATH2.Effects.get(0).PointsBase.set(7)

const BLDBATH3 = std.Spells.create("shrek6", "BLDBATH3", 16493)
    .Name.enGB.set("Obliteration")
    .Icon.setPath("Spell_shadow_deathscream")
BLDBATH3.Effects.get(0).PointsBase.set(11)

const BLDBATH4 = std.Spells.create("shrek6", "BLDBATH4", 16493)
    .Name.enGB.set("Obliteration")
    .Icon.setPath("Spell_shadow_deathscream")
BLDBATH4.Effects.get(0).PointsBase.set(15)

const BLDBATH5 = std.Spells.create("shrek6", "BLDBATH5", 16493)
    .Name.enGB.set("Obliteration")
    .Icon.setPath("Spell_shadow_deathscream") //Spell_nature_agitatingtotem
BLDBATH5.Effects.get(0).PointsBase.set(19)

const BLDBATH_TALENT = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'BLDBATH_TALENT', 5)
    .Position.set(2, 0)
    .Spells.set(0, BLDBATH.ID)
    .Spells.set(1, BLDBATH2.ID)
    .Spells.set(2, BLDBATH3.ID)
    .Spells.set(3, BLDBATH4.ID)
    .Spells.set(4, BLDBATH5.ID)