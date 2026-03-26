import { std } from "wow/wotlk"
import { NECRO } from "./necro"

/*******************************************************************************************************************************
*   Enable Swords to be learned for Necromancer
********************************************************************************************************************************/ 
const SKLLINE_1HSWORDS = std.SkillLines.load(43)

SKLLINE_1HSWORDS.Spells.forEach(x => x
    .ClassMask.add(NECRO.Mask)
)

std.Spells.load(5019).AutoLearn.add(1, NECRO.Mask)

/*******************************************************************************************************************************
*   Enable Staves to be learned for Necromancer
********************************************************************************************************************************/
const SKLLINE_STVS = std.SkillLines.load(136)

SKLLINE_STVS.Spells.forEach(x => x
    .ClassMask.add(NECRO.Mask)
)