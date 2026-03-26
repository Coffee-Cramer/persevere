import { std } from "wow/wotlk"
import { EMOTES } from "../../../Enumerators&Arrays/NPCemotes"
import { NORMAL_RESPAWN_TIME } from "../spawnrates"


export function spawnUndeadHunterTrainers(){
        /**********************************************************************************************
        * Deathknell Hunter Trainer
        ***********************************************************************************************/
        const UNDEADHUNTERTRAINER1 = std.CreatureTemplates.create("shrek6", "UNDEADHUNTERTRAINER1")
            .Name.enGB.set("Dark Ranger Blackwhisper")
            .Subname.enGB.set('Hunter Trainer')
            .Level.set(35, 40)
            .FactionTemplate.UNDERCITY.set()
            .Models.clearAll()
            .Models.addIds(9251) //30071
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)
            .Weapons.add(18680, 0, 18680)

        UNDEADHUNTERTRAINER1.Spawns.add('shrek6', 'deathknell-hunter-trainer', {map:0,x:1837.778076,y:1626.632690,z:96.934074,o:0.614513}, (npc) => {
                        npc.EquipmentID.set(1)
                        npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
                    })


        /**********************************************************************************************
        * Brill Hunter Trainer
        ***********************************************************************************************/
        const UNDEADHUNTERTRAINER2 = std.CreatureTemplates.create("shrek6", "UNDEADHUNTERTRAINER2")
            .Name.enGB.set("Jacob Mortis")
            .Subname.enGB.set('Hunter Trainer')
            .Level.set(10, 10)
            .FactionTemplate.UNDERCITY.set()
            .Models.clearAll()
            .Models.addIds(3853)
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)
            .NPCFlags.QUEST_GIVER.set(true)
            .Weapons.add(2504, 0, 2504)

        UNDEADHUNTERTRAINER2.Spawns.add('shrek6', 'brill-hunter-trainer', {map:0,x:2256.018799,y:233.254669,z:33.633991,o:1.036118}, (npc) => {
                        npc.EquipmentID.set(1)
                        npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
                    })


        /**********************************************************************************************
        * Undercity Hunter Trainer
        ***********************************************************************************************/
        const UNDEADHUNTERTRAINER3 = std.CreatureTemplates.create("shrek6", "UNDEADHUNTERTRAINER3")
            .Name.enGB.set("Jarvis Thatcher")
            .Subname.enGB.set('Hunter Trainer')
            .Level.set(40, 50)
            .FactionTemplate.UNDERCITY.set()
            .Models.clearAll()
            .Models.addIds(10150) //30071
            .NPCFlags.GOSSIP.set(true)
            .NPCFlags.TRAINER.set(true)
            .NPCFlags.CLASS_TRAINER.set(true)
            .NPCFlags.QUEST_GIVER.set(true)
            .Type.HUMANOID.set()
            .UnitClass.WARRIOR.set()
            .Rank.ELITE.set()
            .AttackTime.MeleeBase.set(2000)
            //.AttackTime.RangedBase.set(2000)
            .MovementType.IDLE.set()
            .SheathState.set(1)
            .Weapons.add(18680, 0, 18680)

        UNDEADHUNTERTRAINER3.Spawns.add('shrek6', 'UC-hunter-trainer', {map:0,x:1718.416260,y:287.914917,z:-62.188038,o:0.364752}, (npc) => {
                npc.EquipmentID.set(1)
                npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
            })









        //********************************************GOSSIP*******************************************\\
        const UNDHUNTER_TRAINERS = [UNDEADHUNTERTRAINER1, UNDEADHUNTERTRAINER2, UNDEADHUNTERTRAINER3]

        //Many of our kind have lost their connection with nature, it is foolish. 
        for(const trainer of UNDHUNTER_TRAINERS){
            const trainer_index = trainer

            trainer_index.Gossip.modRef((gossip) => {
                gossip.Text.add({enGB: "It is foolish that many of our kind have lost their understanding of the wilds. Those who learn to become masters of their own environment will be the writers of every battle."}, 1, EMOTES.exclaiming)
                gossip.Options.addMod((option) => {
                    option.Icon.CHAT.set()
                    .Text.setSimple({enGB:'I seek to learn more in the ways of the hunter.'})
                    .Action.TRAINER.set(7)
                })
            })
        }




        
        /**********************************************************************************************
        * Undead Hunter Quests
        ***********************************************************************************************/
        const UNDEAD_HUNTERQUEST_AREA_GROUP = std.AreaGroups.create()
        UNDEAD_HUNTERQUEST_AREA_GROUP.Areas.add(85) //tirisfal id

        const UNDEAD_HUNTER_QUEST2 = std.Quests.create('shrek6','UNDEAD_HUNTER_QUEST2')
            .Name.enGB.set("Training the Beast")
            .PickupText.enGB.set("You are very astute, $n. Now you must learn how to take care of your companion. There is a dark ranger within the War Quarter of Undercity, she knows much about making beasts obedient. You should speak with her for further instruction, goodluck and farewell $n!")
            .ObjectiveText.enGB.set("Speak with Dark Ranger Rea within the War Quarter of Undercity.")
            .CompleteText.enGB.set("It's good to see someone so passionate about the art of hunting. Hone your skills well, $n. You're the maker of your own destiny.")
            .QuestLevel.set(10)
            .MinLevel.set(10)
            //.IncompleteText.enGB.set("")
            .Questgiver.addCreatureStarter(UNDEADHUNTERTRAINER2.ID)
            .Questgiver.addCreatureEnder(UNDEADHUNTERTRAINER3.ID) 
            .ClassMask.HUNTER.set(1)
            .RaceMask.UNDEAD.set(1)
            .Rewards.DisplaySpell.set(5300)
            .Rewards.MoneyBonus.set(132300)
            .Rewards.Difficulty.DIFFICULTY_5.set()
            .AreaSort.set(-261)
            
            

        

        const UNDEAD_HUNTER_QUEST = std.Quests.create('shrek6','UNDEAD_HUNTER_QUEST')
            .Name.enGB.set("Taming the Beast")
            .PickupText.enGB.set("You have grasped a decent understanding of the ways of the hunter and as your instructer I am proud. However, you have more difficult tasks ahead.\n\nThe time has come for you to learn how to tame a beast. When this lesson is finished, you will know how to command a faithful companion.\n\nUse this Taming Rod to tame any beast of your liking, then return to me for further instruction.")
            .ObjectiveText.enGB.set("Use the Taming Rod to tame a beast. Practice your skills, then return the Taming Rod to Jacob Mortis in Brill.")
            .CompleteText.enGB.set("Understand one thing $n, be loyal to your companion and it will be loyal to you.")
            .QuestLevel.set(10)
            .MinLevel.set(10)
            .IncompleteText.enGB.set("Return once you have tamed a beast, $n.")
            .Questgiver.addCreatureBoth(UNDEADHUNTERTRAINER2.ID)
            .ClassMask.HUNTER.set(1)
            .RaceMask.UNDEAD.set(1)
            .SpecialFlags.CUSTOM_COMPLETE.set(1)
            .Rewards.DisplaySpell.set(1579)
            .Rewards.MoneyBonus.set(132300)
            .Rewards.Difficulty.DIFFICULTY_5.set()
            .ProvidedItemCount.set(1)
            .AreaSort.set(-261)
            .Objectives.Scripted.enGB.set("Tame a beast.")
            .CompleteLogText.enGB.set("Return to Jacob Mortis in Brill in Tirisfal Glades.")
            .Flags.REMOVE_EXTRA_GET_ITEMS.set(1)
            .Flags.SHOW_ITEM_IN_TRACKER.set(1)
        
        
        //CHAIN    
        UNDEAD_HUNTER_QUEST.NextQuest.set(UNDEAD_HUNTER_QUEST2.ID)
        //HUMAN_HUNTER_QUEST2.PrevQuest.set(HUMAN_HUNTER_QUEST.ID)
        
        const REMOVECOMBAT_SPELL2 = std.Spells.create('shrek6', 'REMOVECOMBAT_SPELL2') //first is in the human hunter script
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
                .Quest.set(UNDEAD_HUNTER_QUEST.ID)
                .ImplicitTargetA.UNIT_CASTER.set()
            )
            
       const TAMED_SPELL_UNDEAD = std.Spells.create('shrek6', 'TAMED_SPELL_UNDEAD')
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
            

        const TAMINGROD_SPELL = std.Spells.create('shrek6', 'TAMINGROD_SPELL', 19674)
            .Name.enGB.set("Tame Beast")
            .CreatureTargets.BEAST.set(1)
            .Description.enGB.set("Begins taming a beast to be your companion for 15 minutes. This spell only works in Tirisfal Glades.")
            .AuraDescription.enGB.set("Taming a beast.")
            .Attributes.clearAll()
            .Attributes.CHANNELED.set(1)
            .Attributes.TAME_BEAST.set(1)
            .Attributes.UNK17.set(1)
            .Duration.setSimple(15000)
            .Effects.clearAll()
            .RequiredArea.set(UNDEAD_HUNTERQUEST_AREA_GROUP.ID)
            .Effects.addMod(x => x
                .Type.APPLY_AURA.set()
                .Aura.PERIODIC_TRIGGER_SPELL.set()
                .TriggerSpell.set(TAMED_SPELL_UNDEAD.ID)
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
                .TriggerSpell.set(REMOVECOMBAT_SPELL2.ID)
                .AuraPeriod.set(14250)
                .ImplicitTargetA.UNIT_CASTER.set()
            )

        const TAMINGROD = std.Items.create('shrek6', 'UNDEAD_TAMING_ROD1')
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
            .FlagsExtra.HORDE_ONLY.set(1)
            
        UNDEAD_HUNTER_QUEST.StartItem.set(TAMINGROD.ID)
    }