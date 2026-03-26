import { std } from "wow/wotlk"

/*******************************************************************************************************************************
*   Change Kor'kron Overseers back to Aboms
********************************************************************************************************************************/
const KORKRON_OVERSEER = std.CreatureTemplates.load(36213)
KORKRON_OVERSEER
    .Name.enGB.set("Undercity Guardian")
    .Models.clearAll()
    .Models.addIds(10006)
    .FactionTemplate.UNDERCITY.set()