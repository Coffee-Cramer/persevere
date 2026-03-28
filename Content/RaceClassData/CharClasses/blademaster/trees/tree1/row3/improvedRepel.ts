import { std } from "wow/wotlk";

//*************************************************************************
// * Improved Repel
// ************************************************************************/
const IMP_REPEL = std.Spells.create('shrek6', 'IMP_REPEL')
    .Family.set(19)
    .Name.enGB.set("Improved Repel")
    .Icon.setPath("Inv_sword_50")
    .Description.enGB.set("Duration of Repel is increased by 1 sec.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(1000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const IMP_REPEL2 = std.Spells.create('shrek6', 'IMP_REPEL2')
    .Family.set(19)
    .Name.enGB.set("Improved Repel")
    .Icon.setPath("Inv_sword_50")
    .Description.enGB.set("Duration of Repel is increased by 2 sec.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(2000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )


IMP_REPEL.Effects.get(0).ClassMask.setBit(19,1)
IMP_REPEL2.Effects.get(0).ClassMask.setBit(19,1)

const IMP_REPEL_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'IMP_REPEL_TALENT', 2)
    .Position.set(2, 2)
    .Spells.set(0, IMP_REPEL.ID)
    .Spells.set(1, IMP_REPEL2.ID)
    .Requirements.add(DEFLECTION_TALENT.ID, 5)