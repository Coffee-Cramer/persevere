import { std } from "wow/wotlk";

const TMPLTS = std.CreatureTemplates //all creature templates

/*******************************************************************************************************************************
*   Delete wintergrasp battlemasters
********************************************************************************************************************************/
TMPLTS.forEach((npc) => {
    if(npc.Subname.enGB.get() == "Wintergrasp Battle-Mage"){
        npc.delete()
    }
})