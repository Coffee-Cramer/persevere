import { std } from "wow/wotlk";

const TMPLTS = std.CreatureTemplates

TMPLTS.forEach((npc) => {
    if(npc.Type.MECHANICAL.is()){
        npc.MechanicImmunity.BLEED.set(1)
        npc.MechanicImmunity.FEAR.set(1)
        npc.MechanicImmunity.HORROR.set(1)
        npc.MechanicImmunity.INFECTED.set(1)
        npc.MechanicImmunity.SLEEP.set(1)
    }
})