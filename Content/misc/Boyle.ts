import { std } from "wow/wotlk";
import { EMOTES } from "../../Enumerators&Arrays/NPCemotes";

//*******************************************************************************************************************************
//*   Give Boyle the talking animation
//*******************************************************************************************************************************
const BOYLE = std.CreatureTemplates.load(4612)
    .Emote.set(0)
    .NPCFlags.GOSSIP.set(1)
    .Gossip.modNew((gossip) => {
        gossip.Text.add({enGB: "Hello, $n."}, 1, EMOTES.talking)
    })
        
