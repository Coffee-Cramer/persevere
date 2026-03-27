import { std } from "wow/wotlk";
import { BLDMSTR } from "../RaceClassData/CharClasses/blademaster/blademaster";
import { EMOTES } from "../../Enumerators&Arrays/NPCemotes";



const TMPLTS = std.CreatureTemplates //all creature templates

//*******************************************************************************************************************************
//*   Remove the Through The Dark Portal quests 
//*******************************************************************************************************************************
const TTDP = std.Quests.load(9407)
TTDP.delete()

const TTDP2 = std.Quests.load(11046)
TTDP2.delete()

const TTDP3 = std.Quests.load(10119)
TTDP3.delete()

//*******************************************************************************************************************************
//*   Remove murloc nigga
//*******************************************************************************************************************************
const ZAS = std.CreatureTemplates.load(7951)
ZAS.delete()

//*******************************************************************************************************************************
//*   Remove vendor outside of Khara
//*******************************************************************************************************************************
const DARIUS = std.CreatureTemplates.load(18255)
DARIUS.delete()


//*******************************************************************************************************************************
//*   Remove Isle of Conquest Emissaries
//*******************************************************************************************************************************
TMPLTS.forEach((npc) => {
    if(npc.Name.enGB.get() == "Isle of Conquest Emissary"){
        npc.delete()
    }
})


//*******************************************************************************************************************************
//*   Remove Isle of Conquest Envoys
//*******************************************************************************************************************************
TMPLTS.forEach((npc) => {
    if(npc.Name.enGB.get() == "Isle of Conquest Envoy"){
        npc.delete()
    }
})


//*******************************************************************************************************************************
//*   Remove Isle of Conquest Battlemasters
//*******************************************************************************************************************************
TMPLTS.forEach((npc) => {
    if(npc.Subname.enGB.get() == "Isle of Conquest Battlemaster"){
        npc.delete()
    }
})


/*******************************************************************************************************************************
*   Alterac Syndicate Camp Rare Fix (too low level)
********************************************************************************************************************************/
const SYNDICATE_CAMP_RARE = std.CreatureTemplates.load(14281)
    .Level.set(33, 34)



/*******************************************************************************************************************************
*   Strand of the Ancients Emissary/Envoy delete
********************************************************************************************************************************/
const STRNDEM = std.CreatureTemplates.load(30566).delete()
const STRNDENV = std.CreatureTemplates.load(30567).delete()


/*******************************************************************************************************************************
*   Only Rogues can wear Red Defias Mask
********************************************************************************************************************************/
const RDMSK = std.Items.load(7997)
    .ClassMask.remove(BLDMSTR.Mask)
    .ClassMask.remove(NECRO.Mask)

/*******************************************************************************************************************************
*   Class Books Blademaster removal
********************************************************************************************************************************/
//HUNTER
const HWK7 = std.Items.load(21307)
HWK7.ClassMask.remove(BLDMSTR.Mask)
HWK7.ClassMask.remove(NECRO.Mask)

const SRTSTG9 = std.Items.load(21306)
SRTSTG9.ClassMask.remove(BLDMSTR.Mask)
SRTSTG9.ClassMask.remove(NECRO.Mask)

const MLTSHT5 = std.Items.load(21304)
MLTSHT5.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const TRNQSHT = std.Items.load(16665)
TRNQSHT.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)


//DRUID
const REJUV11 = std.Items.load(21296)
REJUV11.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const HLGTCH11 = std.Items.load(21294)
HLGTCH11.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const STRFR7 = std.Items.load(21295)
STRFR7.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const FBITE5 = std.Items.load(24101)
FBITE5.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const GFTWLD = std.Items.load(17682)
GFTWLD.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const GFTWLD2 = std.Items.load(17683)
GFTWLD2.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const GFTWLD3 = std.Items.load(22146)
GFTWLD3.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)


//MAGE
const CNJRFD7 = std.Items.load(22897)
CNJRFD7.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const FRSTWRD5 = std.Items.load(22890)
FRSTWRD5.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const PLMRPHT = std.Items.load(22739)
PLMRPHT.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const ACNMSSL8 = std.Items.load(21280)
ACNMSSL8.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const FRBL12 = std.Items.load(21279)
FRBL12.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const FRSTBLT11 = std.Items.load(21214)
FRSTBLT11.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const ARCBRLC = std.Items.load(18600)
ARCBRLC.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const PLBLKCAT = std.Items.load(44709)
PLBLKCAT.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const PMTURKY = std.Items.load(44811)
PMTURKY.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)


//PALADIN
const BLSMGHT7 = std.Items.load(21289)
BLSMGHT7.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const BLSWSDM6 = std.Items.load(21288)
BLSWSDM6.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const HLYLT6 = std.Items.load(21290)
HLYLT6.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)


//PRIEST
const PRYRFRT = std.Items.load(17413)
PRYRFRT.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const PRYRFRT2 = std.Items.load(17414)
PRYRFRT2.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const GRTHL5 = std.Items.load(21284)
GRTHL5.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const RNW10 = std.Items.load(21285)
RNW10.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const PRYRHL5 = std.Items.load(21287)
PRYRHL5.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const PRYSHDWP = std.Items.load(22393)
PRYSHDWP.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)


//ROGUE
const BCKSTB9 = std.Items.load(21300)
BCKSTB9.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const DDLYPSN5 = std.Items.load(21302)
DDLYPSN5.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const FNT5 = std.Items.load(21303)
FNT5.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const EVS9 = std.Items.load(24102)
EVS9.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)


//SHAMAN
const FLMSHK6 = std.Items.load(23320)
FLMSHK6.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const GRCAIR3 = std.Items.load(21293)
GRCAIR3.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const HLNGWV10 = std.Items.load(21291)
HLNGWV10.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const STRERTH5 = std.Items.load(21292)
STRERTH5.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)


//WARLOCK
const CRPT7 = std.Items.load(21283)
CRPT7.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const IMMO8 = std.Items.load(21282)
IMMO8.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const SHDWBLT10 = std.Items.load(21281)
SHDWBLT10.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const SHDWWRD4 = std.Items.load(22891)
SHDWWRD4.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const RTLDM = std.Items.load(4213)
RTLDM.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const INFRNL = std.Items.load(9214)
INFRNL.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)


//WARRIOR
const BSHOUT7 = std.Items.load(21298)
BSHOUT7.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const HRCSTK9 = std.Items.load(21297)
HRCSTK9.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)

const RVNG6 = std.Items.load(21299)
RVNG6.ClassMask.remove(BLDMSTR.Mask).ClassMask.remove(NECRO.Mask)



/*******************************************************************************************************************************
*   Remove dark portal access
********************************************************************************************************************************/
const OUTLAND = std.Maps.load(530)
OUTLAND.Expansion.set(5) 


/*******************************************************************************************************************************
*   Make Wild Turkeys Critters deleted
********************************************************************************************************************************/
const TRKY = std.CreatureTemplates.load(32820)
    .Type.CRITTER.set()
TRKY.delete()


/*******************************************************************************************************************************
*   Delete wintergrasp battlemasters
********************************************************************************************************************************/
TMPLTS.forEach((npc) => {
    if(npc.Subname.enGB.get() == "Wintergrasp Battle-Mage"){
        npc.delete()
    }
})

//*******************************************************************************************************************************
//*   DELETE EASTER EVENT
//*******************************************************************************************************************************
const OBJTS = std.GameObjectTemplates.All

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
