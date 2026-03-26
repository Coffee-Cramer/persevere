import { std } from "wow/wotlk"

export const BELFWARR_SHIRT = std.Items.create("shrek6", "BELFWARR_SHIRT")
        .Name.enGB.set("Sunstrider's Shirt")
        .DisplayInfo.set(33268) 
        .InventoryType.SHIRT.set()
        .Material.CLOTH.set()
        .Quality.GRAY.set()
        .Price.PlayerSellPrice.set(3)
        .Class.CLOTH_EQUIP.set()
        .MaxStack.set(1)
//display ids:
//standard red chain = 33268
//martyr's chain = 12971