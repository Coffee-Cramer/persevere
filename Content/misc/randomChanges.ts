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
//*   Remove veteran gladiator (glitched model)
//*******************************************************************************************************************************
const VETGLAD = std.CreatureTemplates.load(22097)
VETGLAD.delete()

//*******************************************************************************************************************************
//*   Remove inscription trainers 
//*******************************************************************************************************************************
TMPLTS.forEach((npc) => {
    if(npc.Subname.enGB.get() == "Inscription Trainer"){
        npc.delete()
    }
    if(npc.Subname.enGB.get() == "Inscription Supplies"){
        npc.delete()
    }
})

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
*   Amani Berserker Nerf (lvl 8-10, Eversong Woods) (Frenzy was broken)
********************************************************************************************************************************/
const FRENZY = std.Spells.load(8269)
FRENZY.Effects.get(0).PointsBase.set(4)



/*******************************************************************************************************************************
*   Training Sword Nerf
********************************************************************************************************************************/
const TRNGSRD = std.Items.load(8178).delete()
//TRNGSRD.Damage.clear(0)
//TRNGSRD.Damage.addPhysical(15, 23)



/*******************************************************************************************************************************
*   Severing Axe Nerf
********************************************************************************************************************************/
const SVNGAXE = std.Items.load(4562).delete()
//SVNGAXE.Damage.clear(0)
//SVNGAXE.Damage.addPhysical(14, 21)




/*******************************************************************************************************************************
*   Masophet The Black (was not spawning at the correct spot on the map)
********************************************************************************************************************************/
const MASOPHET = std.CreatureTemplates.load(16249)

const MASOPHET2 = std.CreatureTemplates.create("shrek6", "MASOPHET", 16249)
MASOPHET2.Spawns.add('shrek6', 'MASOPHETSPAWN', {map:530,x:6306.701172,y:-6463.311035,z:86.009979,o:3.882993})

MASOPHET.delete()




/*******************************************************************************************************************************
*   Burning Blade Voidwalker Nerf (skull rock)
********************************************************************************************************************************/
const VOID_DRAIN = std.Spells.load(33915)
    .Effects.get(0).PointsBase.set(10)




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
*   Blood Elf Paladin Trainers Fix (couldn't train)
********************************************************************************************************************************/
const BELF_PAL_TRAINER1_DELETE = std.CreatureTemplates.load(15280).delete() //15521
const BELF_PAL_TRAINER1 = std.CreatureTemplates.create("shrek6", "BELF_PAL_TRAINER1")
    .NPCFlags.TRAINER.set(true)
    .Models.clearAll()
    .Models.addIds(15521)
    .Level.set(5)
    .NPCFlags.GOSSIP.set(true)
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.CLASS_TRAINER.set(true)
    
    .Spawns.add('shrek6', 'sunstriderIsle-paladin-trainer', {map:530,x:10366.456055,y:-6431.642090,z:38.533459,o:0.447383})
BELF_PAL_TRAINER1.Name.enGB.set('Jesthenis Sunstriker')
BELF_PAL_TRAINER1.Subname.enGB.set('Paladin Trainer')
BELF_PAL_TRAINER1.Trainer.set(3)


const BELF_PAL_TRAINER2_DELETE = std.CreatureTemplates.load(16275).delete()
const BELF_PAL_TRAINER2 = std.CreatureTemplates.create("shrek6", "BELF_PAL_TRAINER2")
    .NPCFlags.TRAINER.set(true)
    .Models.clearAll()
    .Models.addIds(16685)
    .Level.set(12)
    .NPCFlags.GOSSIP.set(true)
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.CLASS_TRAINER.set(true)
    
    .Spawns.add('shrek6', 'falconWingSquare-paladin-trainer', {map:530,x:9516.099609,y:-6870.941406,z:18.749538,o:6.244402})
BELF_PAL_TRAINER2.Name.enGB.set('Noellene')
BELF_PAL_TRAINER2.Subname.enGB.set('Paladin Trainer')
BELF_PAL_TRAINER2.Trainer.set(3)


const BELF_PAL_TRAINER3_DELETE = std.CreatureTemplates.load(16681).delete()
const BELF_PAL_TRAINER3 = std.CreatureTemplates.create("shrek6", "BELF_PAL_TRAINER3")
    .NPCFlags.TRAINER.set(true)
    .Models.clearAll()
    .Models.addIds(16829)
    .Level.set(60)
    .NPCFlags.GOSSIP.set(true)
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.CLASS_TRAINER.set(true)
    
    .Spawns.add('shrek6', 'silvermoon-paladin-trainer1', {map:530,x:9850.967773,y:-7517.728516,z:19.734570,o:1.436708})
BELF_PAL_TRAINER3.Name.enGB.set('Champion Bachi')
BELF_PAL_TRAINER3.Subname.enGB.set('Paladin Trainer')
BELF_PAL_TRAINER3.Trainer.set(3)


const BELF_PAL_TRAINER4_DELETE = std.CreatureTemplates.load(16680).delete()
const BELF_PAL_TRAINER4 = std.CreatureTemplates.create("shrek6", "BELF_PAL_TRAINER4")
    .NPCFlags.TRAINER.set(true)
    .Models.clearAll()
    .Models.addIds(16815)
    .Level.set(40)
    .NPCFlags.GOSSIP.set(true)
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.CLASS_TRAINER.set(true)
    
    .Spawns.add('shrek6', 'silvermoon-paladin-trainer2', {map:530,x:9846.309570,y:-7504.639648,z:19.657469,o:4.802154})
BELF_PAL_TRAINER4.Name.enGB.set('Osselan')
BELF_PAL_TRAINER4.Subname.enGB.set('Paladin Trainer')
BELF_PAL_TRAINER4.Trainer.set(3)


const BELF_PAL_TRAINER5_DELETE = std.CreatureTemplates.load(16679).delete()
const BELF_PAL_TRAINER5 = std.CreatureTemplates.create("shrek6", "BELF_PAL_TRAINER5")
    .NPCFlags.TRAINER.set(true)
    .Models.clearAll()
    .Models.addIds(16811)
    .Level.set(50)
    .NPCFlags.GOSSIP.set(true)
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.CLASS_TRAINER.set(true)
    
    .Spawns.add('shrek6', 'silvermoon-paladin-trainer3', {map:530,x:9855.683594,y:-7505.434570,z:19.679930,o:4.542198})
BELF_PAL_TRAINER5.Name.enGB.set('Ithelis')
BELF_PAL_TRAINER5.Subname.enGB.set('Paladin Trainer')
BELF_PAL_TRAINER5.Trainer.set(3)


const BELF_PAL_TRAINER6_DELETE = std.CreatureTemplates.load(23128).delete()
const BELF_PAL_TRAINER6 = std.CreatureTemplates.create("shrek6", "BELF_PAL_TRAINER6")
    .NPCFlags.TRAINER.set(true)
    .Models.clearAll()
    .Models.addIds(21264)
    .Level.set(70)
    .NPCFlags.GOSSIP.set(true)
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.CLASS_TRAINER.set(true)
    
    .Spawns.add('shrek6', 'ORG-paladin-trainer', {map:1,x:1939.671753,y:-4133.250977,z:41.144260,o:4.009429})
BELF_PAL_TRAINER6.Name.enGB.set('Master Pyreanor')
BELF_PAL_TRAINER6.Subname.enGB.set('Paladin Trainer')
BELF_PAL_TRAINER6.Trainer.set(3)


const BELFPAL_TRAINERS = [BELF_PAL_TRAINER1, BELF_PAL_TRAINER2, BELF_PAL_TRAINER3, BELF_PAL_TRAINER4, BELF_PAL_TRAINER5, BELF_PAL_TRAINER6]

        for(const trainer of BELFPAL_TRAINERS){
            const trainer_index = trainer

            trainer_index.Gossip.modRef((gossip) => {
                gossip.Text.add({enGB: 'The light has not abandoned us just yet.'})

                gossip.Options.addMod((option) => {
                    option.Icon.CHAT.set()
                    .Text.setSimple({enGB:'Train me.'})
                    .Action.TRAINER.set(3)
                })

                gossip.Options.addMod((option2) => {
                    option2.Icon.CHAT.set()
                    .Text.setSimple({enGB:'I wish to unlearn my talents.'})
                    .Action.UNLEARN_TALENTS.set()
                })
            })
        }


/*******************************************************************************************************************************
*   Harvest Golem Model Change
********************************************************************************************************************************/
const HARVEST_GOLEM = std.CreatureTemplates.load(36)

HARVEST_GOLEM.Models.clearAll()
HARVEST_GOLEM.Models.addIds(378)



/*******************************************************************************************************************************
*   Only Rogues can wear Red Defias Mask
********************************************************************************************************************************/
const RDMSK = std.Items.load(7997)
    .ClassMask.remove(BLDMSTR.Mask)





/*******************************************************************************************************************************
*   Fierce Winds removal (made every mob in kalimdor have this aura on accident)
********************************************************************************************************************************/
const FIERCEWINDS = std.Spells.load(53700)

FIERCEWINDS.Attributes.HIDE_AURA_IF_NOT_SELF_CAST.set(1)
FIERCEWINDS.Attributes.HIDE_AURA_IF_SELF_CAST.set(1)

//console.log(FIERCEWINDS.objectify())
//console.log(std.Spells.load(GOTN.ID).objectify())



/*******************************************************************************************************************************
*   Class Books Blademaster removal
********************************************************************************************************************************/
//HUNTER
const HWK7 = std.Items.load(21307)
HWK7.ClassMask.remove(BLDMSTR.Mask)

const SRTSTG9 = std.Items.load(21306)
SRTSTG9.ClassMask.remove(BLDMSTR.Mask)

const MLTSHT5 = std.Items.load(21304)
MLTSHT5.ClassMask.remove(BLDMSTR.Mask)

const TRNQSHT = std.Items.load(16665)
TRNQSHT.ClassMask.remove(BLDMSTR.Mask)


//DRUID
const REJUV11 = std.Items.load(21296)
REJUV11.ClassMask.remove(BLDMSTR.Mask)

const HLGTCH11 = std.Items.load(21294)
HLGTCH11.ClassMask.remove(BLDMSTR.Mask)

const STRFR7 = std.Items.load(21295)
STRFR7.ClassMask.remove(BLDMSTR.Mask)

const FBITE5 = std.Items.load(24101)
FBITE5.ClassMask.remove(BLDMSTR.Mask)

const GFTWLD = std.Items.load(17682)
GFTWLD.ClassMask.remove(BLDMSTR.Mask)

const GFTWLD2 = std.Items.load(17683)
GFTWLD2.ClassMask.remove(BLDMSTR.Mask)

const GFTWLD3 = std.Items.load(22146)
GFTWLD3.ClassMask.remove(BLDMSTR.Mask)


//MAGE
const CNJRFD7 = std.Items.load(22897)
CNJRFD7.ClassMask.remove(BLDMSTR.Mask)

const FRSTWRD5 = std.Items.load(22890)
FRSTWRD5.ClassMask.remove(BLDMSTR.Mask)

const PLMRPHT = std.Items.load(22739)
PLMRPHT.ClassMask.remove(BLDMSTR.Mask)

const ACNMSSL8 = std.Items.load(21280)
ACNMSSL8.ClassMask.remove(BLDMSTR.Mask)

const FRBL12 = std.Items.load(21279)
FRBL12.ClassMask.remove(BLDMSTR.Mask)

const FRSTBLT11 = std.Items.load(21214)
FRSTBLT11.ClassMask.remove(BLDMSTR.Mask)

const ARCBRLC = std.Items.load(18600)
ARCBRLC.ClassMask.remove(BLDMSTR.Mask)

const PLBLKCAT = std.Items.load(44709)
PLBLKCAT.ClassMask.remove(BLDMSTR.Mask)

const PMTURKY = std.Items.load(44811)
PMTURKY.ClassMask.remove(BLDMSTR.Mask)


//PALADIN
const BLSMGHT7 = std.Items.load(21289)
BLSMGHT7.ClassMask.remove(BLDMSTR.Mask)

const BLSWSDM6 = std.Items.load(21288)
BLSWSDM6.ClassMask.remove(BLDMSTR.Mask)

const HLYLT6 = std.Items.load(21290)
HLYLT6.ClassMask.remove(BLDMSTR.Mask)


//PRIEST
const PRYRFRT = std.Items.load(17413)
PRYRFRT.ClassMask.remove(BLDMSTR.Mask)

const PRYRFRT2 = std.Items.load(17414)
PRYRFRT2.ClassMask.remove(BLDMSTR.Mask)

const GRTHL5 = std.Items.load(21284)
GRTHL5.ClassMask.remove(BLDMSTR.Mask)

const RNW10 = std.Items.load(21285)
RNW10.ClassMask.remove(BLDMSTR.Mask)

const PRYRHL5 = std.Items.load(21287)
PRYRHL5.ClassMask.remove(BLDMSTR.Mask)

const PRYSHDWP = std.Items.load(22393)
PRYSHDWP.ClassMask.remove(BLDMSTR.Mask)


//ROGUE
const BCKSTB9 = std.Items.load(21300)
BCKSTB9.ClassMask.remove(BLDMSTR.Mask)

const DDLYPSN5 = std.Items.load(21302)
DDLYPSN5.ClassMask.remove(BLDMSTR.Mask)

const FNT5 = std.Items.load(21303)
FNT5.ClassMask.remove(BLDMSTR.Mask)

const EVS9 = std.Items.load(24102)
EVS9.ClassMask.remove(BLDMSTR.Mask)


//SHAMAN
const FLMSHK6 = std.Items.load(23320)
FLMSHK6.ClassMask.remove(BLDMSTR.Mask)

const GRCAIR3 = std.Items.load(21293)
GRCAIR3.ClassMask.remove(BLDMSTR.Mask)

const HLNGWV10 = std.Items.load(21291)
HLNGWV10.ClassMask.remove(BLDMSTR.Mask)

const STRERTH5 = std.Items.load(21292)
STRERTH5.ClassMask.remove(BLDMSTR.Mask)


//WARLOCK
const CRPT7 = std.Items.load(21283)
CRPT7.ClassMask.remove(BLDMSTR.Mask)

const IMMO8 = std.Items.load(21282)
IMMO8.ClassMask.remove(BLDMSTR.Mask)

const SHDWBLT10 = std.Items.load(21281)
SHDWBLT10.ClassMask.remove(BLDMSTR.Mask)

const SHDWWRD4 = std.Items.load(22891)
SHDWWRD4.ClassMask.remove(BLDMSTR.Mask)

const RTLDM = std.Items.load(4213)
RTLDM.ClassMask.remove(BLDMSTR.Mask)

const INFRNL = std.Items.load(9214)
INFRNL.ClassMask.remove(BLDMSTR.Mask)


//WARRIOR
const BSHOUT7 = std.Items.load(21298)
BSHOUT7.ClassMask.remove(BLDMSTR.Mask)

const HRCSTK9 = std.Items.load(21297)
HRCSTK9.ClassMask.remove(BLDMSTR.Mask)

const RVNG6 = std.Items.load(21299)
RVNG6.ClassMask.remove(BLDMSTR.Mask)



/*******************************************************************************************************************************
*   Remove dark portal access
********************************************************************************************************************************/
const OUTLAND = std.Maps.load(530)
OUTLAND.Expansion.set(1) 


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