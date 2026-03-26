/********************************************************************************************************
 * LIST OF MECHANIC IMMUNITIES
*********************************************************************************************************/
export const enum MECHANICS {
    charm = 1,
    disornt = 2,
    disarm = 4,
    distrct = 8,
    fear = 16,
    grip = 32, //death grip and similar effects
    root = 64,
    pacify = 128, //not used: 0 spells with this mechanic
    silence = 256,
    sleep = 512,
    snare = 1024,
    stun = 2048,
    freeze = 4096,
    Knckout = 8192, //like repentence (paladin)
    bleed = 16384,
    bandage = 32768, 
    plymrph = 65536,
    banish = 131072, 
    shield = 262144, 
    shackle = 524288, //Shackle Undead only
    mount = 1048576, //any effect that summons a mount
    infect = 2097152,
    turn = 4194304, //e.g Turn Evil
    horror = 8388608, //e.g Death Coil
    invlnrbl = 16777216, //Forbaerance, Nether Protection, Diplomatic Immunity only
    intrpt = 33554432,
    daze = 67108864,
    discvry = 134217728, //any create item effect
    imnShld = 268435456, //Divine Shield, Ice Block, Hand of Protection...
    sap = 536870912,
    enraged = 1073741824
}