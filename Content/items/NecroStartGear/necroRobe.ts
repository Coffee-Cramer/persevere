import { std } from "wow/wotlk";

export const NECROROBE = std.Items.create("shrek6", "NECROROBE")
    .Name.enGB.set("Cultist Robe")
    .Armor.set(3)
    .DisplayInfo.set(65920) //recruit's Robe
    .InventoryType.CHEST.set()
    .Material.CLOTH.set()
    .ItemLevel.set(1)
    .Quality.GRAY.set()
    .Price.PlayerSellPrice.set(3)
    .Durability.set(25)
    .Class.CLOTH_EQUIP.set()
    .MaxStack.set(1)