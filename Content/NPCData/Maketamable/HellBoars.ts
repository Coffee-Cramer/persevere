import { std } from "wow/wotlk"

/**********************************************************************************************
* Make Hellboars beasts, and make them tame-able
***********************************************************************************************/
const HLLBR = std.CreatureTemplates.load(5993) //Hellboar, The Blasted Lands
HLLBR.Type.BEAST.set()
HLLBR.TypeFlags.TAMEABLE.set(true)
HLLBR.Family.BOAR.set()