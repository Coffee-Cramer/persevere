import { std } from "wow/wotlk";
import { trainerSpellList } from "../../../../Functions/BlademasterTrainerSpells";
import { setBladeMaster } from "../../../../serverSettings";
import { SWFTSTK } from "../../../RaceClassData/CharClasses/blademaster/spells/swiftStrike/swiftStrike";
import { NORMAL_RESPAWN_TIME } from "../../spawnrates";


export const RZH_TRAINER = std.CreatureTemplates
    .create('shrek6', 'razorhill-trainer', 7790)
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.GOSSIP.set(true)
    .Models.clearAll()
    .Models.addIds(7876)
    .Weapons.add(922)
 
RZH_TRAINER.Name.enGB.set("Moktha Boneslicer")
RZH_TRAINER.Subname.enGB.set('Blademaster')

if(setBladeMaster == true){
    RZH_TRAINER.Spawns.add('shrek6', 'razorhill-monk-trainer', {map:1,x:319.793549,y:-4819.372070,z:9.579971,o:3.352039}, (npc) => {
        npc.EquipmentID.set(1)
        npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
    })
}

const TRAINER = RZH_TRAINER.Trainer.getRef()

trainerSpellList(TRAINER)

//Faction Specific
//TRAINER.Spells.addGet(ILLALLY_PARENT.ID).RequiredLevel.set(20).row.MoneyCost.set(1600)
//TRAINER.Spells.addGet(ILLSC_PARENT.ID).RequiredLevel.set(28).row.MoneyCost.set(2400)
//TRAINER.Spells.addGet(ILLDI_PARENT.ID).RequiredLevel.set(38).row.MoneyCost.set(10000)
//TRAINER.Spells.addGet(ILLSRG_PARENT.ID).RequiredLevel.set(48).row.MoneyCost.set(20000)

TRAINER.RequirementType.SPELL.set().RequiredSpell.set(SWFTSTK.ID)