import { MaskCon } from "wow/data/cell/cells/MaskCell";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { RaceMask } from "wow/wotlk/std/Race/RaceType";

export const ALLCLASSES: MaskCon<keyof typeof ClassMask> = [
    'DEATH_KNIGHT', 'DRUID', 'HUNTER', 
    'MAGE', 'PALADIN', 'PRIEST', 
    'ROGUE', 'SHAMAN', 'WARLOCK', 
    'WARRIOR', //BLDMSTR.Mask
]

export const ALLRACES: MaskCon<keyof typeof RaceMask> = [
    'BLOODELF', 'DRAENEI', 'DWARF', 
    'GNOME', 'HUMAN', 'NIGHTELF', 
    'ORC', 'TAUREN', 'TROLL', 'UNDEAD'
]

export const HORDE_RACES: MaskCon<keyof typeof RaceMask> = [
    'BLOODELF', 'ORC', 'TAUREN', 'TROLL', 'UNDEAD'
]

export const ALLIANCE_RACES: MaskCon<keyof typeof RaceMask> = [
    'DRAENEI', 'DWARF', 'GNOME', 'HUMAN', 'NIGHTELF'
]

export const enum ALLRACES_ENUM {
    HUMAN = 1,
    ORC, //2...
    DWARF,
    NIGHTELF,
    UNDEAD,
    TAUREN,
    GNOME,
    TROLL,
    BLOODELF = 10,
    DRAENEI = 11
}

export const enum ALLCLASSES_ENUM {
    WARRIOR = 1,
    PALADIN,
    HUNTER,
    ROGUE,
    PRIEST,
    DEATH_KNIGHT,
    SHAMAN,
    MAGE,
    WARLOCK,
    DRUID = 11,
    BLADEMASTER
}
