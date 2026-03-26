import { std } from "wow/wotlk"
import { BLDMSTR } from "./blademaster"

/*******************************************************************************************************************************
*   Enable Polearms to be learned for Blademaster
********************************************************************************************************************************/ 
const SKLLINE_PLRMS = std.SkillLines.load(229)

SKLLINE_PLRMS.Spells.forEach(x => x
    .ClassMask.add(BLDMSTR.Mask)
)

/*******************************************************************************************************************************
*   Enable Staves to be learned for Blademaster
********************************************************************************************************************************/
const SKLLINE_STVS = std.SkillLines.load(136)

SKLLINE_STVS.Spells.forEach(x => x
    .ClassMask.add(BLDMSTR.Mask)
)

/*******************************************************************************************************************************
*   Enable Bows to be learned for Blademaster
********************************************************************************************************************************/
const SKLLINE_BOWS = std.SkillLines.load(45)

SKLLINE_BOWS.Spells.forEach(x => x
    .ClassMask.add(BLDMSTR.Mask)
)

/*******************************************************************************************************************************
*   Enable Crossbows to be learned for Blademaster
********************************************************************************************************************************/
const SKLLINE_CRSBWS = std.SkillLines.load(226)

SKLLINE_CRSBWS.Spells.forEach(x => x
    .ClassMask.add(BLDMSTR.Mask)
)

/*******************************************************************************************************************************
*   Enable Guns to be learned for Blademaster
********************************************************************************************************************************/
const SKLLINE_GUNS = std.SkillLines.load(46)

SKLLINE_GUNS.Spells.forEach(x => x
    .ClassMask.add(BLDMSTR.Mask)
)
