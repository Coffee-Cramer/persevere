import { std } from "wow/wotlk";

export const BLDSNDLS = std.Items.create("shrek6", "BLDSNDLS")
    .Name.enGB.set("Blademaster Wraps")
    .DisplayInfo.set(16855) //Knittede Sandals visual id
    .InventoryType.FEET.set()
    .Material.CLOTH.set()
    .Quality.GRAY.set()
    .Price.PlayerSellPrice.set(3)
    .Class.CLOTH_EQUIP.set()
    .MaxStack.set(1)