import { std } from "wow/wotlk";

// *************************************************************************
// * Element of Surprise
// *************************************************************************
const ELESURPRSE = std.Spells.create("shrek6", "ELESURPRSE")
    .Name.enGB.set("Element of Surprise")
    .Icon.setPath("Ability_rogue_ambush")
    .Description.enGB.set("Incursion now applies 1 additional stack of Critical Strike.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Effects.addMod( x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )


const ELESURPRSE2 = std.Spells.create("shrek6", "ELESURPRSE2")
    .Name.enGB.set("Element of Surprise")
    .Icon.setPath("Ability_rogue_ambush")
    .Description.enGB.set("Incursion now applies 2 additional stacks of Critical Strike.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Effects.addMod( x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const ELESURPRSE3 = std.Spells.create("shrek6", "ELESURPRSE3")
    .Name.enGB.set("Element of Surprise")
    .Icon.setPath("Ability_rogue_ambush")
    .Description.enGB.set("Incursion now applies 3 additional stacks of Critical Strike.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )

//console.log("ELEMENT OF SURPRISE 1: ", std.Spells.ID(ELESURPRSE))
//console.log("ELEMENT OF SURPRISE 2: ", std.Spells.ID(ELESURPRSE2))
//console.log("ELEMENT OF SURPRISE 3: ", std.Spells.ID(ELESURPRSE3))

const ELESURPRSE_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'ELESURPRSE_TALENT', 3)
    .Position.set(1, 1)
    .Spells.set(0, ELESURPRSE.ID)
    .Spells.set(1, ELESURPRSE2.ID)
    .Spells.set(2, ELESURPRSE3.ID)
    .Requirements.add(IMPCRIT_TALENT.ID, 5)