import { std } from "wow/wotlk";

//*************************************************************************
// Discombobulate
// ************************************************************************/
const DSCMBB = std.Spells.create("shrek6", "DSCMBB")
    .Family.set(INCURSION_OBJ.GetFamily())
    .Name.enGB.set("Discombobulate")
    .Icon.setPath(INCURSION_OBJ.GetIcon())
    .Description.enGB.set("When you use Incursion, the enemy is thrown off guard. Causing them to be stunned for 0.5 sec.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Range.setSimple(0, 5)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(500)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
DSCMBB.Effects.get(0).ClassMask.setBit(INCURSION_OBJ.GetClassMask(), 1) //Blood Let classmask

const DSCMBB2 = std.Spells.create("shrek6", "DSCMBB2")
    .Family.set(INCURSION_OBJ.GetFamily())
    .Name.enGB.set("Discombobulate")
    .Icon.setPath(INCURSION_OBJ.GetIcon())
    .Description.enGB.set("When you use Incursion, the enemy is thrown off guard. Causing them to be stunned for 1 sec.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Range.setSimple(0, 5)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(1000)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
DSCMBB2.Effects.get(0).ClassMask.setBit(INCURSION_OBJ.GetClassMask(), 1) //Blood Let classmask

const DSCMBB3 = std.Spells.create("shrek6", "DSCMBB3")
    .Family.set(INCURSION_OBJ.GetFamily())
    .Name.enGB.set("Discombobulate")
    .Icon.setPath(INCURSION_OBJ.GetIcon())
    .Description.enGB.set("When you use Incursion, the enemy is thrown off guard. Causing them to be stunned for 1.5 sec.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Range.setSimple(0, 5)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(1500)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
DSCMBB3.Effects.get(0).ClassMask.setBit(INCURSION_OBJ.GetClassMask(), 1) //Blood Let classmask

const DSCMBB4 = std.Spells.create("shrek6", "DSCMBB4")
    .Family.set(INCURSION_OBJ.GetFamily())
    .Name.enGB.set("Discombobulate")
    .Icon.setPath(INCURSION_OBJ.GetIcon())
    .Description.enGB.set("When you use Incursion, the enemy is thrown off guard. Causing them to be stunned for 2 sec.")
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
DSCMBB4.Effects.get(0).ClassMask.setBit(INCURSION_OBJ.GetClassMask(), 1) //Blood Let classmask

const DSCMBB5 = std.Spells.create("shrek6", "DSCMBB5")
    .Family.set(INCURSION_OBJ.GetFamily())
    .Name.enGB.set("Discombobulate")
    .Icon.setPath(INCURSION_OBJ.GetIcon())
    .Description.enGB.set("When you use Incursion, the enemy is thrown off guard. Causing them to be stunned for 2.5 sec.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Range.setSimple(0, 5)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(2500)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
DSCMBB5.Effects.get(0).ClassMask.setBit(INCURSION_OBJ.GetClassMask(), 1) //Blood Let classmask

const LASH_TALENT = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'LASH_TALENT', 1)
    .Position.set(0, 0)
    .Spells.set(0, DSCMBB.ID)
    .Spells.set(1, DSCMBB2.ID)
    .Spells.set(2, DSCMBB3.ID)
    .Spells.set(3, DSCMBB4.ID)
    .Spells.set(4, DSCMBB5.ID)
