import { std } from "wow/wotlk"
import { learnSpell } from "../../../../Functions/learnSpell"

//*******************************************************************************************************************************
//*   Teach racials to custom race/class combos
//*******************************************************************************************************************************
std.Spells.load(28878).AutoLearn.add(1, 'WARLOCK', 'DRAENEI')
std.Spells.load(59544).AutoLearn.add(1, 'WARLOCK', 'DRAENEI')
std.Spells.load(59538).AutoLearn.add(1, 'WARLOCK', 'DRAENEI')

std.Spells.load(6562).AutoLearn.add(1, 'ROGUE', 'DRAENEI')
std.Spells.load(28880).AutoLearn.add(1, 'ROGUE', 'DRAENEI')
std.Spells.load(59221).AutoLearn.add(1, 'ROGUE', 'DRAENEI')