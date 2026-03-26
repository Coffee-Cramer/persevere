import { std } from "wow/wotlk"

const ARCANETORRENTROGUE = std.Spells.load(25046)

ARCANETORRENTROGUE.Effects.addMod( x => x  //add a rage energize to the rogue's arcane torrent
        .Type.ENERGIZE_PCT.set()
        .PowerType.RAGE.set()
        .PowerPctBase.set(14)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
ARCANETORRENTROGUE.Description.enGB.set("Silence all enemies within $a1 yards for $d and restores $s2 of your Energy or Rage.  Non-player victim spellcasting is also interrupted for $32747d.")

ARCANETORRENTROGUE.AutoLearn.add(1, 'WARRIOR', 'BLOODELF')