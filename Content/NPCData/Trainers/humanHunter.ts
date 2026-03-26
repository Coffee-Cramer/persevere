import { DBC, std } from "wow/wotlk"
import { NORMAL_RESPAWN_TIME } from "../spawnrates"
import { EMOTES } from "../../../Enumerators&Arrays/NPCemotes"


export function spawnHumanHunterTrainers(){
        //**********************************************************************************************
        //* Northshire Hunter Trainer 
        //***********************************************************************************************/
        const HUMANHUNTERTRAINER1 = std.CreatureTemplates.create("shrek6", "HUMANHUNTERTRAINER1")
            .Name.enGB.set("Taylor Straightshot")
            .Subname.enGB.set('Hunter Trainer')
            .FactionTemplate.STORMWIND.set()
            .Level.set(5, 5)
            .Models.clearAll()
            .Models.addIds(9255)
            .Weapons.add(2508)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)

        HUMANHUNTERTRAINER1.Spawns.add('shrek6', 'northshire-hunter-trainer', {map:0,x:-8928.769531,y:-154.049362,z:81.301674,o:2.371926}, (npc) => {
                npc.EquipmentID.set(1)
                npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
            })

        //**********************************************************************************************
        //* Goldshire Hunter Trainer
        //***********************************************************************************************/
       const HUMANHUNTERTRAINER2 = std.CreatureTemplates.create("shrek6", "HUMANHUNTERTRAINER2")
            .Name.enGB.set("Chara Gunslinger")
            .Subname.enGB.set('Hunter Trainer')
            .FactionTemplate.STORMWIND.set()
            .Level.set(10, 11)
            .Models.clearAll()
            .Models.addIds(10455)
            .Weapons.add(2508)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)
            .NPCFlags.QUEST_GIVER.set(true)

        HUMANHUNTERTRAINER2.Spawns.add('shrek6', 'goldshire-hunter-trainer', {map:0,x:-9477.737305,y:23.873083,z:63.820690,o:0.179624}, (npc) => {
                npc.EquipmentID.set(1)
                npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
            })





        //********************************************GOSSIP*******************************************\\
        const HUMHUNTER_TRAINERS = [HUMANHUNTERTRAINER1, HUMANHUNTERTRAINER2]
        for(const trainer of HUMHUNTER_TRAINERS){
            const trainer_index = trainer

            trainer_index.Gossip.modRef((gossip) => {
                gossip.Text.addGendered({enGB: "Have you come to master the bow?"}, {enGB: "Have you come to master the bow?"}, 0, EMOTES.questioning)

                gossip.Options.addMod((option) => {
                    option.Icon.CHAT.set()
                    .Text.setSimple({enGB:'I seek to learn more in the ways of the hunter.'})
                    .Action.TRAINER.set(7)
                })
            })
        }





        
        //**********************************************************************************************
        //* HUNTER QUEST
        //***********************************************************************************************/
        const HUMAN_HUNTERQUEST_AREA_GROUP = std.AreaGroups.create()
        HUMAN_HUNTERQUEST_AREA_GROUP.Areas.add(12) //elwynn id

        const HUMAN_HUNTER_QUEST2 = std.Quests.create('shrek6','HUMAN_HUNTER_QUEST2')
            .Name.enGB.set("Training the Beast")
            .PickupText.enGB.set("Now that you have learned to tame a beast you must also learn how to take proper care of it. There is a masterful dwarven hunter in Stormwind who resides within the Dwarven District of the city, next to the Deeprun Tram. Her name is Einris Blightspear and her skills surpass my own. Speak with her and she will instruct you further. Farewell, $n!")
            .ObjectiveText.enGB.set("Speak with Einris Blightspear in the Dwarven District of Stormwind.")
            .CompleteText.enGB.set("Welcome! If you've come to learn more about huntin', you've come to the right place.")
            .QuestLevel.set(10)
            .MinLevel.set(10)
            .IncompleteText.enGB.set("I hope you've been taking care of your new companion $n!")
            .Questgiver.addCreatureStarter(HUMANHUNTERTRAINER2.ID)
            .Questgiver.addCreatureEnder(5515) //Einris Blightspear
            .ClassMask.HUNTER.set(1)
            .RaceMask.HUMAN.set(1)
            .Rewards.DisplaySpell.set(5300)
            .Rewards.MoneyBonus.set(132300)
            .Rewards.Difficulty.DIFFICULTY_5.set()
            .AreaSort.set(-261)
            
            

        

        const HUMAN_HUNTER_QUEST = std.Quests.create('shrek6','humanhunterquest')
            .Name.enGB.set("Taming the Beast")
            .PickupText.enGB.set("You have grasped a decent understanding of the ways of the hunter and as your instructer I am proud. However, you have more difficult tasks ahead.\n\nThe time has come for you to learn how to tame a beast. When this lesson is finished, you will know how to command a faithful companion.\n\nUse this Taming Rod to tame any beast of your liking, then return to me for further instruction.")
            .ObjectiveText.enGB.set("Use the Taming Rod to tame a beast. Practice your skills, then return the Taming Rod to Chara Gunsling in Goldshire.")
            .CompleteText.enGB.set("Understand one thing $n, be loyal to your companion and it will be loyal to you.")
            .QuestLevel.set(10)
            .MinLevel.set(10)
            .IncompleteText.enGB.set("Return once you have tamed a beast, $n.")
            .Questgiver.addCreatureBoth(HUMANHUNTERTRAINER2.ID)
            .ClassMask.HUNTER.set(1)
            .RaceMask.HUMAN.set(1)
            .SpecialFlags.CUSTOM_COMPLETE.set(1)
            .Rewards.DisplaySpell.set(1579)
            .Rewards.MoneyBonus.set(132300)
            .Rewards.Difficulty.DIFFICULTY_5.set()
            .ProvidedItemCount.set(1)
            .AreaSort.set(-261)
            .Objectives.Scripted.enGB.set("Tame a beast.")
            .CompleteLogText.enGB.set("Return to Chara Gunsling in Goldshire in Elwynn Forest.")
            .Flags.REMOVE_EXTRA_GET_ITEMS.set(1)
            .Flags.SHOW_ITEM_IN_TRACKER.set(1)
        
        
        //CHAIN    
        HUMAN_HUNTER_QUEST.NextQuest.set(HUMAN_HUNTER_QUEST2.ID)
        //HUMAN_HUNTER_QUEST2.PrevQuest.set(HUMAN_HUNTER_QUEST.ID)
        
        const REMOVECOMBAT_SPELL = std.Spells.create('shrek6', 'REMOVECOMBAT_SPELL')
            .Name.enGB.set("Sanctuary")
            .Description.enGB.set("")
            .AuraDescription.enGB.set("")
            .Icon.set(std.Spells.load(19674).Icon.get()) //tame beast icon
            .Attributes.clearAll()
            .Attributes.TAME_BEAST.set(1)
            .Duration.setSimple(3000)
            .Range.setSimple(0, 30)
            .Effects.clearAll()
            .Effects.addMod(x => x
                .Type.SANCTUARY.set()
                .ImplicitTargetA.UNIT_CASTER.set()
            )
            .Effects.addMod(x => x
                .Type.QUEST_COMPLETE.set()
                .Quest.set(HUMAN_HUNTER_QUEST.ID)
                .ImplicitTargetA.UNIT_CASTER.set()
            )
            
       const TAMED_SPELL = std.Spells.create('shrek6', 'TAMED_SPELL')
            .Name.enGB.set("Tame Beast")
            .CreatureTargets.BEAST.set(1)
            .Description.enGB.set("Beast is your companion for 15 minutes.")
            .AuraDescription.enGB.set("Tamed beast.")
            .Icon.set(std.Spells.load(19674).Icon.get()) //tame beast icon
            .Attributes.clearAll()
            .Attributes.TAME_BEAST.set(1)
            .Duration.setSimple(900000)
            .Range.setSimple(0, 30)
            .Effects.clearAll()
            .Effects.addMod(x => x
                .Type.APPLY_AURA.set()
                .Aura.MOD_CHARM.set()
                .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
                .ChanceBase.set(1)
                .ChancePerLevel.set(1)
            )
            

        const TAMINGROD_SPELL = std.Spells.create('shrek6', 'HUMAN_TAMING_ROD1', 19674)
            .Name.enGB.set("Tame Beast")
            .CreatureTargets.BEAST.set(1)
            .Description.enGB.set("Begins taming a beast to be your companion for 15 minutes. This spell only works in Elwynn Forest.")
            .AuraDescription.enGB.set("Taming a beast.")
            .Attributes.clearAll()
            .Attributes.CHANNELED.set(1)
            .Attributes.TAME_BEAST.set(1)
            .Attributes.UNK17.set(1)
            .Duration.setSimple(15000)
            .Effects.clearAll()
            .RequiredArea.set(HUMAN_HUNTERQUEST_AREA_GROUP.ID)
            .Effects.addMod(x => x
                .Type.APPLY_AURA.set()
                .Aura.PERIODIC_TRIGGER_SPELL.set()
                .TriggerSpell.set(TAMED_SPELL.ID)
                .AuraPeriod.set(14000)
                .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
            )
            .Effects.addMod(x => x
                .Type.APPLY_AURA.set()
                .Aura.DUMMY.set()
                .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
            )
            .Effects.addMod(x => x
                .Type.APPLY_AURA.set()
                .Aura.PERIODIC_TRIGGER_SPELL.set()
                .TriggerSpell.set(REMOVECOMBAT_SPELL.ID)
                .AuraPeriod.set(14250)
                .ImplicitTargetA.UNIT_CASTER.set()
            )

        const TAMINGROD = std.Items.create('shrek6', 'HUMAN_TAMING_ROD1')
            .Name.enGB.set("Taming Rod")
            .Spells.addMod((spell) => {
                spell.Trigger.ON_USE.set()
                spell.Charges.Raw.set(3)
                spell.Spell.set(TAMINGROD_SPELL.ID)
            })
            .Class.QUEST.set()
            .Bonding.QUEST_ITEM.set()
            .InventoryType.NON_EQUIPPABLE.set()
            .DisplayInfo.set(26595)
            .Flags.PLAYER_CAST.set(1)
            .Quality.WHITE.set()
            .FlagsExtra.ALLIANCE_ONLY.set(1)
            
            
            
        HUMAN_HUNTER_QUEST.StartItem.set(TAMINGROD.ID)

        //console.log(std.Spells.load(1515).objectify())
        //console.log(std.Spells.load(13481).objectify())
        //console.log(std.Quests.load(6064).objectify())
        //console.log(std.Items.load(15911).objectify())
        //console.log(std.Spells.load(19674).objectify())
        //console.log(std.Spells.load(23357).objectify())

    
    }

