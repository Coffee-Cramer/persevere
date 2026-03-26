import { std } from "wow/wotlk";
import { setDeathKnight } from "../../../../serverSettings";

//*******************************************************************************************************************************
//*   Enable/Disable Death Knight 
//*******************************************************************************************************************************
if(setDeathKnight == true){ 
    std.Classes.load('DEATH_KNIGHT').RequiredExpansion.set(0)
    std.Classes.load('DEATH_KNIGHT').UI.ButtonPos.setPos(0, 80)
}
else{
    std.Classes.load('DEATH_KNIGHT').UI.ButtonPos.setPos(-200, -200)
    std.Classes.load('DEATH_KNIGHT').RequiredExpansion.set(5)
}
