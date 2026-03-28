import { std } from "wow/wotlk";

// *************************************************************************
// * Improved Bladestorm
// *************************************************************************
const IMP_BLDSTRM = std.Spells.create('shrek6', 'IMP_BLDSTRM')
    .Name.enGB.set("Improved Bladestorm")
    .Icon.set(83)
    .Subtext.enGB.set("Rank 1")
    .Description.enGB.set("Decreases the time between your Bladestorm hits by 0.13 sec.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.ACTIVATION_TIME.set()
        .PointsBase.set(-131)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
const IMP_BLDSTRM2_2 = std.Spells.create('shrek6', 'IMP_BLDSTRM2_2')
    .Name.enGB.set("Improved Bladestorm")
    .Icon.set(83)
    .Subtext.enGB.set("Rank 2")
    .Description.enGB.set("Decreases the time between your Bladestorm hits by 0.26 sec.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.ACTIVATION_TIME.set()
        .PointsBase.set(-261)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const IMP_BLDSTRM3_3 = std.Spells.create('shrek6', 'IMP_BLDSTRM3_3')
    .Name.enGB.set("Improved Bladestorm")
    .Icon.set(83)
    .Subtext.enGB.set("Rank 3")
    .Description.enGB.set("Decreases the time between your Bladestorm hits by 0.40 sec.")
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



const IMP_BLDSTRM_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'IMP_BLDSTRM_TALENT', 3)
    .Position.set(4, 2)
    .Spells.set(0, IMP_BLDSTRM.ID)
    .Spells.set(1, IMP_BLDSTRM2_2.ID)
    .Spells.set(2, IMP_BLDSTRM3_3.ID)