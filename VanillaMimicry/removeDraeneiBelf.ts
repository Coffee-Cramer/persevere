import { DBC, std } from "wow/wotlk"
import { tbcRaceDelete } from "../../serverSettings"

//*******************************************************************************************************************************
//*   Remove Draenei and blood elves from Eastern Kingdoms and Kalimdor. (most of them anyway)
//*******************************************************************************************************************************
const EXODAR = std.Factions.load(930)
const SLVRMOON = std.Factions.load(911)

const TMPLTS = std.CreatureTemplates
const OBJECTS = std.GameObjectTemplates

if(tbcRaceDelete){
    TMPLTS.forEach((npc) => {
        if(npc.FactionTemplate.get() == 1638){ //draenei faction
            npc.delete()
        }
        else if(npc.FactionTemplate.get() == 1604){ //bloodelf faction
            npc.delete()
        }
        else if(npc.FactionTemplate.get() == 1602){ //bloodelf faction
            npc.delete()
        }
        else if(npc.FactionTemplate.get() == 1636){ //bloodelf faction
            npc.delete()
        }
        else if(npc.FactionTemplate.get() == 1734){ //EotS faction
            npc.delete()
        }
        else if(npc.Subname.enGB.get() == "Eye of the Storm Battlemaster"){ 
            npc.delete()
        }
        else if(npc.Name.enGB.get() == "Eye of the Storm Emissary"){
            npc.delete()
        }
    })

    OBJECTS.All.forEach((obj) => {
        if(obj.Name.enGB.get() == "Orb of Translocation"){
            obj.delete()
        }
    })

    const IDS = [
        19848,
        34078
    ]

    IDS.forEach((id) => {
        TMPLTS.load(id).delete()
    })
    
   EXODAR.delete()
   SLVRMOON.delete()

   DBC.ChrRaces.getRow(9).Required_Expansion.set(5)
   DBC.ChrRaces.getRow(10).Required_Expansion.set(5)
}
else{
    TMPLTS.forEach((npc) => {
    if(npc.FactionTemplate.get() == 1638){ //draenei faction
            npc.undelete()
        }
        else if(npc.FactionTemplate.get() == 1604){ //bloodelf faction
            npc.undelete()
        }
        else if(npc.FactionTemplate.get() == 1602){ //bloodelf faction
            npc.undelete()
        }
        else if(npc.FactionTemplate.get() == 1636){ //bloodelf faction
            npc.undelete()
        }
        else if(npc.FactionTemplate.get() == 1734){ //EotS faction
            npc.undelete()
        }
        else if(npc.Subname.enGB.get() == "Eye of the Storm Battlemaster"){ 
            npc.undelete()
        }
        else if(npc.Name.enGB.get() == "Eye of the Storm Emissary"){ 
            npc.undelete()
        }
    })

    const IDS = [
        19848,
        34078
    ]

    IDS.forEach((id) => {
        TMPLTS.load(id).undelete()
    })

    EXODAR.undelete()
    SLVRMOON.undelete()

    DBC.ChrRaces.getRow(9).Required_Expansion.set(0)
    DBC.ChrRaces.getRow(10).Required_Expansion.set(0)
}

