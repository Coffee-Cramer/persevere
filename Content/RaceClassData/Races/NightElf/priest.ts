import { MaskCon } from "wow/data/cell/cells/MaskCell";
import { std } from "wow/wotlk";
import { RaceMask } from "wow/wotlk/std/Race/RaceType";
import { SkillLine } from "wow/wotlk/std/SkillLines/SkillLine";
import { learnSpell } from "../../../../Functions/learnSpell";
import { priestBows } from "../../../../serverSettings";


if(priestBows == true){
    const SHADOW = std.SkillLines.load(32)
    
    //****************************************************************************
    //*  Shoot Bow spell for Night Elf Priests.
    //*****************************************************************************/
    const RNGDWEP_SHOOT = std.Spells.create("shrek6", "RNGDWEP_SHOOT", 5019) //child of wand shoot
        .Name.enGB.set("Shoot Bow")
        .Description.enGB.set("Attack with an equipped bow.")
        .Subtext.enGB.set("Racial")
        .Icon.setPath("Ability_marksmanship")
        .ItemEquips.set(2, 262156, 0) //requires a ranged weapon
        
    learnSpell(RNGDWEP_SHOOT.ID, 1, 'PRIEST', 'NIGHTELF') 
}
