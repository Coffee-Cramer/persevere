import { std } from "wow/wotlk";

const SYLVANAS = std.CreatureTemplates.load(10181)
    .Weapons.forEach((Weapons) => {
        Weapons.Ranged.set(22811)
    })
