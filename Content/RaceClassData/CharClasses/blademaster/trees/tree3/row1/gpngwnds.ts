import { std } from "wow/wotlk";

//*************************************************************************
// * Gaping Wounds
// ************************************************************************/
const EXPWNDS = std.Spells.create("shrek6", "EXPWNDS")
    .Family.set(511)
    .Name.enGB.set("Gaping Wounds")
    .Icon.setPath("spell_nature_dryaddispelmagic")
    .Description.enGB.set("Increases Blood Let's duration by 2 sec.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Range.setSimple(0, 5)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(2000)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
EXPWNDS.Effects.get(0).ClassMask.setBit(12, 1) //Blood Let classmask

const EXPWNDS2 = std.Spells.create("shrek6", "EXPWNDS2")
    .Family.set(511)
    .Name.enGB.set("Gaping Wounds")
    .Icon.setPath("spell_nature_dryaddispelmagic")
    .Description.enGB.set("Increases Blood Let's duration by 4 sec.")
    .Range.setSimple(0, 5)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(4000)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
EXPWNDS2.Effects.get(0).ClassMask.setBit(12, 1) //Blood Let classmask

const EXPWNDS3 = std.Spells.create("shrek6", "EXPWNDS3")
    .Family.set(511)
    .Name.enGB.set("Gaping Wounds")
    .Icon.setPath("spell_nature_dryaddispelmagic")
    .Description.enGB.set("Increases Blood Let's duration by 6 sec.")
    .Range.setSimple(0, 5)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(6000)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
EXPWNDS3.Effects.get(0).ClassMask.setBit(12, 1) //Blood Let classmask

const EXPWNDS4 = std.Spells.create("shrek6", "EXPWNDS4")
    .Family.set(511)
    .Name.enGB.set("Gaping Wounds")
    .Icon.setPath("spell_nature_dryaddispelmagic")
    .Description.enGB.set("Increases Blood Let's duration by 8 sec.")
    .Range.setSimple(0, 5)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(8000)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
EXPWNDS3.Effects.get(0).ClassMask.setBit(12, 1) //Blood Let classmask

const EXPWNDS5 = std.Spells.create("shrek6", "EXPWNDS5")
    .Family.set(511)
    .Name.enGB.set("Gaping Wounds")
    .Icon.setPath("spell_nature_dryaddispelmagic")
    .Description.enGB.set("Increases Blood Let's duration by 10 sec.")
    .Range.setSimple(0, 5)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(10000)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
EXPWNDS3.Effects.get(0).ClassMask.setBit(12, 1) //Blood Let classmask

const EXPWNDS_TALENT = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'EXPWNDS_TALENT', 3)
    .Position.set(0, 1)
    .Spells.set(0, EXPWNDS.ID)
    .Spells.set(1, EXPWNDS2.ID)
    .Spells.set(2, EXPWNDS3.ID)
    .Spells.set(3, EXPWNDS4.ID)
    .Spells.set(4, EXPWNDS5.ID)