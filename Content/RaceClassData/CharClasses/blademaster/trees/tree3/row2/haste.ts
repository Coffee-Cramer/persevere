import { std } from "wow/wotlk";

//*************************************************************************
// * Haste
// ************************************************************************/
const HASTE = std.Spells.create('shrek6', 'HASTE')
    .Name.enGB.set("Haste")
    .Icon.setPath("Spell_nature_timestop")
    .Description.enGB.set("Increases your melee haste by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_MELEE_HASTE.set()
        .PercentBase.set(0)
        .ImplicitTargetA.UNIT_CASTER.set()
    )


const HASTE2 = std.Spells.create('shrek6', 'HASTE2')
    .Name.enGB.set("Haste")
    .Icon.setPath("Spell_nature_timestop")
    .Description.enGB.set("Increases your melee haste by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_MELEE_HASTE.set()
        .PercentBase.set(1)
        .ImplicitTargetA.UNIT_CASTER.set()
    )


const HASTE3 = std.Spells.create('shrek6', 'HASTE3')
    .Name.enGB.set("Haste")
    .Icon.setPath("Spell_nature_timestop")
    .Description.enGB.set("Increases your melee haste by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_MELEE_HASTE.set()
        .PercentBase.set(2)
        .ImplicitTargetA.UNIT_CASTER.set()
    )


const HASTE4 = std.Spells.create('shrek6', 'HASTE4')
    .Name.enGB.set("Haste")
    .Icon.setPath("Spell_nature_timestop")
    .Description.enGB.set("Increases your melee haste by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_MELEE_HASTE.set()
        .PercentBase.set(3)
        .ImplicitTargetA.UNIT_CASTER.set()
    )


const HASTE5 = std.Spells.create('shrek6', 'HASTE5')
    .Name.enGB.set("Haste")
    .Icon.setPath("Spell_nature_timestop")
    .Description.enGB.set("Increases your melee haste by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_MELEE_HASTE.set()
        .PercentBase.set(4)
        .ImplicitTargetA.UNIT_CASTER.set()
    )


const HASTE_TAL = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'HASTE_TAL', 5)
    .Position.set(4, 0)
    .Spells.set(0, HASTE.ID)
    .Spells.set(1, HASTE2.ID)
    .Spells.set(2, HASTE3.ID)
    .Spells.set(3, HASTE4.ID)
    .Spells.set(4, HASTE5.ID)