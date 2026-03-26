import { std } from "wow/wotlk"
import { NORMAL_RESPAWN_TIME, RARE_RESPAWN_TIME } from "../../spawnrates"


const TROLL_LOOT = std.CreatureTemplates.load(946).NormalLoot.get() //Frostmane Novice normalloot

export const GIMDREK = std.CreatureTemplates.create("shrek6", "GIMDREK")
    .Name.enGB.set("Gim'Drek")
    .FactionTemplate.NEUTRAL_HOSTILE.set()
    .Level.set(4, 5)
    .Models.clearAll()
    .Models.addIds(27494)
    .Weapons.add(2132)
    .NormalLoot.set(TROLL_LOOT)
    .Rank.RARE.set()
    .UnitClass.MAGE.set()
    .AIName.SmartAI()
    .Spawns.add('shrek6', 'GIMDREK_SPAWN', {map:0,x:-6540.911133,y:367.100464,z:396.821075,o:3.681165}, (npc) => {
        npc.SpawnTime.set(RARE_RESPAWN_TIME)
        npc.EquipmentID.set(1)
    })
    .InlineScripts.OnJustEnteredCombat((npc) => {
        npc.CastSpell(npc, 687) //cast Demon Skin
    })
