import { std } from "wow/wotlk";

export const BLDWRPS = std.Items.create("shrek6", "bldm-wraps")
    .Name.enGB.set("Blademaster Wraps")
    .DisplayInfo.set(57043) //Antiseptic-soaked Dressing visual id
    .InventoryType.SHIRT.set()
    .Material.CLOTH.set()
    .Quality.GRAY.set()
    .Price.PlayerSellPrice.set(3)
    .Class.CLOTH_EQUIP.set()
    .MaxStack.set(1)