import { std } from "wow/wotlk";
import { TriggerSpell } from "wow/wotlk/std/Spell/EffectTemplates/EffectTemplates";

const ICE_ROD = std.Items.create("shrek6", "ice-rod")
    .Name.enGB.set("Ice Rod")
    .Bonding.BINDS_ON_PICKUP.set()
    .DisplayInfo.set(20378)
    .Class.STAFF.set()
    .Quality.BLUE.set()
    .InventoryType.TWOHAND.set()
    .SheatheType.set(2)
    .Damage.addPhysical(21, 31)
    .Delay.set(3200)
    .Durability.set(90)
    .Price.PlayerSellPrice.set(10000)
    .ItemLevel.set(12)
    .MaxStack.set(1)
    .Stats.addAgility(4)
    .Stats.addAttackPower(5)
    .Spells.addMod(spell => 
        spell
            .Spell.set(43428)
            .Cooldown.set(60000)
            .Trigger.ON_USE.set()
    )
