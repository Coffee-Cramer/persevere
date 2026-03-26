import { std } from "wow/wotlk";
import { NORMAL_RESPAWN_TIME } from "../spawnrates";
import { RAISEDEAD } from "../../RaceClassData/CharClasses/Necromancer/spells/raiseDead";
import { trainerSpellListNecro } from "../../../Functions/necroTrainerList";

/*******************************************************************************************************************************
*   Northshire Necromancer Trainer Data
********************************************************************************************************************************/ 
export const NTHSHIRE_NECROTRNR = std.CreatureTemplates
    .create('shrek6', 'necroTrainerNorthshire', 7790)
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.GOSSIP.set(true)
    .Level.set(10, 11)
    .Models.clearAll()
    .Models.addIds(10954)
    .Weapons.add(2209)
    .FactionTemplate.STORMWIND.set()

NTHSHIRE_NECROTRNR.Name.enGB.set("Marcel Blightbringer")
NTHSHIRE_NECROTRNR.Subname.enGB.set('Necromancer Trainer')

NTHSHIRE_NECROTRNR.Spawns.add('shrek6', 'necroTrainerNorthshireSpawn', {map:0,x:-8928.054688,y:-177.999680,z:80.795090,o:4.321609}, (npc) => {
    npc.EquipmentID.set(1)
    npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
})

export const TRAINERNRTHSHIRE_NECRO = NTHSHIRE_NECROTRNR.Trainer.getRef()



/*******************************************************************************************************************************
*   Goldshire Necromancer Trainer Data
********************************************************************************************************************************/ 
export const GLDSHIRE_NECROTRNR = std.CreatureTemplates
    .create('shrek6', 'necroTrainerGoldshire', 7790)
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.GOSSIP.set(true)
    .Level.set(10, 11)
    .Models.clearAll()
    .Models.addIds(10955)
    .Weapons.add(2209)
    .FactionTemplate.STORMWIND.set()

GLDSHIRE_NECROTRNR.Name.enGB.set("Madam Darkblood")
GLDSHIRE_NECROTRNR.Subname.enGB.set('Necromancer Trainer')

GLDSHIRE_NECROTRNR.Spawns.add('shrek6', 'necroTrainerGoldshireSpawn', {map:0,x:-9468.670898,y:-10.707634,z:49.794048,o:0.432023}, (npc) => {
    npc.EquipmentID.set(1)
    npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
})

export const TRAINERGOLDSHIRENECRO = GLDSHIRE_NECROTRNR.Trainer.getRef()






const ARRAY = [TRAINERNRTHSHIRE_NECRO, TRAINERGOLDSHIRENECRO]

ARRAY.forEach((trnr) => {
    trainerSpellListNecro(trnr)
})


TRAINERNRTHSHIRE_NECRO.RequirementType.SPELL.set().RequiredSpell.set(RAISEDEAD.ID)
TRAINERGOLDSHIRENECRO.RequirementType.SPELL.set().RequiredSpell.set(RAISEDEAD.ID)