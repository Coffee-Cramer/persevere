import { std } from "wow/wotlk";

/*******************************************************************************************************************************
*   Change journeyman's staff to an actual staff
********************************************************************************************************************************/
const JRNYMNSTF = std.Items.load(15925)
    .Damage.add('PHYSICAL', 10, 15)
    .InventoryType.TWOHAND.set()
    .Class.STAFF.set()
    .SheatheType.set(2)
    .Delay.set(3200)
