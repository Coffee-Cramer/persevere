import { std } from "wow/wotlk";

std.Spells.load(58984)
    .Attributes.CANNOT_USE_IN_COMBAT.set(1)
    .Description.enGB.set("Activate to slip into the shadows, reducing the chance for enemies to detect your presence. Lasts until cancelled or upon moving. Cannot be used in combat.")