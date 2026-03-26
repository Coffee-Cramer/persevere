import { std } from "wow/wotlk"
import { setLevelSquish } from "../../serverSettings"

const TMPLTS = std.CreatureTemplates //all creature templates


if(setLevelSquish == true){
    /*******************************************************************************************************************************
    *   Make NPCs Level 60 if they are higher level and not a boss
    ********************************************************************************************************************************/
    TMPLTS.forEach((npc) => {
        if(npc.Level.Max.get() > 63 && !npc.Rank.BOSS.is()){ //if they are higher than level 63 and not a boss, set level to 60
            npc.Level.set(60, 60)
        }
        else if(npc.Level.Max.get() > 63 && npc.Rank.BOSS.is()){ //else if they are higher than level 63 and are a boss, set level to 63
            npc.Level.set(63, 63)
        }
    })


    //****************************************************FURTHER BALANCES******************************************************\\
    const BLUFFWATCHER = std.CreatureTemplates.load(3084) //Thunder Bluff Guards
    BLUFFWATCHER.Level.set(55, 55)

    const ORG_GRUNT = std.CreatureTemplates.load(3296)  //Orrimmar Grunt
    ORG_GRUNT.Level.set(55, 55)

    const UC_GUARDIAN = std.CreatureTemplates.load(36213)  //Undercity Abominations
    UC_GUARDIAN.Level.set(55, 55)

    const BTYBAY_BRUISER = std.CreatureTemplates.load(4624) //Booty Bay Bruiser
    BTYBAY_BRUISER.Level.set(57, 58)

    const STRMWND_GUARD = std.CreatureTemplates.load(68) //Stormwind Guard
    STRMWND_GUARD.Level.set(55, 55)

    const SWPAT = std.CreatureTemplates.load(1976) //Stormwind Patrol
    SWPAT.Level.set(55, 55)

    const IFGRD = std.CreatureTemplates.load(5595) //Ironforge Guard
    IFGRD.Level.set(55, 55)

    const LTSHPE_GUARD = std.CreatureTemplates.load(16378) //Lightshope Chapel Guard
    LTSHPE_GUARD.Level.set(55, 55)
        .Stats.HealthMod.set(3)
        .Stats.DamageMod.set(3)

}
