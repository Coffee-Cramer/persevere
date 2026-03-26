import { std } from "wow/wotlk";

export const BELFWARR_BOOTS = std.Items.create("shrek6", "BELFWARR_BOOTS")
        .Name.enGB.set("Sunstrider's Boots")
        .DisplayInfo.set(28383) 
        .InventoryType.FEET.set()
        .Material.CLOTH.set()
        .Quality.GRAY.set()
        .Price.PlayerSellPrice.set(3)
        .Class.CLOTH_EQUIP.set()
        .MaxStack.set(1)
//display ids:
//standard red chain = 33270
//scarlet boots = 28383