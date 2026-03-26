import { std } from "wow/wotlk";
import { EMOTES } from "../../../../Enumerators&Arrays/NPCemotes";


const SYNDREP = std.CreatureTemplates.create('shrek6', 'SYNDREP')
    .Name.enGB.set("Syndicate Representative")
    .Models.addIds(3730)
    .FactionTemplate.NEUTRAL_PASSIVE.set()
    .Level.set(36, 40)
    .Weapons.add(2209, 2209)
    .NPCFlags.GOSSIP.set(1)
    .NPCFlags.QUEST_GIVER.set(1)
    /*.Spawns.addMod('shrek6', 'SYNDREP_SPAWN', {map:0,x:603.093994,y:-1044.557129,z:170.457840,o:1.054171}, (npc) => {
        npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
        npc.EquipmentID.set(1)
    })*/
    .Gossip.modNew((gossip) => {
        gossip.Text.add({enGB: "Hello, $n. I've been watching you for some time now."}, 0, EMOTES.bowing)
    })

const MAKINGAMENDS_QUEST = std.Quests.create('shrek6','MAKINGAMENDS_QUEST')
    .Name.enGB.set("Making Amends")
    .PickupText.enGB.set("If you ever wish to 'make amends' with our group, you will find that there are bridges to be built. In the Alterac Mountains there is a place called Ravenholt which houses a group who undermines our interests. Deliver them a message of what happens to those who cross the Syndicate and I'll put in a good word for you.")
    .ObjectiveText.enGB.set("Travel to Ravenholdt in Alterac Mountains and slay members of the Assassin's League then return to the Syndicate Representative.")
    .CompleteText.enGB.set("Marvelous work, $n! I look forward to a mutually beneficial relationship.")
    .QuestLevel.set(58)
    .MinLevel.set(50)
    .IncompleteText.enGB.set("Yes?")
    .CompleteLogText.enGB.set("Return to the Syndicate Representative in Alterac Mountains.")
    .Flags.SHARABLE.set(1)
    //.Questgiver.addCreatureStarter(SYNDREP.ID)
    //.Questgiver.addCreatureEnder(SYNDREP.ID)
    .Rewards.MoneyBonus.set(132300)
    .Rewards.Difficulty.DIFFICULTY_5.set()
    .Rewards.Reputation.add(70, 1500)
    .Rewards.Reputation.add(349, -1500)
    .AreaSort.set(36) //Alterac Mountains
    .SpecialFlags.REPEATABLE.set(1)
    .Objectives.Entity.addMod((npcGoObjective) => {
        npcGoObjective.ID.set(6766)
            .Count.set(9)
    })