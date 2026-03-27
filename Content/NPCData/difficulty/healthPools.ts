import { std } from "wow/wotlk";

const NPCS = std.CreatureTemplates

NPCS.forEach((npc) => {     //0.3 seems to be the sweet spot
    if(npc.Level.Max.get() > 1 && npc.Level.Max.get() <= 5){
        npc.Stats.HealthMod.set(npc.Stats.HealthMod.get() + 0.4)
    }
    else if(npc.Level.Min.get() >= 5 && npc.Level.Max.get() <= 10){
        npc.Stats.HealthMod.set(npc.Stats.HealthMod.get() + 0.3)
    }
    else if(npc.Level.Min.get() >= 10 && npc.Level.Max.get() <= 20){
        npc.Stats.HealthMod.set(npc.Stats.HealthMod.get() + 0.35)
    }
    else if(npc.Level.Min.get() >= 20 && npc.Level.Max.get() <= 30){
        npc.Stats.HealthMod.set(npc.Stats.HealthMod.get() + 0.4)
    }
    else if(npc.Level.Min.get() >= 30 && npc.Level.Max.get() <= 40){
        npc.Stats.HealthMod.set(npc.Stats.HealthMod.get() + 0.45)
    }
    else if(npc.Level.Min.get() >= 40 && npc.Level.Max.get() <= 50){
        npc.Stats.HealthMod.set(npc.Stats.HealthMod.get() + 0.5)
    }
    else if(npc.Level.Min.get() >= 50 && npc.Level.Max.get() <= 60){
        npc.Stats.HealthMod.set(npc.Stats.HealthMod.get() + 0.6)
    }
}) 
