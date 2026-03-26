import { std } from "wow/wotlk";
import { NORMAL_RESPAWN_TIME } from "../../spawnrates";


const SAURFNG = std.CreatureTemplates.load(14720)
    .Spawns.add('shrek6', 'srfng', {map:1,x:1567.376831,y:-4394.290039,z:6.997414,o:3.036949}, (npc) => {
        npc.EquipmentID.set(1)
        npc.SpawnTime.set(NORMAL_RESPAWN_TIME)
    })