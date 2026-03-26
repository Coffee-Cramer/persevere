import { std } from "wow/wotlk";

const TMPLTS = std.CreatureTemplates

TMPLTS.forEach((npc) => {
    if(npc.TypeFlags.GHOST.get()){
        npc.MechanicImmunity.BLEED.set(1)
    }
})
