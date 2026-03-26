import { std } from "wow/wotlk";
import { setBladeMaster } from "../../../../serverSettings";
import { EMOTES } from "../../../../Enumerators&Arrays/NPCemotes";
import { trainerSpellList } from "../../../../Functions/BlademasterTrainerSpells";
import { SWFTSTK } from "../../../RaceClassData/CharClasses/blademaster/spells/swiftStrike/swiftStrike";
import { NORMAL_RESPAWN_TIME } from "../../spawnrates";
import { RZH_TRAINER } from "./razorhill_trainer";
import { VOT_TRAINER } from "./valleyOfTrials_trainer";


export const ORG_TRAINER = std.CreatureTemplates
    .create('shrek6', 'org_trainer', 7790)
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.GOSSIP.set(true)
    .Models.clearAll()
    .Models.addIds(3760)
    .Level.set(55)
    .Weapons.add(922)

ORG_TRAINER.Name.enGB.set("Gorehand Windwalker")
ORG_TRAINER.Subname.enGB.set('Blademaster')

if(setBladeMaster == true){
    ORG_TRAINER.Spawns.add('shrek6', 'org_trainer', {map:1,x:1541.451904,y:-4190.306641,z:40.892654,o:2.832265}, (npc) => {
        npc.EquipmentID.set(1)
        npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
    })
}

const TRAINER = ORG_TRAINER.Trainer.getRef()

trainerSpellList(TRAINER)

TRAINER.RequirementType.SPELL.set().RequiredSpell.set(SWFTSTK.ID)

//TRAINER GOSSIP
const HUMAN_BLDMSTR_TRAINERS = [ORG_TRAINER, RZH_TRAINER, VOT_TRAINER]
HUMAN_BLDMSTR_TRAINERS.forEach((trainer) => {
    trainer.Gossip.modRef((gossip) => {
        gossip.Text.addGendered({enGB: "So, you wish to lay down your life to master the blade. Who am I to deny such fervor?"}, {enGB: "So, you wish to lay down your life to master the blade. Who am I to deny such fervor?"}, 0, EMOTES.talking)
        gossip.Options.addMod((option) => {
            option.Icon.CHAT.set()
                .Text.setSimple({enGB:'Teach me how to master my blade.'})
                .Action.TRAINER.set(TRAINER.ID)
            })
        })
    })

