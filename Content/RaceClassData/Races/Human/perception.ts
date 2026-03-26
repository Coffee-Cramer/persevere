import { std } from "wow/wotlk"
import { learnSpell } from "../../../../Functions/learnSpell"
import { ALLCLASSES } from "../../../../Enumerators&Arrays/allRacesAllClassesArrays"

/*******************************************************************************************************************************
*   Remove Every Man for Himself and replace with perception
********************************************************************************************************************************/
const EMH = std.Spells.load(59752)
EMH.SkillLines.getIndex(0).AcquireMethod.TRAINER.set()

const PRCPTN_PASSIVE = std.Spells.load(58985)
PRCPTN_PASSIVE.SkillLines.getIndex(0).AcquireMethod.TRAINER.set()

const PRCPTN = std.Spells.load(20600)

learnSpell(PRCPTN.ID, 1, ALLCLASSES, 'HUMAN')