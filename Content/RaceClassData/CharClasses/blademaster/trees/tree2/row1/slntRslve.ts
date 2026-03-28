import { std } from "wow/wotlk";

// *************************************************************************
// * Silent Resolve
// *************************************************************************
const SILENTRESOLVE = std.Spells.create("shrek6", "SILENTRESOLVE")
    .Name.enGB.set("Silent Resolve")
    .Icon.setPath("Spell_frost_windwalkon")
    .Description.enGB.set("Reduces the chance you will be detected while Windwalking or while you are using Deception.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Effects.addMod( x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_STEALTH_LEVEL.set()
        .PointsBase.set(0)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const SILENTRESOLVE2 = std.Spells.create("shrek6", "SILENTRESOLVE2")
    .Name.enGB.set("Silent Resolve")
    .Icon.setPath("Spell_frost_windwalkon")
    .Description.enGB.set("Reduces the chance you will be detected while Windwalking or while you are using Deception. More effective than Silent Resolve (Rank 1).")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Effects.addMod( x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_STEALTH_LEVEL.set()
        .PointsBase.set(1)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const SILENTRESOLVE3 = std.Spells.create("shrek6", "SILENTRESOLVE3")
    .Name.enGB.set("Silent Resolve")
    .Icon.setPath("Spell_frost_windwalkon")
    .Description.enGB.set("Reduces the chance you will be detected while Windwalking or while you are using Deception. More effective than Silent Resolve (Rank 2).")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Effects.addMod( x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_STEALTH_LEVEL.set()
        .PointsBase.set(2)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const SILRSLV_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'SILRSLV_TALENT', 3)
    .Position.set(0, 2)
    .Spells.set(0, SILENTRESOLVE.ID)
    .Spells.set(1, SILENTRESOLVE2.ID)
    .Spells.set(2, SILENTRESOLVE3.ID)
