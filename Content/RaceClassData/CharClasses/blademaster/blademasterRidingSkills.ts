import { std } from "wow/wotlk";
import { BLDMSTR } from "./blademaster";

/*******************************************************************************************************************************
*   Journeyman Riding fix (Blademaster couldn't learn)
********************************************************************************************************************************/
const JRDING = std.Spells.load(33391)
    .SkillLines.getIndex(0).ClassMask.add(BLDMSTR.Mask)