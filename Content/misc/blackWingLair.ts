import { std } from "wow/wotlk";
import { setBWL } from "../../serverSettings";

const BLKHNDCOM = std.Items.load(18987) //Blackhand's Command Quest Item

if(setBWL == false){
    BLKHNDCOM.delete()
}
else{
    BLKHNDCOM.undelete()
}