import { std } from "wow/wotlk";

//*******************************************************************************************************************************
//*   Remove the Through The Dark Portal quests 
//*******************************************************************************************************************************
const TTDP = std.Quests.load(9407)
TTDP.delete()

const TTDP2 = std.Quests.load(11046)
TTDP2.delete()

const TTDP3 = std.Quests.load(10119)
TTDP3.delete()