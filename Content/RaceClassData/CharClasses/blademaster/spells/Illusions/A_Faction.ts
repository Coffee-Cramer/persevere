import { std } from "wow/wotlk";

//********************************************************************************************************
//  Horde & Alliance Illusion faction.
//********************************************************************************************************
export const FACTION = std.Factions.create("shrek6", "illusionFaction", false)
    .Name.enGB.set("Blademaster Illusions")
    .Templates.addNeutralPassiveGet()
        .Flags.HATES_ALL_EXCEPT_FRIENDS.set(1)
        .Flags.ATTACK_PVP_ACTIVE.set(1)
        .FactionGroup.PLAYERS.set(1)
        .FriendFactions.setId(0, 11)

//********************************************************************************************************
//  Scarlet Crusade Illusion Factions.
//********************************************************************************************************
export const FACTION_SC_AS_HORDE = std.Factions.create("shrek6", "illusionFaction_SC_asHorde", false)
    .Name.enGB.set("Blademaster Scarlet Illusion")
    .Templates.addNeutralHostileGet()
        .FactionGroup.PLAYERS.set(1)
        .FriendFactions.setId(0, 56)
        //.FriendFactions.setId()

export const FACTION_SC_AS_ALLY = std.Factions.create("shrek6", "illusionFaction_SC_asAlliance", false)
    .Name.enGB.set("Blademaster Scarlet Illusion")
    .Templates.addNeutralHostileGet()
        .FactionGroup.PLAYERS.set(1)
        .FriendFactions.setId(0, 56)

std.Factions.load(56).Templates.getIndex(0) //Scarlet Crusade faction
    //.EnemyGroup.HORDE.set(1)
    //.EnemyGroup.ALLIANCE.set(1)
    //.FriendFactions.setId(0, FACTION_SC_AS_HORDE.ID)
    //.FriendFactions.setId(1, FACTION_SC_AS_ALLY.ID)



//********************************************************************************************************
//  Dark Iron Dwarves Illusion Factions.
//******************************************************************************************************** 
export const FACTION_DI_AS_HORDE = std.Factions.create("shrek6", "illusionFaction_DI_asHorde", false)
    .Name.enGB.set("Blademaster Dark Iron Illusion")
    .Templates.addNeutralHostileGet()
        .FactionGroup.PLAYERS.set(1)
        .FriendFactions.setId(0, 48)

export const FACTION_DI_AS_ALLY = std.Factions.create("shrek6", "illusionFaction_DI_asAlliance", false)
    .Name.enGB.set("Blademaster Dark Iron Illusion")
    .Templates.addNeutralHostileGet()
        .FactionGroup.PLAYERS.set(1)
        .FriendFactions.setId(0, 48)


std.Factions.load(48).Templates.getIndex(0) //Dark Iron Dwarves faction
    //.EnemyGroup.HORDE.set(1)
    //.EnemyGroup.ALLIANCE.set(1)
    //.FriendFactions.setId(0, FACTION_DI_AS_HORDE.ID)
    //.FriendFactions.setId(0, FACTION_DI_AS_ALLY.ID)



//********************************************************************************************************
//  Scourge Illusion Factions.
//********************************************************************************************************
export const SCOURGEAPP = std.CreatureTemplates.create("shrek6", "scourge-illusion-appearance", 10469)
    .Models.clearAll()
    .Models.addIds(
        11148, //Female
        11122, //Female 2
        10955,  //Female 3
        11132 //Male
    )

export const SCOURGEAPP2 = std.CreatureTemplates.create("shrek6", "scourge-illusion-appearance2", 10469)
    .Models.clearAll()
    .Models.addIds(
        11131, //Female 4
        11123, //Male 2
        10954, //Male 3
        10535 //Male 4
    )
    
export const FACTION_SRG_AS_HORDE = std.Factions.create("shrek6", "illusionFaction_SRG_asHorde", false)
    .Name.enGB.set("Blademaster Scourge Illusion")
    .Templates.addNeutralHostileGet()
        .FactionGroup.PLAYERS.set(1)
        .FriendFactions.setId(0, 20)

export const FACTION_SRG_AS_ALLY = std.Factions.create("shrek6", "illusionFaction_SRG_asAlliance", false)
    .Name.enGB.set("Blademaster Scourge Illusion")
    .Templates.addNeutralHostileGet()
        .FactionGroup.PLAYERS.set(1)
        .FriendFactions.setId(0, 20)


std.Factions.load(20).Templates.getIndex(0) //Scourge faction
    //.EnemyGroup.HORDE.set(1)
    //.EnemyGroup.ALLIANCE.set(1)
    //.FriendFactions.setId(0, FACTION_SRG_AS_HORDE.ID)
   // .FriendFactions.setId(0, FACTION_SRG_AS_ALLY.ID)



//********************************************************************************************************
//  Black Rock Orcs Illusion Factions.
//******************************************************************************************************** 
export const FACTION_BR_AS_HORDE = std.Factions.create("shrek6", "illusionFaction_BR_asHorde", false)
    .Name.enGB.set("Blademaster Black Rock Orc Illusion")
    .Templates.addNeutralHostileGet()
        .FactionGroup.PLAYERS.set(1)
        .FriendFactions.setId(0, 34)

export const FACTION_BR_AS_ALLY = std.Factions.create("shrek6", "illusionFaction_BR_asAlliance", false)
    .Name.enGB.set("Blademaster Black Rock Orc Illusion")
    .Templates.addNeutralHostileGet()
        .FactionGroup.PLAYERS.set(1)
        .FriendFactions.setId(0, 34)
    
    
std.Factions.load(34).Templates.getIndex(0) //Black Rock Orcs faction
    //.EnemyGroup.HORDE.set(1)
    //.EnemyGroup.ALLIANCE.set(1)
    //.FriendFactions.setId(0, FACTION_BR_AS_HORDE.ID)
    //.FriendFactions.setId(0, FACTION_BR_AS_ALLY.ID)





export const ILLUSION_GROUP = std.SpellStackGroups.create().StackRule.EXCLUSIVE.set()

//console.log(std.Factions.load(34).objectify())
//console.log(std.Factions.load(48).objectify())
//console.log(std.Factions.load(189).objectify())
//console.log(std.Factions.load(20).objectify())