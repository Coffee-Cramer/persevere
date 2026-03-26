import { std } from "wow/wotlk"
import { NORMAL_RESPAWN_TIME } from "../spawnrates"

export function spawnBelfWarriorTrainers(){
        /**********************************************************************************************
        * Sunstrider Isle Warrior Trainer 
        ***********************************************************************************************/
        const BELFWARRIORTRAINER1 = std.CreatureTemplates.create("shrek6", "BELFWARRIORTRAINER1", 3153)
            .Name.enGB.set("Hellen Skystriker")
            .Subname.enGB.set('Warrior Trainer')
            .FactionTemplate.SILVERMOON.set()
            .Level.set(5, 5)
            .Models.clearAll()
            .Models.addIds(16799)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)
            .Weapons.add(20851, 20911)

        BELFWARRIORTRAINER1.Spawns.add('shrek6', 'sunstrider-isle-warrior-trainer', {map:530,x:10380.547852,y:-6399.850586,z:38.532162,o:3.709944}, (npc) => {
            npc.EquipmentID.set(1)
                .SpawnTime.set(NORMAL_RESPAWN_TIME)
        })

        /**********************************************************************************************
        * Falconwing Square Warrior Trainer 
        ***********************************************************************************************/
        const BELFWARRIORTRAINER2 = std.CreatureTemplates.create("shrek6", "BELFWARRIORTRAINER2")
            .Name.enGB.set("Agartha Settingsun")
            .Subname.enGB.set('Warrior Trainer')
            .FactionTemplate.SILVERMOON.set()
            .Level.set(12, 12)
            .Models.clearAll()
            .Models.addIds(15526)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)
            .Weapons.add(20851, 20911)

        BELFWARRIORTRAINER2.Spawns.add('shrek6', 'falconwing-square-warrior-trainer', {map:530,x:9519.946289,y:-6866.179199,z:18.750015,o:5.371852}, (npc) => {
            npc.EquipmentID.set(1)
                .SpawnTime.set(NORMAL_RESPAWN_TIME)
        })

        /**********************************************************************************************
        * Silvermoon Warrior Trainer 
        ***********************************************************************************************/
        const BELFWARRIORTRAINER3 = std.CreatureTemplates.create("shrek6", "BELFWARRIORTRAINER3")
            .Name.enGB.set("Tyrithilien Scourgeslayer")
            .Subname.enGB.set('Warrior Trainer')
            .FactionTemplate.SILVERMOON.set()
            .Level.set(35, 35)
            .Models.clearAll()
            .Models.addIds(16954)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)
            .Weapons.add(20851, 20911)

        BELFWARRIORTRAINER3.Spawns.add('shrek6', 'silvermoon-warrior-trainer', {map:530,x:9817.452148,y:-7441.923828,z:14.960765,o:0.671758}, (npc) => {
            npc.EquipmentID.set(1)
                .SpawnTime.set(NORMAL_RESPAWN_TIME)
        })





        
        //********************************************GOSSIP*******************************************\\
        const BELFWARR_TRAINERS = [BELFWARRIORTRAINER1, BELFWARRIORTRAINER2, BELFWARRIORTRAINER3]

        for(const trainer of BELFWARR_TRAINERS){
            const trainer_index = trainer

            trainer_index.Gossip.modRef((gossip) => {
                gossip.Text.add({enGB: "Are you here for training? Or are you just here to waste a warrior's time?"})

                gossip.Options.addMod((option) => {
                    option.Icon.TRAINER.set()
                    .Action.TRAINER.set(1)
                })
            })
        }
    }