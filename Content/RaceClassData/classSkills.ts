import { MaskCon } from "wow/data/cell/cells/MaskCell"
import { std } from "wow/wotlk"
import { RaceMask } from "wow/wotlk/std/Race/RaceType"
import { BLDMSTR } from "./CharClasses/blademaster/blademaster";
import { ALLRACES } from "../../Enumerators&Arrays/allRacesAllClassesArrays";
import { NECRO } from "./CharClasses/Necromancer/necro";


/***********************************************************************
*   Class Weapon Skills
************************************************************************/
std.EquipSkills.Bows.enableAutolearnClass('HUNTER', ALLRACES); 
std.EquipSkills.Bows.enableAutolearnClass('PRIEST', 'NIGHTELF'); 
std.EquipSkills.Crossbows.enableAutolearnClass('HUNTER', ALLRACES);
std.EquipSkills.Daggers.enableAutolearnClass(['HUNTER', 'ROGUE', 'WARLOCK', 'DRUID', 'MAGE', NECRO.Mask], ALLRACES);
std.EquipSkills.Guns.enableAutolearnClass('HUNTER', ALLRACES);
std.EquipSkills.Axes1H.enableAutolearnClass(['WARRIOR', 'HUNTER', 'DEATH_KNIGHT', BLDMSTR.Mask], ALLRACES);
std.EquipSkills.Maces1H.enableAutolearnClass(['WARRIOR', 'PALADIN', 'PRIEST', 'SHAMAN', 'DRUID', 'DEATH_KNIGHT'], ALLRACES);
std.EquipSkills.Swords1H.enableAutolearnClass(['WARRIOR', 'ROGUE', 'PALADIN', 'DEATH_KNIGHT', BLDMSTR.Mask], ALLRACES);
std.EquipSkills.Staves.enableAutolearnClass(['SHAMAN', 'MAGE', 'DRUID'], ALLRACES);
std.EquipSkills.Axes2H.enableAutolearnClass(['WARRIOR', 'DEATH_KNIGHT', 'HUNTER', BLDMSTR.Mask], ALLRACES);
std.EquipSkills.Swords2H.enableAutolearnClass(['WARRIOR', 'PALADIN', 'DEATH_KNIGHT', BLDMSTR.Mask], ALLRACES);
std.EquipSkills.Shields.enableAutolearnClass(['WARRIOR', 'PALADIN', 'SHAMAN'], ALLRACES);
std.EquipSkills.Maces2H.enableAutolearnClass(['DEATH_KNIGHT', 'PALADIN', 'WARRIOR'], ALLRACES);
std.EquipSkills.Thrown.enableAutolearnClass(['WARRIOR', 'ROGUE', BLDMSTR.Mask], ALLRACES)
std.EquipSkills.Wands.enableAutolearnClass(['PRIEST', 'WARLOCK', 'MAGE', NECRO.Mask], ALLRACES)

/***********************************************************************
*   Class Armor Skills
************************************************************************/
std.EquipSkills.Cloth.enableAutolearnClass([
    'DEATH_KNIGHT', 'DRUID', 'HUNTER', 'MAGE', 'PALADIN',
    'PRIEST', 'ROGUE', 'SHAMAN', 'WARLOCK', 'WARRIOR', 
    BLDMSTR.Mask, NECRO.Mask
], ALLRACES)

std.EquipSkills.Leather.enableAutolearnClass([
    'DEATH_KNIGHT', 'DRUID', 'HUNTER', 'PALADIN',
    'ROGUE', 'SHAMAN', 'WARRIOR', BLDMSTR.Mask
], ALLRACES)

std.EquipSkills.Mail.enableAutolearnClass([
    'DEATH_KNIGHT', 'PALADIN', 'WARRIOR', 
], ALLRACES)

std.EquipSkills.Plate.enableAutolearnClass('DEATH_KNIGHT', ALLRACES)
