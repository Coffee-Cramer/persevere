import { std } from "wow/wotlk";


// *************************************************************************
// * Shattering Images
// *************************************************************************
const SHTTR = std.Spells.create("shrek6", "SHTTR")
    .Name.enGB.set("Shattering Images")
    .Icon.setPath("Spell_nature_wispsplode")
    .Description.enGB.set("Your Mirror Images now shatter into a hundred blades at the end of their duration, dealing damage to all nearby enemies.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Duration.set(21)
    .Range.set(0)
    .CastTime.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const SHTTR2 = std.Spells.create("shrek6", "SHTTR2")
    .Name.enGB.set("Shattering Images")
    .Icon.setPath("Spell_nature_wispsplode")
    .Description.enGB.set("Your Mirror Images now shatter into a hundred blades at the end of their duration, dealing damage to all nearby enemies. More effective than Shattering Images (Rank 1).")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Duration.set(21)
    .Range.set(0)
    .CastTime.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const SHTTR3 = std.Spells.create("shrek6", "SHTTR3")
    .Name.enGB.set("Shattering Images")
    .Icon.setPath("Spell_nature_wispsplode")
    .Description.enGB.set("Your Mirror Images now shatter into a hundred blades at the end of their duration, dealing damage to all nearby enemies. More effective than Shattering Images (Rank 2).")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Duration.set(21)
    .Range.set(0)
    .CastTime.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const SHTTR_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'SHTTR_TALENT', 3)
    .Position.set(5, 1)
    .Spells.set(0, SHTTR.ID)
    .Spells.set(1, SHTTR2.ID)
    .Spells.set(2, SHTTR3.ID)