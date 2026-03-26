import { std } from "wow/wotlk";

export const BELFWARR_LEGS = std.Items.create("shrek6", "BELFWARR_LEGS")
        .Name.enGB.set("Sunstrider's Leggings")
        .Armor.set(2)
        .DisplayInfo.set(33263) 
        .InventoryType.LEGS.set()
        .Material.CLOTH.set()
        .ItemLevel.set(1)
        .Quality.GRAY.set()
        .Price.PlayerSellPrice.set(3)
        .Durability.set(25)
        .Class.CLOTH_EQUIP.set()
        .MaxStack.set(1)
//display ids:
//standard red chain = 33263
//firemane legs = 28437