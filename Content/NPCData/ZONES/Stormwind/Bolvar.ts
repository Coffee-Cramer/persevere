import { std } from "wow/wotlk"
import { EMOTES } from "../../../../Enumerators&Arrays/NPCemotes"


/*******************************************************************************************************************************
*   Change King Varian Wrynn back to Highlord Bolvar Fordragon
********************************************************************************************************************************/
const BOLVAR = std.CreatureTemplates.load(1748)
const VRNWRYNN = std.CreatureTemplates.load(29611)

VRNWRYNN.Name.enGB.set("Highlord Bolvar Fordragon")
    .Models.clearAll()
    .Models.addIds(5566)
    .Subname.clear()
    //stats
    .Stats.HealthMod.set(300)
    .Stats.ManaMod.set(20)
    .Stats.DamageMod.set(35)
    //AttackTime
    .AttackTime.MeleeBase.set(2000)
    .AttackTime.RangedBase.set(2000)
    .Weapons.forEach((weapon) => {
        weapon
            .RightHand.set(11902)
            .LeftHand.set(143)
    })
    .Gossip.modNew((gossip) => {
        gossip.Text.add({enGB: "Welcome to Stormwind, $c."}, 0, EMOTES.talking)
    })

//console.log(VRNWRYNN.Spawns.get())