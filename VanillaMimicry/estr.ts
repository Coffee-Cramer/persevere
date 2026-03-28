import { std } from "wow/wotlk";

const TMPLTS = std.CreatureTemplates //all creature templates
const OBJTS = std.GameObjectTemplates.All //all object templates


//*******************************************************************************************************************************
//*   DELETE EASTER EVENT
//*******************************************************************************************************************************
OBJTS.forEach((obj) => { 
    if(obj.Name.enGB.get() == "Brightly Colored Egg"){
        obj.delete()
    }
})

TMPLTS.forEach((npc) => {
    if(npc.Name.enGB.get() == "Noblegarden Vendor"){
        npc.delete()
    }
    if(npc.Name.enGB.get() == "Spring Collector"){
        npc.delete()
    }
    if(npc.Name.enGB.get() == "Noblegarden Merchant"){
        npc.delete()
    }
    if(npc.Name.enGB.get() == "Spring Gatherer"){
        npc.delete()
    }
    if(npc.Name.enGB.get() == "Forsaken Commoner"){
        npc.delete()
    }
    if(npc.Name.enGB.get() == "Orc Commoner"){
        npc.delete()
    }
    if(npc.Name.enGB.get() == "Tauren Commoner"){
        npc.delete()
    }
    if(npc.Name.enGB.get() == "Dwarf Commoner"){
        npc.delete()
    }
    if(npc.Name.enGB.get() == "Human Commoner"){
        npc.delete()
    }
    if(npc.Name.enGB.get() == "Night Elf Commoner"){
        npc.delete()
    }
})