import { std } from "wow/wotlk";

//*************************************************************************
//* Piercing
//*************************************************************************
const POLSPEC = std.Spells.create('shrek6', 'POLSPEC') 
    .Name.enGB.set("Piercing")
    .Subtext.enGB.set("Talent")
    .Icon.setPath("Inv_spear_04")
    .Description.enGB.set("Chance to Critical Strike is increased by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    //.ItemEquips.Class.set(2)
    //.ItemEquips.Subclass.set(200)
POLSPEC.Effects.clearAll()
POLSPEC.Effects.addMod(x => x
    .Type.APPLY_AURA.set()
    .Aura.MOD_CRIT_PCT.set()
    .PercentBase.set(0)
)

const POLSPEC2 = std.Spells.create('shrek6', 'POLSPEC2')
    .Name.enGB.set("Piercing")
    .Subtext.enGB.set("Talent")
    .Icon.setPath("Inv_spear_04")
    .Description.enGB.set("Chance to Critical Strike is increased by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    //.ItemEquips.Class.set(2)
    //.ItemEquips.Subclass.set(200)
POLSPEC2.Effects.clearAll()
POLSPEC2.Effects.addMod(x => x
    .Type.APPLY_AURA.set()
    .Aura.MOD_CRIT_PCT.set()
    .PercentBase.set(1)
)

const POLSPEC3 = std.Spells.create('shrek6', 'POLSPEC3')
    .Name.enGB.set("Piercing")
    .Subtext.enGB.set("Talent")
    .Icon.setPath("Inv_spear_04")
    .Description.enGB.set("Chance to Critical Strike is increased by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    //.ItemEquips.Class.set(2)
    //.ItemEquips.Subclass.set(200)
POLSPEC3.Effects.clearAll()
POLSPEC3.Effects.addMod(x => x
    .Type.APPLY_AURA.set()
    .Aura.MOD_CRIT_PCT.set()
    .PercentBase.set(2)
)

const POLSPEC_TALENT = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'POLSPEC_TALENT', 3)
    .Position.set(0, 0)
    .Spells.set(0, POLSPEC.ID)
    .Spells.set(1, POLSPEC2.ID)
    .Spells.set(2, POLSPEC3.ID)