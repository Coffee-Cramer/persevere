import { std } from "wow/wotlk";

export const KILT = std.Items.create("shrek6", "bldm-kilt")
    .Name.enGB.set("Blademaster Kilt")
    .Armor.set(2)
    .DisplayInfo.set(21404) //warchief kilt visual id
    .InventoryType.LEGS.set()
    .Material.CLOTH.set()
    .ItemLevel.set(1)
    .Quality.GRAY.set()
    .Price.PlayerSellPrice.set(3)
    .Durability.set(25)
    .Class.CLOTH_EQUIP.set()
    .MaxStack.set(1)