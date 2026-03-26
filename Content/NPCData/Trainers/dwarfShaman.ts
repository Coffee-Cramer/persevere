import { std } from "wow/wotlk"
import { NORMAL_RESPAWN_TIME } from "../spawnrates"
import { GIMDREK } from "../ZONES/DunMorogh/gimDrek"


//TELEPORT SPELLS
const TELEPORT_TICK = std.Spells.create("shrek6", "TELEPORT_TICK_DUNMOROGH_SHAMAN_EARTH_QUEST")
    .Name.enGB.set("Transport")
    .Icon.set(std.Spells.load(556).Icon.get()) //556 = astral recall
    //.Visual.set(std.Spells.load(556).Visual.get())
    .Range.set(0)
    .CastTime.setSimple(0)
    .Effects.clearAll()
    .Effects.addMod(x => x
        .Type.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .InlineScripts.OnCast((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = ToPlayer(caster)
        if(!player) return

        player.Teleport(0, -5534.922852,-238.035049,518.432129,0.697775)
    })

const TELEPORT = std.Spells.create("shrek6", "Teleport-to-spiritofearth-dunmorogh")
    .Name.enGB.set("Transport")
    .Icon.set(std.Spells.load(556).Icon.get()) //556 = astral recall
    .Visual.set(std.Spells.load(556).Visual.get())
    .Range.setSimple(0, 100)
    .Duration.setSimple(4000)
    .CastTime.set(0)
    .Effects.clearAll()
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_TRIGGER_SPELL.set()
        .AuraPeriod.set(3000)
        .TriggerSpell.set(TELEPORT_TICK.ID)
    )

const TELEPORT_TICK2 = std.Spells.create("shrek6", "TELEPORT_TICK_DUNMOROGH_SHAMAN_EARTH_QUEST_2")
    .Name.enGB.set("Transport")
    .Icon.set(std.Spells.load(556).Icon.get()) //556 = astral recall
    //.Visual.set(std.Spells.load(556).Visual.get())
    .Range.set(0)
    .CastTime.setSimple(0)
    .Effects.clearAll()
    .Effects.addMod(x => x
        .Type.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .InlineScripts.OnCast((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = ToPlayer(caster)
        if(!player) return

        player.Teleport(0, -6110.570312,251.231628,400.141083,5.442340)
    })

const TELEPORT2 = std.Spells.create("shrek6", "Teleport-to-spiritofearth-dunmorogh-2")
    .Name.enGB.set("Transport")
    .Icon.set(std.Spells.load(556).Icon.get()) //556 = astral recall
    .Visual.set(std.Spells.load(556).Visual.get())
    .Range.setSimple(0, 100)
    .CastTime.set(0)
    .Duration.setSimple(4000)
    .Effects.clearAll()
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_TRIGGER_SPELL.set()
        .AuraPeriod.set(3000)
        .TriggerSpell.set(TELEPORT_TICK2.ID)
    )

export function spawnDwarfShamanTrainers(){
        //**********************************************************************************************
        //* Kharanos Shaman Trainer
        //***********************************************************************************************
        const DWARFSHAMANTRAINER2 = std.CreatureTemplates.create("shrek6", "DWARFSHAMANTRAINER2")
            .Name.enGB.set("Bjorn Magmatide")
            .Subname.enGB.set('Shaman Trainer')
            .FactionTemplate.IRONFORGE.set()
            .Level.set(9, 9)
            .Models.clearAll()
            .Models.addIds(15986)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)
            .NPCFlags.QUEST_GIVER.set(true)

        DWARFSHAMANTRAINER2.Spawns.add('shrek6', 'kharanos-shaman-trainer', {map:0,x:-5578.267090,y:-500.303040,z:403.972137,o:2.187611}, (npc) => {
                npc.EquipmentID.set(1)
                npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
            })


        //**********************************************************************************************
        //* Coldridge Shaman Trainer 
        //***********************************************************************************************
        const DWARFSHAMANTRAINER3 = std.CreatureTemplates.create("shrek6", "DWARFSHAMANTRAINER3")
            .Name.enGB.set("Stormgut")
            .Subname.enGB.set('Shaman Trainer')
            .FactionTemplate.IRONFORGE.set()
            .Level.set(5, 5)
            .Models.clearAll()
            .Models.addIds(5434)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)
            .NPCFlags.QUEST_GIVER.set(true)
            .Weapons.add(2130, 17184)

        DWARFSHAMANTRAINER3.Spawns.add('shrek6', 'IF-shaman-trainer', {map:0,x:-6120.499023,y:386.269165,z:395.542664,o:0.226205}, (npc) => {
                npc.EquipmentID.set(1)
                npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
            })







        //********************************************GOSSIP*******************************************\\
        const DWFSHAM_TRAINERS = [DWARFSHAMANTRAINER2, DWARFSHAMANTRAINER3]

        for(const trainer of DWFSHAM_TRAINERS){
            const trainer_index = trainer

            trainer_index.Gossip.modRef((gossip) => {
                gossip.Text.add({enGB: 'Greetings, young $c.'})

                gossip.Options.addMod((option) => {
                    option.Icon.TRAINER.set()
                    .Text.setSimple({enGB:'I seek to learn more in the shamanistic ways.'})
                    .Action.TRAINER.set(14)
                })
                gossip.Options.addMod((option2) => {
                    option2.Icon.CHAT.set()
                    .Text.setSimple({enGB:'I wish to unlearn my talents.'})
                    .Action.UNLEARN_TALENTS.set()
                })
            })
        }

        //********************************************EARTH QUESTS*******************************************\\
        const SHMNSTN = std.GameObjectTemplates.Generic.create('shrek6', 'dwarfShamanShrine')
            .Name.enGB.set("Coldridge Shaman Stone")
            .Display.set(std.GameObjectTemplates.Generic.load(100035).Display.get())
            .Spawns.add('shrek6', 'dwarfShamanShrineSpawn', {map:0,x:-6105.982422,y:251.598862,z:399.230896,o:2.448395})

        const EARTH_ELEMENTAL = std.CreatureTemplates.create("shrek6", "EARTH_ELEMENTAL")
            .Name.enGB.set("Spirit of Earth")
            .FactionTemplate.IRONFORGE.set()
            .Level.set(5, 5)
            .Models.clearAll()
            .Models.addIds(1162)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.QUEST_GIVER.set(true)
            .Scale.set(1.5)
            .Gossip.modRef((gossip) => {
                gossip.Text.add({enGB: '...'})
            })

        EARTH_ELEMENTAL.Spawns.add('shrek6', 'DUN-MOROGH-earth-spirit', {map:0,x:-5522.709961,y:-226.946915,z:523.710571,o:3.904567}, (npc) => {
            npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
        })

        const GOYL = std.CreatureTemplates.create("shrek6", "GOYL")
            .Name.enGB.set("Goyl Coldstone")
            .FactionTemplate.IRONFORGE.set()
            .Level.set(5, 5)
            .Models.clearAll()
            .Models.addIds(3075)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.QUEST_GIVER.set(true)
            .Weapons.add(5581)
            
        GOYL.Spawns.add('shrek6', 'goyl-spawn', {map:0,x:-6105.950684,y:245.147675,z:401.837189,o:2.214352}, (npc) => {
            npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
            npc.EquipmentID.set(1)
        })
        


        const DWARF_SHAMAN_QUEST1 = std.Quests.create('shrek6','DWARF_SHAMAN_QUEST1')
            .Name.enGB.set("Call of Earth")
            .PickupText.enGB.set("The time has come for you to learn to beckon the powers of the very earth that we dwarves call home. The spirits of Dun'Morogh call upon your name and wish to speak with you, $n. But first you must complete a test of strength to prove yourself as a capable shaman.\n\nGo to the foul cave to the south and slay the dreaded Troll Warlock Gim'Drek who disrupts the spirits of the area with his dark magic, then return to me.")
            .ObjectiveText.enGB.set("Slay the foul Gim'Drek, then return to Stormgut in Anvilmar.")
            .CompleteText.enGB.set("The elements are pleased, $n. Good work.")
            .QuestLevel.set(4)
            .MinLevel.set(4)
            .IncompleteText.enGB.set("Have you shown that dirty Troll what's what?")
            .Questgiver.addCreatureBoth(DWARFSHAMANTRAINER3.ID)
            .ClassMask.SHAMAN.set(1)
            .RaceMask.DWARF.set(1)
            //.Rewards.DisplaySpell.set(8073)
            .Rewards.MoneyBonus.set(132300)
            //.Rewards.Item.add(5175, 1)
            .Rewards.Difficulty.DIFFICULTY_5.set()
            .AreaSort.set(132)
            .Objectives.Entity.add(GIMDREK.ID, 1)
            .CompleteLogText.enGB.set("Return to Stormgut in Anvilmar in Coldridge Valley.")

        const DWARF_SHAMAN_QUEST2 = std.Quests.create('shrek6','DWARF_SHAMAN_QUEST2')
            .Name.enGB.set("Call of Earth")
            .PickupText.enGB.set("Clearly you have become a capable shaman, now you must answer the Earth's call. To the east of Anvilmar lies the shaman stone. Go there and speak with Goyl Coldstone, he will guide you to the Spirit of Earth. Good luck, $n.")
            .ObjectiveText.enGB.set("Speak with Goyl at the shaman stone in south east Coldridge Valley.")
            .CompleteText.enGB.set("Ah, the young shaman I've heard so much about. Pleasure to meet ya'. I am Goyl Coldstone. I act as diplomat between the mountains themselves and the Dwarves of Khaz'modan. I will transport you to the Spirit of Earth when you are ready. Don't worry, it's a mostly safe spell.")
            .QuestLevel.set(4)
            .MinLevel.set(4)
            .IncompleteText.enGB.set("")
            .Questgiver.addCreatureStarter(DWARFSHAMANTRAINER3.ID)
            .Questgiver.addCreatureEnder(GOYL.ID)
            .ClassMask.SHAMAN.set(1)
            .RaceMask.DWARF.set(1)
            .Rewards.DisplaySpell.set(TELEPORT.ID)
            //.Rewards.MoneyBonus.set(132300)
            .Rewards.Difficulty.DIFFICULTY_5.set()
            .AreaSort.set(132)
            .CompleteLogText.enGB.set("Speak with Goyl Coldstone at the shaman stone in Coldridge Valley.")

        //console.log(std.Spells.load(8073).objectify())

        const DWARF_SHAMAN_QUEST3 = std.Quests.create('shrek6','DWARF_SHAMAN_QUEST3')
            .Name.enGB.set("Call of Earth")
            .PickupText.enGB.set("Welcome, young one. It is a pleasure that your quest for wisdom has led you to me. The Earth Spirits of the land are no longer disrupted by the demon magics, and with this we are pleased.\n\nYou will journey far in this world, and you will encounter great challenges. But you do not have to do it alone. Go now with the might of the Earth at your side, and be confident that the very mountains are with you on your adventures.\n\nSpeak with me again when you are ready to return to Goyl.")
            .ObjectiveText.enGB.set("Speak with the Spirit of Earth to be transported back to Coldridge Valley, then speak to Goyl.")
            .CompleteText.enGB.set("Are you ready to return?")
            .QuestLevel.set(4)
            .MinLevel.set(4)
            .IncompleteText.enGB.set("")
            .Questgiver.addCreatureBoth(EARTH_ELEMENTAL.ID)
            .ClassMask.SHAMAN.set(1)
            .RaceMask.DWARF.set(1)
            .Rewards.DisplaySpell.set(TELEPORT2.ID)
            //.Rewards.MoneyBonus.set(132300)
            //.Rewards.Item.add(5175, 1)
            //.Rewards.Difficulty.DIFFICULTY_5.set()
            .AreaSort.set(132)
            //.Objectives.Entity.add(GIMDREK.ID, 1)
            .CompleteLogText.enGB.set("Speak with the Spirit of Earth to be transported back to Coldridge Valley, then speak to Goyl Coldstone.")

        const DWARF_SHAMAN_QUEST4 = std.Quests.create('shrek6','DWARF_SHAMAN_QUEST4')
            .Name.enGB.set("Call of Earth")
            .PickupText.enGB.set("The spirits seem to take a liking to you, $n. Return to Stormgut in Anvilmar, he will then teach you how to call upon the Earth.")
            .ObjectiveText.enGB.set("Return to Stormgut in Anvilmar.")
            .CompleteText.enGB.set("You're back. Right then, let's begin the lesson.")
            .QuestLevel.set(4)
            .MinLevel.set(4)
            .IncompleteText.enGB.set("")
            .Questgiver.addCreatureStarter(GOYL.ID)
            .Questgiver.addCreatureEnder(DWARFSHAMANTRAINER3.ID)
            .ClassMask.SHAMAN.set(1)
            .RaceMask.DWARF.set(1)
            .Rewards.DisplaySpell.set(8073)
            .Rewards.MoneyBonus.set(132300)
            .Rewards.Item.add(5175, 1)
            .Rewards.Difficulty.DIFFICULTY_5.set()
            .AreaSort.set(132)
            .CompleteLogText.enGB.set("Return to Stormgut in Anvilmar.")

        const FAIL_SAFE_TELEPORT_QUEST = std.Quests.create('shrek6','FAIL_SAFE_TELEPORT_QUEST')
            .Name.enGB.set("Transport")
            .PickupText.enGB.set("Do you wish to return to the Spirit of Earth?")
            .ObjectiveText.enGB.set("Speak with Goyl to be transported to Spirit of Earth.")
            .CompleteText.enGB.set("Right then, off you go!")
            .QuestLevel.set(4)
            .MinLevel.set(4)
            .Questgiver.addCreatureBoth(GOYL.ID)
            .SpecialFlags.REPEATABLE.set(1)
            .ClassMask.SHAMAN.set(1)
            .RaceMask.DWARF.set(1)
            .Rewards.DisplaySpell.set(TELEPORT.ID)
            .AreaSort.set(132)
            .CompleteLogText.enGB.set("Speak with Goyl to be transported to Spirit of Earth.")

        const FAIL_SAFE_TELEPORT_QUEST2 = std.Quests.create('shrek6','FAIL_SAFE_TELEPORT_QUEST2')
            .Name.enGB.set("Transport")
            .PickupText.enGB.set("Do you wish to return to Coldridge Valley?")
            .ObjectiveText.enGB.set("Speak with the Spirit of Earth to be transported to Coldridge Valley.")
            .CompleteText.enGB.set("Farewell, young $c.")
            .QuestLevel.set(4)
            .MinLevel.set(4)
            .Questgiver.addCreatureBoth(EARTH_ELEMENTAL.ID)
            .SpecialFlags.REPEATABLE.set(1)
            .ClassMask.SHAMAN.set(1)
            .RaceMask.DWARF.set(1)
            .Rewards.DisplaySpell.set(TELEPORT2.ID)
            .AreaSort.set(132)
            .CompleteLogText.enGB.set("Speak with the Spirit of Earth to be transported to Coldridge Valley.")

        DWARF_SHAMAN_QUEST1.NextQuest.set(DWARF_SHAMAN_QUEST2.ID)
        DWARF_SHAMAN_QUEST2.PrevQuest.set(DWARF_SHAMAN_QUEST1.ID)
        DWARF_SHAMAN_QUEST2.NextQuest.set(DWARF_SHAMAN_QUEST3.ID)
        DWARF_SHAMAN_QUEST3.PrevQuest.set(DWARF_SHAMAN_QUEST2.ID)
        DWARF_SHAMAN_QUEST3.NextQuest.set(DWARF_SHAMAN_QUEST4.ID)
        DWARF_SHAMAN_QUEST4.PrevQuest.set(DWARF_SHAMAN_QUEST3.ID)
        FAIL_SAFE_TELEPORT_QUEST.PrevQuest.set(DWARF_SHAMAN_QUEST2.ID)
        FAIL_SAFE_TELEPORT_QUEST2.PrevQuest.set(DWARF_SHAMAN_QUEST3.ID)





        //********************************************FIRE QUESTS*******************************************\\
        const BRZR = std.GameObjectTemplates.Generic.create('shrek6', 'shaman-brazier')
            .Name.enGB.set("Brazier")
            .Display.set(std.GameObjectTemplates.Generic.load(176629).Display.get())
            .Spawns.add('shrek6', 'dwarfShamanBrazierSpawn', {map:0,x:-5575.796387,y:-499.955200,z:403.853699,o:1.904090})
            .Type.QUESTGIVER.set()

        //std.GameObjectTemplates.All.forEach((nig) => {
        //    if(nig.ID == 3662){
        //        console.log(nig.objectify())
        //    }
        //})

        const DWARF_SHAMAN_QUEST5 = std.Quests.create('shrek6','DWARF_SHAMAN_QUEST5')
            .Name.enGB.set("Call of Fire")
            .PickupText.enGB.set("Aye, it is true that you've grown in power young $c. But you still need to grow in these ways, like a flame that requires fuel. The spirits of flame call your name, $n. You must ignite the flame that burns within you.\n\nJourney to the fire alter, outside the Gates of Ironforge and call upon the Spirit of Flame.")
            .ObjectiveText.enGB.set("Light the torch with the brazier in Kharanos.")
            .CompleteText.enGB.set("Light the torch with the brazier in Kharanos.")
            .QuestLevel.set(10)
            .MinLevel.set(10)
            .IncompleteText.enGB.set("")
            .Questgiver.addCreatureStarter(DWARFSHAMANTRAINER2.ID)
            .Questgiver.addObjectEnder(BRZR.ID)
            .ClassMask.SHAMAN.set(1)
            //.Rewards.DisplaySpell.set(2075)
            //.Rewards.MoneyBonus.set(132300)
            //.Rewards.Item.add(2410, 1)
            //.Rewards.Difficulty.DIFFICULTY_5.set()
            .AreaSort.set(132)

        const DWARF_SHAMAN_QUEST6 = std.Quests.create('shrek6','DWARF_SHAMAN_QUEST6')
            .Name.enGB.set("Call of Fire")
            .PickupText.enGB.set("As you light the torch, a voice echoes in your mind. It cries for you to bring the flame to the mountain.")
            .ObjectiveText.enGB.set("")
            .CompleteText.enGB.set("")
            .QuestLevel.set(10)
            .MinLevel.set(10)
            .IncompleteText.enGB.set("")
            .Questgiver.addObjectStarter(BRZR.ID)
            .Questgiver.addObjectEnder(BRZR.ID)
            .ClassMask.SHAMAN.set(1)
            //.Rewards.DisplaySpell.set(2075)
            //.Rewards.MoneyBonus.set(132300)
            //.Rewards.Item.add(2410, 1)
            //.Rewards.Difficulty.DIFFICULTY_5.set()
            .AreaSort.set(132)

        DWARF_SHAMAN_QUEST5.NextQuest.set(DWARF_SHAMAN_QUEST6.ID)
        DWARF_SHAMAN_QUEST6.PrevQuest.set(DWARF_SHAMAN_QUEST5.ID)
    
        //console.log(DWARF_SHAMAN_QUEST5.ID)
    }