import { std } from "wow/wotlk";

//*************************************************************************************************************************
//* Dual Wield learned by trainer at level 10
//*************************************************************************************************************************
const DUALWIELD = std.Spells.load(674)
    .SkillLines.getIndex(0).AcquireMethod.TRAINER.set()