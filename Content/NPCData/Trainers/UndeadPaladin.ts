import { std } from "wow/wotlk"

export function spawnUndeadPaladinTrainers(){
        /**********************************************************************************************
        * Deathknell Paladin Trainer
        ***********************************************************************************************/
        const UNDEADPALADINTRAINER1 = std.CreatureTemplates.create("shrek6", "UNDEADPALADINTRAINER1")
            .Name.enGB.set("Gunther Archangel")
            .Subname.enGB.set('Paladin Trainer')
            .Level.set(5, 5)
            .FactionTemplate.UNDERCITY.set()
            .Models.clearAll()
            .Models.addIds(5576)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)

        UNDEADPALADINTRAINER1.Spawns.add('shrek6', 'deathknell-paladin-trainer', {map:0,x:1845.674683,y:1640.250000,z:97.628204,o:4.542125})


        /**********************************************************************************************
        * Brill Paladin Trainer
        ***********************************************************************************************/
        const UNDEADPALADINTRAINER2 = std.CreatureTemplates.create("shrek6", "UNDEADPALADINTRAINER2")
            .Name.enGB.set("Gerald Forthright")
            .Subname.enGB.set('Paladin Trainer')
            .Level.set(12, 12)
            .FactionTemplate.UNDERCITY.set()
            .Models.clearAll()
            .Models.addIds(2620)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)

        UNDEADPALADINTRAINER2.Spawns.add('shrek6', 'brill-paladin-trainer', {map:0,x:2271.894531,y:250.150604,z:41.114826,o:3.962489})





        //********************************************GOSSIP*******************************************\\
        const UNDPALLY_TRAINERS = [UNDEADPALADINTRAINER1, UNDEADPALADINTRAINER2]

        for(const trainer of UNDPALLY_TRAINERS){
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
    }