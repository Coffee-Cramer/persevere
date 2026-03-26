import { std } from "wow/wotlk"

export function spawnGnomeDruidTrainers(){
        /**********************************************************************************************
        * Coldridge Druid Trainer
        ***********************************************************************************************/
        const GNOMEDRUID1 = std.CreatureTemplates.create("shrek6", "GNOMEDRUID1")
            .Name.enGB.set("Pep Pep")
            .Subname.enGB.set('Druid Trainer')
            .Level.set(5, 5)
            .FactionTemplate.GNOMEREGAN.set()
            .Models.clearAll()
            .Models.addIds(3124)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)

        GNOMEDRUID1.Spawns.add('shrek6', 'coldridge-druid-trainer', {map:0,x:-6056.148926,y:377.121887,z:392.763275,o:2.673798})


        /**********************************************************************************************
        * Kharanos Druid Trainer
        ***********************************************************************************************/
        const GNOMEDRUID2 = std.CreatureTemplates.create("shrek6", "GNOMEDRUID2")
            .Name.enGB.set("Vayne Ziplok")
            .Subname.enGB.set('Druid Trainer')
            .Level.set(10, 12)
            .FactionTemplate.GNOMEREGAN.set()
            .Models.clearAll()
            .Models.addIds(3109) //og: 10722
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)

        GNOMEDRUID2.Spawns.add('shrek6', 'kharanos-druid-trainer', {map:0,x:-5562.589355,y:-457.508057,z:404.525635,o:4.268165})


        /**********************************************************************************************
        * Ironforge Druid Trainer
        ***********************************************************************************************/
        const GNOMEDRUID3 = std.CreatureTemplates.create("shrek6", "GNOMEDRUID3")
            .Name.enGB.set("Reena Hardwire")
            .Subname.enGB.set('Druid Trainer')
            .Level.set(40, 45)
            .FactionTemplate.GNOMEREGAN.set()
            .Models.clearAll()
            .Models.addIds(8693)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)
            

        GNOMEDRUID3.Spawns.add('shrek6', 'IF-druid-trainer', {map:0,x:-4826.057129,y:-1287.474976,z:501.868195,o:1.404595})







        //********************************************GOSSIP*******************************************\\
        const DRUID_TRAINERS = [GNOMEDRUID1, GNOMEDRUID2, GNOMEDRUID3]

        for(const trainer of DRUID_TRAINERS){
            trainer.TypeFlags.set(134217728) //force gossip
            trainer.Gossip.modRef((gossip) => {
                gossip.Text.add({enGB: 'With the help of the Night Elves, our kind has learned much in the ways of the druid. Would you like to learn too?'})

                gossip.Options.addMod((option) => {
                    option.Icon.TRAINER.set()
                    .Text.setSimple({enGB:'I wish to learn more in the ways of the Druid.'})
                    .Action.TRAINER.set(33)
                })

               gossip.Options.addMod((option2) => {
                    option2.Icon.CHAT.set()
                    .Text.setSimple({enGB:'I wish to unlearn my Druid talents.'})
                    .Action.UNLEARN_TALENTS.set()
               })
            })
        }
    }

//console.log(std.CreatureTemplates.load(4218))