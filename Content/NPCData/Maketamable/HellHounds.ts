import { std } from "wow/wotlk"

/**********************************************************************************************
* Make Demondogs beasts, and make them tame-able
***********************************************************************************************/
const DRKHND = std.CreatureTemplates.load(1547) //darkhound, tirisfal glades
DRKHND.Type.BEAST.set()
DRKHND.TypeFlags.TAMEABLE.set(true)
DRKHND.Family.WOLF.set()

const PLGHND_RUNT = std.CreatureTemplates.load(8596) //plaguehound runt, plaguelands
PLGHND_RUNT.Type.BEAST.set()
PLGHND_RUNT.TypeFlags.TAMEABLE.set(true)
PLGHND_RUNT.Family.WOLF.set()

const PLGHND = std.CreatureTemplates.load(8597) //plaguehound, plaguelands
PLGHND.Type.BEAST.set()
PLGHND.TypeFlags.TAMEABLE.set(true)
PLGHND.Family.WOLF.set()

const FRNZY_PLGHND = std.CreatureTemplates.load(8598) //frenzied plaguehound, plaguelands
FRNZY_PLGHND.Type.BEAST.set()
FRNZY_PLGHND.TypeFlags.TAMEABLE.set(true)
FRNZY_PLGHND.Family.WOLF.set()

const BLDHND = std.CreatureTemplates.load(8921) //bloodhound, blackrock depths
BLDHND.Type.BEAST.set()
BLDHND.TypeFlags.TAMEABLE.set(true)
BLDHND.Family.WOLF.set()
