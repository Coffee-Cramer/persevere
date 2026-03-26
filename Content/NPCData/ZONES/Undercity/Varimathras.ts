import { std } from "wow/wotlk"

/*******************************************************************************************************************************
*   Bring Varimathras back
********************************************************************************************************************************/
const BRAGOR = std.CreatureTemplates.load(36273)
    .Name.enGB.set("Varimathras")
    .Subname.clear()
    .Models.clearAll()
    .Models.addIds(28220)
    .Level.set(62, 62)
    .Stats.HealthMod.set(330)
    .Stats.DamageMod.set(35)
    .HealthExpansion.set(0)
    .Rank.BOSS.set()
    .TypeFlags.BOSS.set(1)
    .Weapons.forEach((weapon) => {
        weapon.delete()
    })
    .Gossip.modNew((gossip) => {
        gossip.Text.add({enGB: "This better be good, $c. The Dark Lady and I have pressing matters to attend to."})
    })

