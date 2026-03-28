import { std } from "wow/wotlk"

/*******************************************************************************************************************************
*   Make Northshire Defias aggresive
********************************************************************************************************************************/
const DEFIAS = std.CreatureTemplates.load(38)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const GARRICKPADFOOT = std.CreatureTemplates.load(103)
    .FactionTemplate.NEUTRAL_HOSTILE.set()


/*******************************************************************************************************************************
*   Make VoT demons aggresive
********************************************************************************************************************************/
const VILEFAMILIAR = std.CreatureTemplates.load(3101)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const FELSTALK = std.CreatureTemplates.load(3102)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const YARROG = std.CreatureTemplates.load(3183)
    .FactionTemplate.NEUTRAL_HOSTILE.set()


/*******************************************************************************************************************************
*   Make Death Knell spiders & scarlets aggresive
********************************************************************************************************************************/
const NIGHTWEB = std.CreatureTemplates.load(1505)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const SCARLETCONVERT = std.CreatureTemplates.load(1506)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const SCARLETINITIATE = std.CreatureTemplates.load(1507)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const MEVEN = std.CreatureTemplates.load(1667)
    .FactionTemplate.NEUTRAL_HOSTILE.set()


/*******************************************************************************************************************************
*   Make Coldridge trolls aggresive
********************************************************************************************************************************/
const WHELP = std.CreatureTemplates.load(706)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const NOVICE = std.CreatureTemplates.load(946)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const GRIKNIR = std.CreatureTemplates.load(808)
    .FactionTemplate.NEUTRAL_HOSTILE.set()


/*******************************************************************************************************************************
*   Make Red Cloud Mesa mobs aggresive
********************************************************************************************************************************/
const QUILBOAR = std.CreatureTemplates.load(2952)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const QUILBSHAMAN = std.CreatureTemplates.load(2953)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const BATTLEBOAR2 = std.CreatureTemplates.load(2954)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const BATTLEBOAR = std.CreatureTemplates.load(2966)
    .FactionTemplate.NEUTRAL_HOSTILE.set()


/*******************************************************************************************************************************
*   Make Crash Site mobs aggresive
********************************************************************************************************************************/
const BLDELF = std.CreatureTemplates.load(16521)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const SURVEYOR = std.CreatureTemplates.load(16522)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const OMMKIN = std.CreatureTemplates.load(16537)
    .FactionTemplate.NEUTRAL_HOSTILE.set()


/*******************************************************************************************************************************
*   Make Sunstrider Isle mobs aggresive
********************************************************************************************************************************/
const WRAITH = std.CreatureTemplates.load(15273)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const TAINTEDWRAITH = std.CreatureTemplates.load(15298)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

const FELENDREN = std.CreatureTemplates.load(15367)
    .FactionTemplate.NEUTRAL_HOSTILE.set()

