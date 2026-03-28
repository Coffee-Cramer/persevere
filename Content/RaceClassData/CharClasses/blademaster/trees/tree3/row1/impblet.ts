import { std } from "wow/wotlk";

// ************************************************************************
// * Improved Blood Let
// ************************************************************************
const IMP_BLET = std.Spells.create('shrek6', 'IMP_BLET')
    .Family.set(511)//Blood Let family
    .Name.enGB.set("Improved Blood Let")
    .Icon.setPath("Spell_shadow_lifedrain")
    .Description.enGB.set("Decreases the time it takes for Blood Let to deal its damage.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.ACTIVATION_TIME.set()
        .PointsBase.set(-201)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMP_BLET.Effects.get(0).ClassMask.setBit(12, 1)

const IMP_BLET2 = std.Spells.create('shrek6', 'IMP_BLET2')
    .Family.set(511)//Blood Let family
    .Name.enGB.set("Improved Blood Let")
    .Icon.setPath("Spell_shadow_lifedrain")
    .Description.enGB.set("Decreases the time it takes for Blood Let to deal its damage.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.ACTIVATION_TIME.set()
        .PointsBase.set(-401)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMP_BLET2.Effects.get(0).ClassMask.setBit(12, 1)

const IMP_BLET3 = std.Spells.create('shrek6', 'IMP_BLET3')
    .Family.set(511)//Blood Let family
    .Name.enGB.set("Improved Blood Let")
    .Icon.setPath("Spell_shadow_lifedrain")
    .Description.enGB.set("Decreases the time it takes for Blood Let to deal its damage.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.ACTIVATION_TIME.set()
        .PointsBase.set(-601)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMP_BLET3.Effects.get(0).ClassMask.setBit(12, 1)

const IMP_BLET4 = std.Spells.create('shrek6', 'IMP_BLET4')
    .Family.set(511)//Blood Let family
    .Name.enGB.set("Improved Blood Let")
    .Icon.setPath("Spell_shadow_lifedrain")
    .Description.enGB.set("Decreases the time it takes for Blood Let to deal its damage.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.ACTIVATION_TIME.set()
        .PointsBase.set(-801)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMP_BLET4.Effects.get(0).ClassMask.setBit(12, 1)

const IMP_BLET5 = std.Spells.create('shrek6', 'IMP_BLET5')
    .Family.set(511)//Blood Let family
    .Name.enGB.set("Improved Blood Let")
    .Icon.setPath("Spell_shadow_lifedrain")
    .Description.enGB.set("Decreases the time it takes for Blood Let to deal its damage.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.ACTIVATION_TIME.set()
        .PointsBase.set(-1001)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMP_BLET5.Effects.get(0).ClassMask.setBit(12, 1)


const IMP_BLET_TAL = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'IMP_BLET_TAL', 2)
    .Position.set(0, 1)
    .Spells.set(0, IMP_BLET.ID)
    .Spells.set(1, IMP_BLET2.ID)
    .Spells.set(2, IMP_BLET3.ID)
    .Spells.set(3, IMP_BLET4.ID)
    .Spells.set(4, IMP_BLET5.ID)