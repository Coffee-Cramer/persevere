import { std } from "wow/wotlk";
import { trainerSpellList } from "../../../../Functions/BlademasterTrainerSpells";
import { setBladeMaster } from "../../../../serverSettings";
import { SWFTSTK } from "../../../RaceClassData/CharClasses/blademaster/spells/swiftStrike/swiftStrike";
import { NORMAL_RESPAWN_TIME } from "../../spawnrates";

export const VOT_TRAINER = std.CreatureTemplates
    .create('shrek6', 'trainer-2', 7790)
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.GOSSIP.set(true)
    .Level.set(5, 5)
    .Models.clearAll()
    .Models.addIds(6575)
    .Weapons.add(922)

VOT_TRAINER.Name.enGB.set("Master Khan")
VOT_TRAINER.Subname.enGB.set('Blademaster')

if(setBladeMaster == true){
    VOT_TRAINER.Spawns.add('shrek6', 'trainer-2', {map:1,x:-620.546265,y:-4210.610352,z:38.134441,o:1.757683}, (npc) => {
        npc.EquipmentID.set(1)
        npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
    })
}

const TRAINER = VOT_TRAINER.Trainer.getRef()

trainerSpellList(TRAINER)

//Faction Specific
//TRAINER.Spells.addGet(ILLALLY_PARENT.ID).RequiredLevel.set(20).row.MoneyCost.set(1600)
//TRAINER.Spells.addGet(ILLSC_PARENT.ID).RequiredLevel.set(28).row.MoneyCost.set(2400)
//TRAINER.Spells.addGet(ILLDI_PARENT.ID).RequiredLevel.set(38).row.MoneyCost.set(10000)
//TRAINER.Spells.addGet(ILLSRG_PARENT.ID).RequiredLevel.set(48).row.MoneyCost.set(20000)


TRAINER.RequirementType.SPELL.set().RequiredSpell.set(SWFTSTK.ID)