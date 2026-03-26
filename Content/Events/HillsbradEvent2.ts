import { std } from "wow/wotlk";
import { NORMAL_RESPAWN_TIME } from "../NPCData/spawnrates";

const LOOT = std.CreatureTemplates.load(2270).NormalLoot.get() //basic level 20 loot
const STLTH = std.Spells.load(6634)
STLTH.Effects.clearAll() //remove stealth ability from forsaken raiders

const FRSKNRDR = std.CreatureTemplates.load(17108)
    .Name.enGB.set("Forsaken Raider")
    .Spawns.forEach((spawn) => {
        spawn.delete()
    })


const XP_BUFF = std.Spells.create("shrek6", "XP_BUFF2")
    .Name.enGB.set("Quick Learner")
    .AuraDescription.enGB.set("Experience gains are increased by $s1%.")
    .Duration.setSimple(3600000)
    .Range.setSimple(0, 30)
    .Icon.setPath("Xp_icon")
    .Visual.set(211) 
    .CastTime.set(0)
    .Attributes.PERSISTS_DEATH.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_XP_PCT.set()
        .PercentBase.set(19)
        .ImplicitTargetA.UNIT_TARGET_ALLY.set()
        //.ImplicitTargetB.UNIT_SRC_AREA_ALLY.set()
    )


const SPAWNER = std.CreatureTemplates.create("shrek6", "SPAWNER")
    .Name.enGB.set("Watcher")
    .Models.clearAll()
    .Models.addIds(6299)
    .Level.Min.set(28)
    .Level.Max.set(30)
    .Stats.DamageMod.set(1)
    .Stats.HealthMod.set(1)
    .Spawns.add('shrek6', "SPAWNER", {map:0,x:-351.734497,y:-710.731140,z:76.210869,o:5.974275})
    .InlineScripts.OnJustAppeared((npc) => {
        let creature = ToCreature(npc)
        if(!creature) return

        let rand = getRandomNumber(0, 1)

        if(rand == 0){
            creature.SpawnCreature(17108, -337.011810,-691.169250,57.219223,1.168854, 7, 1)
            creature.SpawnCreature(17108, -324.818542,-696.755432,57.490295,1.333788, 7, 1)
            creature.SpawnCreature(17108, -359.348297,-724.340210,57.728806,5.295324, 7, 1)
            creature.SpawnCreature(17108, -332.017822,-714.757629,57.733303,2.711353, 7, 1)
            creature.SpawnCreature(17108, -349.860931,-715.673157,62.505806,0.630047, 7, 1)
            creature.SpawnCreature(45076, -343.744019,-716.978088,57.736012,1.096959, 7, 1) //HORDE ELITE
        }

        if(rand == 1){
            creature.SpawnCreature(2270, -337.011810,-691.169250,57.219223,1.168854, 7, 1)
            creature.SpawnCreature(2270, -324.818542,-696.755432,57.490295,1.333788, 7, 1)
            creature.SpawnCreature(2270, -359.348297,-724.340210,57.728806,5.295324, 7, 1)
            creature.SpawnCreature(2270, -332.017822,-714.757629,57.733303,2.711353, 7, 1)
            creature.SpawnCreature(2270, -349.860931,-715.673157,62.505806,0.630047, 7, 1)
            creature.SpawnCreature(45073, -343.744019,-716.978088,57.736012,1.096959, 7, 1) //ALLIANCE ELITE
        }

        function getRandomNumber(min: number, max: number){
            min = Math.ceil(min)
            max = Math.ceil(max)

            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    })

const SPWNINSTANCE = std.CreatureInstances.load(SPAWNER.ID).SpawnTime.set(NORMAL_RESPAWN_TIME)
    



const ALLY_ELITE = std.CreatureTemplates.create("shrek6", "ALLY_ELITE")
    .Name.enGB.set("Alliance Tower Elite")
    .Models.clearAll()
    .Models.addIds(7673)
    .Level.Min.set(28)
    .Level.Max.set(30)
    .Stats.DamageMod.set(3)
    .Stats.HealthMod.set(3)
    .FactionTemplate.STORMWIND.set()
    .Rank.ELITE.set()
    .AIName.SmartAI()
    .NPCFlags.SPELLCLICK.set(1)
    .NPCFlags.GOSSIP.set(1)
    .NormalLoot.set(LOOT)
    .Weapons.add(927, 17190)
    .Type.HUMANOID.set()
    .Gossip.modRef((gossip) => {
        gossip.Text.add({enGB: 'We have been tasked to secure this tower as a foothold against the Forsaken. The Horde may attack at any moment, be on your guard.'})
            gossip.Options.addMod((option) => {
                option.Icon.CHAT.set()
                    .Text.setSimple({enGB:'I will.'})
                    .Action.GOSSIP.setNew((gossip2) => {
                        gossip2.Text.add({enGB: 'For the Alliance!'})
                    })
                })
        })
    .InlineScripts.OnGossipSelect((npc) => {
        let creature = ToCreature(npc)
        if(!creature) return
        let nearbyPlayers = creature.GetPlayersInRange(50, 0, 0)
        if(!nearbyPlayers) return
        
        nearbyPlayers.forEach(nearbyPlayer => {
            if(nearbyPlayer.GetLevel() > 20 && nearbyPlayer.GetLevel() <= 31){
                npc.CastSpell(nearbyPlayer, 81438, true)
            }
        })
    })
    .InlineScripts.OnDeath((npc) => {
        let creature = ToCreature(npc)
        if(!creature) return
        let nearbyPlayers = creature.GetPlayersInRange(50, 0, 0)
        if(!nearbyPlayers) return
        let sentries = creature.GetCreaturesInRange(100, 2270,0,0)
        if(!sentries) return

        sentries.forEach(sentry => {
            sentry.DespawnOrUnsummon(1)
        });

        creature.SpawnCreature(17108, -337.011810,-691.169250,57.219223,1.168854, 7, 1)
        creature.SpawnCreature(17108, -324.818542,-696.755432,57.490295,1.333788, 7, 1)
        creature.SpawnCreature(17108, -359.348297,-724.340210,57.728806,5.295324, 7, 1)
        creature.SpawnCreature(17108, -332.017822,-714.757629,57.733303,2.711353, 7, 1)
        creature.SpawnCreature(17108, -349.860931,-715.673157,62.505806,0.630047, 7, 1)
        creature.SpawnCreature(45076, -343.744019,-716.978088,57.736012,1.096959, 7, 1) //HORDE ELITE

        creature.SendUnitYell("The Horde have taken the tower!", 0)
    })
    .InlineScripts.OnJustEnteredCombat((npc) => {
        let creature = ToCreature(npc)
        if(!creature) return

        creature.SendUnitYell("The Horde are attacking the tower!", 0)
    })


const ALLYINSTANCE = std.CreatureInstances.load(ALLY_ELITE.ID)
    ALLYINSTANCE
        .EquipmentID.set(1)
        

const HORDE_ELITE2 = std.CreatureTemplates.create("shrek6", "HORDE_ELITE2")
    .Name.enGB.set("Horde Tower Elite")
    .Models.clearAll()
    .Models.addIds(30065)
    .Level.Min.set(28)
    .Level.Max.set(30)
    .Stats.DamageMod.set(3)
    .Stats.HealthMod.set(3)
    .FactionTemplate.UNDERCITY.set()
    .Rank.ELITE.set()
    .AIName.SmartAI()
    .NPCFlags.SPELLCLICK.set(1)
    .NPCFlags.GOSSIP.set(1)
    .NormalLoot.set(LOOT)
    .Weapons.add(28794)
    .Type.HUMANOID.set()
    .Gossip.modRef((gossip) => {
        gossip.Text.add({enGB: 'We have been tasked to secure this tower as a foothold against Southshore. The Alliance may attack at any moment, be on your guard.'})
            gossip.Options.addMod((option) => {
                option.Icon.CHAT.set()
                    .Text.setSimple({enGB:'I will.'})
                    .Action.GOSSIP.setNew((gossip2) => {
                        gossip2.Text.add({enGB: "Lok'tar Ogar!"})
                    })
                })
        })
    .InlineScripts.OnGossipSelect((npc) => {
        let creature = ToCreature(npc)
        if(!creature) return
        let nearbyPlayers = creature.GetPlayersInRange(50, 0, 0)
        if(!nearbyPlayers) return
        
        nearbyPlayers.forEach(nearbyPlayer => {
            if(nearbyPlayer.GetLevel() > 20 && nearbyPlayer.GetLevel() <= 31){
                npc.CastSpell(nearbyPlayer, 81438, true)
            }
        })
    })
    .InlineScripts.OnDeath((npc) => {
        let creature = ToCreature(npc)
        if(!creature) return
        let nearbyPlayers = creature.GetPlayersInRange(50, 0, 0)
        if(!nearbyPlayers) return
        let raiders = creature.GetCreaturesInRange(100, 17108,0,0)
        if(!raiders) return

        raiders.forEach(raider => {
            raider.DespawnOrUnsummon(1)
        });

        creature.SpawnCreature(2270, -337.011810,-691.169250,57.219223,1.168854, 7, 1)
        creature.SpawnCreature(2270, -324.818542,-696.755432,57.490295,1.333788, 7, 1)
        creature.SpawnCreature(2270, -359.348297,-724.340210,57.728806,5.295324, 7, 1)
        creature.SpawnCreature(2270, -332.017822,-714.757629,57.733303,2.711353, 7, 1)
        creature.SpawnCreature(2270, -349.860931,-715.673157,62.505806,0.630047, 7, 1)
        creature.SpawnCreature(45073, -343.744019,-716.978088,57.736012,1.096959, 7, 1) //ALLIANCE ELITE

        creature.SendUnitYell("The Alliance have taken the tower!", 1)
    })
    .InlineScripts.OnJustEnteredCombat((npc) => {
        let creature = ToCreature(npc)
        if(!creature) return

        creature.SendUnitYell("The Alliance are attacking the tower!", 1)
    })

const HRDINSTANCE = std.CreatureInstances.load(HORDE_ELITE2.ID)
    HRDINSTANCE
        .EquipmentID.set(1)

//console.log("HORDE ELITE: ",HORDE_ELITE2.ID)
//console.log("ALLIANCE ELITE: ",ALLY_ELITE.ID)
//console.log("XP BUFF: ",XP_BUFF.ID)
