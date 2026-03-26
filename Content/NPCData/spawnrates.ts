import { std } from "wow/wotlk";

const ZOMBY = std.CreatureInstances.load(1529)
const RARE = std.CreatureInstances.load(10358)

export const NORMAL_RESPAWN_TIME = ZOMBY.SpawnTime.get() //basic spawn time
export const RARE_RESPAWN_TIME = RARE.SpawnTime.get() //rare spawn time
