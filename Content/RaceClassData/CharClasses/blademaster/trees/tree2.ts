import { std } from "wow/wotlk";
import { BLDMSTR } from "../blademaster";
import { WINDWLK } from "../spells/windWalk/windWalk";
import { WINDWLK2 } from "../spells/windWalk/windWalk2";
import { WINDWLK3 } from "../spells/windWalk/windWalk3";
import { WINDWLK4 } from "../spells/windWalk/windWalk4";
import { INCURSION } from "../spells/incursion/Incursion";
import { SCNDWND } from "../spells/SecondWind/secondwind";
import { DECEPT } from "../spells/deception/Deception";
import { INCURSION2 } from "../spells/incursion/incursion2";
import { INCURSION3 } from "../spells/incursion/incursion3";
import { MSTRILN } from "../spells/MasterOfIllusion/masterofillusion";
import { WNDSTP } from "../spells/WindStep/windstep";


export const TALENT_TREE2 = std.TalentTrees.create('shrek6', 'test-talenttree-2')
    .Name.enGB.set("Mirage")
    .ClassMask.add(BLDMSTR.Mask)
    .BackgroundImage.set('RogueAssassination')
    .OrderIndex.set(1)

// ************************************************************************
// *  Anticipation
// ************************************************************************
const ANTIC_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'ANTIC_TALENT', 5)
    .Position.set(0, 1)
    .Spells.set(0, 20096)
    .Spells.set(1, 20097)
    .Spells.set(2, 20098)
    .Spells.set(3, 20099)
    .Spells.set(4, 20100)


//*************************************************************************
// * Blur
// ************************************************************************/
const AWKNING_SPELL = std.Spells.create('shrek6', 'AWKNING_SPELL')
    .Name.enGB.set("Blur")
    .Icon.setPath("Spell_nature_invisibilty")
    .Description.enGB.set("Increases your Dodge Chance by $s1% for $d1.")
    .AuraDescription.enGB.set("Dodge Chance increased by $s1%.")
    .CastTime.set(0)
    .Range.set(0)
    .Duration.setSimple(10000)
    .Visual.set(72) //4372 4370 72
    //.Stacks.set(10)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_DODGE_PERCENT.set()
        .PercentBase.set(9)
        .ImplicitTargetA.UNIT_CASTER.set()
    )


const AWKNING = std.Spells.create('shrek6', 'AWKNING')
    .Name.enGB.set("Blur")
    .Icon.setPath("Spell_nature_invisibilty")
    .Description.enGB.set("When you are struck you have a 1% chance to increase your Dodge Chance by 10% for 10 sec.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Proc.TriggerMask.DONE_MAINHAND_ATTACK.set(true).Chance.set(0)
    .Effects.addMod(eff => eff
        .Type.APPLY_AURA.set()
        .Aura.PROC_TRIGGER_SPELL.set().TriggeredSpell.set(AWKNING_SPELL.ID)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const AWKNING2 = std.Spells.create('shrek6', 'AWKNING2')
    .Name.enGB.set("Blur")
    .Icon.setPath("Spell_nature_invisibilty")
    .Description.enGB.set("When you are struck you have a 2% chance to increase your Dodge Chance by 10% for 10 sec.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Proc.TriggerMask.DONE_MAINHAND_ATTACK.set(true).Chance.set(1)
    .Effects.addMod(eff => eff
        .Type.APPLY_AURA.set()
        .Aura.PROC_TRIGGER_SPELL.set().TriggeredSpell.set(AWKNING_SPELL.ID)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const AWKNING3 = std.Spells.create('shrek6', 'AWKNING3')
    .Name.enGB.set("Blur")
    .Icon.setPath("Spell_nature_invisibilty")
    .Description.enGB.set("When you are struck you have a 3% chance to increase your Dodge Chance by 10% for 10 sec.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Proc.TriggerMask.DONE_MAINHAND_ATTACK.set(true).Chance.set(2)
    .Effects.addMod(eff => eff
        .Type.APPLY_AURA.set()
        .Aura.PROC_TRIGGER_SPELL.set().TriggeredSpell.set(AWKNING_SPELL.ID)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const AWKNING4 = std.Spells.create('shrek6', 'AWKNING4')
    .Name.enGB.set("Blur")
    .Icon.setPath("Spell_nature_invisibilty")
    .Description.enGB.set("When you are struck you have a 4% chance to increase your Dodge Chance by 10% for 10 sec.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Proc.TriggerMask.DONE_MAINHAND_ATTACK.set(true).Chance.set(3)
    .Effects.addMod(eff => eff
        .Type.APPLY_AURA.set()
        .Aura.PROC_TRIGGER_SPELL.set().TriggeredSpell.set(AWKNING_SPELL.ID)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const AWKNING5 = std.Spells.create('shrek6', 'AWKNING5')
    .Name.enGB.set("Blur")
    .Icon.setPath("Spell_nature_invisibilty")
    .Description.enGB.set("When you are struck you have a 5% chance to increase your Dodge Chance by 10% for 10 sec.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Proc.TriggerMask.DONE_MAINHAND_ATTACK.set(true).Chance.set(4)
    .Effects.addMod(eff => eff
        .Type.APPLY_AURA.set()
        .Aura.PROC_TRIGGER_SPELL.set().TriggeredSpell.set(AWKNING_SPELL.ID)
        .ImplicitTargetA.UNIT_CASTER.set()
    )


const AWKNING_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'AWKNING_TALENT', 5)
    .Position.set(1, 2)
    .Spells.set(0, AWKNING.ID)
    .Spells.set(1, AWKNING2.ID)
    .Spells.set(2, AWKNING3.ID)
    .Spells.set(3, AWKNING4.ID)
    .Spells.set(4, AWKNING5.ID)




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
    .Position.set(2, 2)
    .Spells.set(0, SILENTRESOLVE.ID)
    .Spells.set(1, SILENTRESOLVE2.ID)
    .Spells.set(2, SILENTRESOLVE3.ID)




// *************************************************************************
// * DECEPTION
// *************************************************************************
const DCPTAL = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'DECEPT-talent', 1)
    .Position.set(6, 1)
    .Spells.set(0, DECEPT.ID)



//*************************************************************************
// * MASTER OF ILLUSION
// ************************************************************************/
const MSTRILN_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'MSTRILN_TALENT', 1)
    .Position.set(4, 1)
    .Spells.set(0, MSTRILN.ID)






    
// *************************************************************************
// * Spell Dodge
// *************************************************************************
//console.log(std.Spells.load(822).objectify())
const MAGICWARD = std.Spells.create("shrek6", "MAGICWARD")
    .Name.enGB.set("Spell Dodge")
    .Icon.set(99)
    .Description.enGB.set("Reduces the chance you will be hit by spells by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Effects.addMod( x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_ATTACKER_SPELL_HIT_CHANCE.set()
        .Schools.add("ARCANE")
        .Schools.add("FIRE")
        .Schools.add("FROST")
        .Schools.add("SHADOW")
        .Schools.add("NATURE")
        .Schools.add("HOLY")
        .PercentBase.set(-2)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const MAGICWARD2 = std.Spells.create("shrek6", "MAGICWARD2")
    .Name.enGB.set("Spell Dodge")
    .Icon.set(99)
    .Description.enGB.set("Reduces the chance you will be hit by spells by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Effects.addMod( x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_ATTACKER_SPELL_HIT_CHANCE.set()
        .Schools.add("ARCANE")
        .Schools.add("FIRE")
        .Schools.add("FROST")
        .Schools.add("SHADOW")
        .Schools.add("NATURE")
        .Schools.add("HOLY")
        .PercentBase.set(-3)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const MAGICWARD3 = std.Spells.create("shrek6", "MAGICWARD3")
    .Name.enGB.set("Spell Dodge")
    .Icon.set(99)
    .Description.enGB.set("Reduces the chance you will be hit by spells by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Effects.addMod( x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_ATTACKER_SPELL_HIT_CHANCE.set()
        .Schools.add("ARCANE")
        .Schools.add("FIRE")
        .Schools.add("FROST")
        .Schools.add("SHADOW")
        .Schools.add("NATURE")
        .Schools.add("HOLY")
        .PercentBase.set(-4)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const MAGICWARD4 = std.Spells.create("shrek6", "MAGICWARD4")
    .Name.enGB.set("Spell Dodge")
    .Icon.set(99)
    .Description.enGB.set("Reduces the chance you will be hit by spells by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Effects.addMod( x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_ATTACKER_SPELL_HIT_CHANCE.set()
        .Schools.add("ARCANE")
        .Schools.add("FIRE")
        .Schools.add("FROST")
        .Schools.add("SHADOW")
        .Schools.add("NATURE")
        .Schools.add("HOLY")
        .PercentBase.set(-5)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const MAGICWARD5 = std.Spells.create("shrek6", "MAGICWARD5")
    .Name.enGB.set("Spell Dodge")
    .Icon.set(99)
    .Description.enGB.set("Reduces the chance you will be hit by spells by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Effects.addMod( x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_ATTACKER_SPELL_HIT_CHANCE.set()
        .Schools.add("ARCANE")
        .Schools.add("FIRE")
        .Schools.add("FROST")
        .Schools.add("SHADOW")
        .Schools.add("NATURE")
        .Schools.add("HOLY")
        .PercentBase.set(-6)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const MGCWARD_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'MGCWARD_TALENT', 5)
    .Position.set(3, 2)
    .Spells.set(0, MAGICWARD.ID)
    .Spells.set(1, MAGICWARD2.ID)
    .Spells.set(2, MAGICWARD3.ID)
    .Spells.set(3, MAGICWARD4.ID)
    .Spells.set(4, MAGICWARD5.ID)
    



// *************************************************************************
// *   Improved Spell Deflect 
// *************************************************************************
const IMPSPELLDEFELCT = std.Spells.create("shrek6", "IMPSPELLDEFELCT")
    IMPSPELLDEFELCT.Name.enGB.set("Improved Spell Deflect")
    .Icon.setPath("Ability_hunter_readiness")
    .Description.enGB.set("Increases the duration of Spell Deflect by 1 sec.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Family.set(23)
    .Effects.addMod( x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(1000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPSPELLDEFELCT.ClassMask.setBit(23, 1)

const IMPSPELLDEFELCT2 = std.Spells.create("shrek6", "IMPSPELLDEFELCT2")
    IMPSPELLDEFELCT2.Name.enGB.set("Improved Spell Deflect")
    .Icon.setPath("Ability_hunter_readiness")
    .Description.enGB.set("Increases the duration of Spell Deflect by 2 sec.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Family.set(23)
    .Effects.addMod( x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(2000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPSPELLDEFELCT2.ClassMask.setBit(23, 1)


//const IMPSPELLDEFELCT_TALENT = TALENT_TREE2.Talents
    //.addSpellsGet('shrek6', 'IMPSPELLDEFELCT_TALENT', 2)
    //.Position.set(3, 0)
    //.Spells.set(0, IMPSPELLDEFELCT.ID)
    //.Spells.set(1, IMPSPELLDEFELCT2.ID)
    //.Requirements.add(MGCWARD_TALENT.ID, 5)



// *************************************************************************
// * Demise
// *************************************************************************
const INNDEMS = std.Spells.create("shrek6", "INNDEMS")
    .Name.enGB.set("Demise")
    .Icon.setPath("Ability_warrior_weaponmastery")
    .Description.enGB.set("Increases the damage of Incursion by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Family.set(15)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.DAMAGE.set()
        .PercentBase.set(19) 
        .ImplicitTargetA.UNIT_CASTER.set()
    )
INNDEMS.Effects.get(0).ClassMask.setBit(15, 1)


const INNDEMS2 = std.Spells.create("shrek6", "INNDEMS2")
    .Name.enGB.set("Demise")
    .Icon.setPath("Ability_warrior_weaponmastery")
    .Description.enGB.set("Increases the damage of Incursion by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Family.set(15)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.DAMAGE.set()
        .PercentBase.set(39) 
        .ImplicitTargetA.UNIT_CASTER.set()
    )
INNDEMS2.Effects.get(0).ClassMask.setBit(15, 1)

const INNDEMS3 = std.Spells.create("shrek6", "INNDEMS3")
    .Name.enGB.set("Demise")
    .Icon.setPath("Ability_warrior_weaponmastery")
    .Description.enGB.set("Increases the damage of Incursion by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Family.set(15)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.DAMAGE.set()
        .PercentBase.set(59) 
        .ImplicitTargetA.UNIT_CASTER.set()
    )
INNDEMS2.Effects.get(0).ClassMask.setBit(15, 1)

//console.log(std.Spells.load(INNDEMS.ID).objectify())


const INNDEMS_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'INNDEMS_TALENT', 2)
    .Position.set(5, 1)
    .Spells.set(0, INNDEMS.ID)
    .Spells.set(1, INNDEMS2.ID)
    .Spells.set(2, INNDEMS3.ID)




// *************************************************************************
// * Level 20 Spell Talent - Windstep
// *************************************************************************
const SDWSTEP_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'SDWSTEP_TALENT', 1)
    .Position.set(2, 1)
    .Spells.set(0, WNDSTP.ID)
    



//*************************************************************************
// * Confound
// ************************************************************************/
const IMP_MRRIMG = std.Spells.create('shrek6', 'IMP_MRRIMG')
    .Family.set(20)
    .Name.enGB.set("Confound")
    .Icon.setPath("Spell_nature_mirrorimage")
    .Description.enGB.set("The threat generated from your Pierce, Fatality, Blazing Strikes, and Shock Blade abilities is reduced by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.THREAT.set()
        .PercentBase.set(-11)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const IMP_MRRIMG2 = std.Spells.create('shrek6', 'IMP_MRRIMG2')
    .Family.set(20)
    .Name.enGB.set("Confound")
    .Icon.setPath("Spell_nature_mirrorimage")
    .Description.enGB.set("The threat generated from your Pierce, Fatality, Blazing Strikes, and Shock Blade abilities is reduced by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.THREAT.set()
        .PercentBase.set(-21)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const IMP_MRRIMG3 = std.Spells.create('shrek6', 'IMP_MRRIMG3')
    .Family.set(20)
    .Name.enGB.set("Confound")
    .Icon.setPath("Spell_nature_mirrorimage")
    .Description.enGB.set("The threat generated from your Pierce, Fatality, Blazing Strikes, and Shock Blade abilities is reduced by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.THREAT.set()
        .PercentBase.set(-31)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

IMP_MRRIMG.Effects.get(0).ClassMask.setBit(21, 1)
IMP_MRRIMG2.Effects.get(0).ClassMask.setBit(21, 1)
IMP_MRRIMG3.Effects.get(0).ClassMask.setBit(21, 1)


const IMP_MRRIMG_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'IMP_MRRIMG_TALENT', 1)
    .Position.set(1, 1)
    .Spells.set(0, IMP_MRRIMG.ID)
    .Spells.set(1, IMP_MRRIMG2.ID)
    .Spells.set(2, IMP_MRRIMG3.ID)




// *************************************************************************
// * Improved Specials
// *************************************************************************
const IMPSINISTERSTRIKE = std.Spells.load(13732)

const IMPSPECIALS = std.Spells.create("shrek6", "IMPSPECIALS")
    .Family.set(20)
    .Name.enGB.set("Improved Specials")
    .Icon.setPath("Ability_racial_bloodrage")
    .Description.enGB.set("Increases the effectiveness of your Pierce, Fatality, Shock Blade, and Blazing Strikes abilities by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Duration.set(21)
    .Range.set(0)
    .CastTime.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.EFFECT1.set()
        .PercentBase.set(1)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPSPECIALS.Effects.get(0).ClassMask.setBit(21, 1)


const IMPSPECIALS2 = std.Spells.create("shrek6", "IMPSPECIALS2")
    .Family.set(20)
    .Name.enGB.set("Improved Specials")
    .Icon.setPath("Ability_racial_bloodrage")
    .Description.enGB.set("Increases the effectiveness of your Pierce, Fatality, Shock Blade, and Blazing Strikes abilities by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Duration.set(21)
    .Range.set(0)
    .CastTime.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.EFFECT1.set()
        .PercentBase.set(3)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPSPECIALS2.Effects.get(0).ClassMask.setBit(21, 1)

const IMPSPECIALS3 = std.Spells.create("shrek6", "IMPSPECIALS3")
    .Family.set(20)
    .Name.enGB.set("Improved Specials")
    .Icon.setPath("Ability_racial_bloodrage")
    .Description.enGB.set("Increases the effectiveness of your Pierce, Fatality, Shock Blade, and Blazing Strikes abilities by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Duration.set(21)
    .Range.set(0)
    .CastTime.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.EFFECT1.set()
        .PercentBase.set(5)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPSPECIALS3.Effects.get(0).ClassMask.setBit(21, 1)

const IMPSPECIALS4 = std.Spells.create("shrek6", "IMPSPECIALS4")
    .Family.set(20)
    .Name.enGB.set("Improved Specials")
    .Icon.setPath("Ability_racial_bloodrage")
    .Description.enGB.set("Increases the effectiveness of your Pierce, Fatality, Shock Blade, and Blazing Strikes abilities by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Duration.set(21)
    .Range.set(0)
    .CastTime.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.EFFECT1.set()
        .PercentBase.set(7)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPSPECIALS4.Effects.get(0).ClassMask.setBit(21, 1)

const IMPSPECIALS5 = std.Spells.create("shrek6", "IMPSPECIALS5")
    .Family.set(20)
    .Name.enGB.set("Improved Specials")
    .Icon.setPath("Ability_racial_bloodrage")
    .Description.enGB.set("Increases the effectiveness of your Pierce, Fatality, Shock Blade, and Blazing Strikes abilities by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Duration.set(21)
    .Range.set(0)
    .CastTime.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.EFFECT1.set()
        .PercentBase.set(9)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPSPECIALS5.Effects.get(0).ClassMask.setBit(21, 1)

//console.log(std.Spells.load(IMPSINISTERSTRIKE.ID).objectify())

const IMPSPECIALS_TAL = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'IMPSPECIALS_TAL', 5)
    .Position.set(0, 2)
    .Spells.set(0, IMPSPECIALS.ID)
    .Spells.set(1, IMPSPECIALS2.ID)
    .Spells.set(2, IMPSPECIALS3.ID)
    .Spells.set(3, IMPSPECIALS4.ID)
    .Spells.set(4, IMPSPECIALS5.ID)
    



// *************************************************************************
// * Phase
// *************************************************************************
const GRTESC = std.Spells.create("shrek6", "GRTESC")
    .Name.enGB.set("Phase")
    .Icon.setPath("ability_blademaster_sanctuary_of_wind") 
    .Description.enGB.set("When you cast Sanctuary of Wind, you have a 50% chance to free yourself from any bonds or snares.")
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

const GRTESC2 = std.Spells.create("shrek6", "GRTESC2")
    .Name.enGB.set("Phase")
    .Icon.setPath("ability_blademaster_sanctuary_of_wind") 
    .Description.enGB.set("When you cast Sanctuary of Wind, you have a 100% chance to free yourself from any bonds or snares.")
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

const GRTESC_TAL = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'GRTESC_TAL', 2)
    .Position.set(3, 1)
    .Spells.set(0, GRTESC.ID)
    .Spells.set(1, GRTESC2.ID)

//console.log("GREAT ESCAPE 1: ",std.Spells.ID(GRTESC))
//console.log("GREAT ESCAPE 2: ",std.Spells.ID(GRTESC2))


// *************************************************************************
// * Subtle Strikes
// *************************************************************************
const STLSTRK = std.Spells.create("shrek6", "STLSTRK")
    .Name.enGB.set("Subtle Strikes")
    .Icon.set(539) 
    .Description.enGB.set("Your Blood Let and Swift Strike abilities have a 10% chance to apply a stack of Critical Strike which increases your Critical Strike Chance by 1% and stacks up to 5 times.")
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

const STLSTRK2 = std.Spells.create("shrek6", "STLSTRK2")
    .Name.enGB.set("Subtle Strikes")
    .Icon.set(539) 
    .Description.enGB.set("Your Blood Let and Swift Strike abilities have a 20% chance to apply a stack of Critical Strike which increases your Critical Strike Chance by 1% and stacks up to 5 times.")
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

const STLSTRK3 = std.Spells.create("shrek6", "STLSTRK3")
    .Name.enGB.set("Subtle Strikes")
    .Icon.set(539) 
    .Description.enGB.set("Your Blood Let and Swift Strike abilities have a 30% chance to apply a stack of Critical Strike which increases your Critical Strike Chance by 1% and stacks up to 5 times.")
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

const STLSTRK4 = std.Spells.create("shrek6", "STLSTRK4")
    .Name.enGB.set("Subtle Strikes")
    .Icon.set(539) 
    .Description.enGB.set("Your Blood Let and Swift Strike abilities have a 40% chance to apply a stack of Critical Strike which increases your Critical Strike Chance by 1% and stacks up to 5 times.")
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

const STLSTRK5 = std.Spells.create("shrek6", "STLSTRK5")
    .Name.enGB.set("Subtle Strikes")
    .Icon.set(539) 
    .Description.enGB.set("Your Blood Let and Swift Strike abilities have a 50% chance to apply a stack of Critical Strike which increases your Critical Strike Chance by 1% and stacks up to 5 times.")
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

const SBTLSTRK_TAL = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'SBTLSTRK_TAL', 5)
    .Position.set(1, 0)
    .Spells.set(0, STLSTRK.ID)
    .Spells.set(1, STLSTRK2.ID)
    .Spells.set(2, STLSTRK3.ID)
    .Spells.set(3, STLSTRK4.ID)
    .Spells.set(4, STLSTRK5.ID)

//console.log("SUBTLE STRIKES 1: ",std.Spells.ID(STLSTRK))
//console.log("SUBTLE STRIKES 2: ",std.Spells.ID(STLSTRK2))
//console.log("SUBTLE STRIKES 3: ",std.Spells.ID(STLSTRK3))
//console.log("SUBTLE STRIKES 4: ",std.Spells.ID(STLSTRK4))
//console.log("SUBTLE STRIKES 5: ",std.Spells.ID(STLSTRK5))

// ************************************************************************
// *  Improved Critical Strike
// ************************************************************************
const IMPCRIT = std.Spells.create("shrek6", "IMPCRIT")
    IMPCRIT.Name.enGB.set("Improved Critical Strike")
    .Icon.setPath("ability_criticalstrike")
    .Description.enGB.set("Increases the duration of Critical Strike by 1 sec.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Family.set(20)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(1000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPCRIT.Effects.get(0).ClassMask.setBit(20, 1)

const IMPCRIT2 = std.Spells.create("shrek6", "IMPCRIT2")
    IMPCRIT2.Name.enGB.set("Improved Critical Strike")
    .Icon.setPath("ability_criticalstrike")
    .Description.enGB.set("Increases the duration of Critical Strike by 2 sec.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Family.set(20)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(2000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPCRIT2.Effects.get(0).ClassMask.setBit(20, 1)

const IMPCRIT3 = std.Spells.create("shrek6", "IMPCRIT3")
    IMPCRIT3.Name.enGB.set("Improved Critical Strike")
    .Icon.setPath("ability_criticalstrike")
    .Description.enGB.set("Increases the duration of Critical Strike by 3 sec.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Family.set(20)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(3000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPCRIT3.Effects.get(0).ClassMask.setBit(20, 1)

const IMPCRIT4 = std.Spells.create("shrek6", "IMPCRIT4")
    IMPCRIT4.Name.enGB.set("Improved Critical Strike")
    .Icon.setPath("ability_criticalstrike")
    .Description.enGB.set("Increases the duration of Critical Strike by 4 sec.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Family.set(20)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(4000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPCRIT4.Effects.get(0).ClassMask.setBit(20, 1)

const IMPCRIT5 = std.Spells.create("shrek6", "IMPCRIT5")
    IMPCRIT5.Name.enGB.set("Improved Critical Strike")
    .Icon.setPath("ability_criticalstrike")
    .Description.enGB.set("Increases the duration of Critical Strike by 5 sec.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Family.set(20)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_FLAT_MODIFIER.set()
        .Operation.DURATION.set()
        .PointsBase.set(5000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPCRIT5.Effects.get(0).ClassMask.setBit(20, 1)

const IMPCRIT_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'IMPCRIT_TALENT', 5)
    .Position.set(2, 0)
    .Spells.set(0, IMPCRIT.ID)
    .Spells.set(1, IMPCRIT2.ID)
    .Spells.set(2, IMPCRIT3.ID)
    .Spells.set(3, IMPCRIT4.ID)
    .Spells.set(4, IMPCRIT5.ID)
    .Requirements.add(SBTLSTRK_TAL.ID, 5)




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
//console.log("CRITICAL STRIKE: ", std.Spells.ID(CHAKRA))

INCURSION.InlineScripts.OnAfterCast((incursion: { GetCaster: () => any; }) => {
    let caster = incursion.GetCaster()
    if(!caster) return
    
    let player = ToPlayer(caster)
    if(!player) return

    if(player.HasAura(81187)){
        player.CastSpell(player, 80903, true)
    }
    if(player.HasAura(81188)){
        player.CastSpell(player, 80903, true)
        player.CastSpell(player, 80903, true)
    }
    if(player.HasAura(81189)){
        player.CastSpell(player, 80903, true)
        player.CastSpell(player, 80903, true)
        player.CastSpell(player, 80903, true)
    }
})

INCURSION2.InlineScripts.OnAfterCast((incursion: { GetCaster: () => any; }) => {
    let caster = incursion.GetCaster()
    if(!caster) return
    
    let player = ToPlayer(caster)
    if(!player) return

    if(player.HasAura(81187)){
        player.CastSpell(player, 80903, true)
    }
    if(player.HasAura(81188)){
        player.CastSpell(player, 80903, true)
        player.CastSpell(player, 80903, true)
    }
    if(player.HasAura(81189)){
        player.CastSpell(player, 80903, true)
        player.CastSpell(player, 80903, true)
        player.CastSpell(player, 80903, true)
    }
})

INCURSION3.InlineScripts.OnAfterCast((incursion: { GetCaster: () => any; }) => {
    let caster = incursion.GetCaster()
    if(!caster) return
    
    let player = ToPlayer(caster)
    if(!player) return

    if(player.HasAura(81187)){
        player.CastSpell(player, 80903, true)
    }
    if(player.HasAura(81188)){
        player.CastSpell(player, 80903, true)
        player.CastSpell(player, 80903, true)
    }
    if(player.HasAura(81189)){
        player.CastSpell(player, 80903, true)
        player.CastSpell(player, 80903, true)
        player.CastSpell(player, 80903, true)
    }
})


const ELESURPRSE_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'ELESURPRSE_TALENT', 3)
    .Position.set(4, 0)
    .Spells.set(0, ELESURPRSE.ID)
    .Spells.set(1, ELESURPRSE2.ID)
    .Spells.set(2, ELESURPRSE3.ID)
    .Requirements.add(IMPCRIT_TALENT.ID, 5)




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
    .Position.set(4, 2)
    .Spells.set(0, SHTTR.ID)
    .Spells.set(1, SHTTR2.ID)
    .Spells.set(2, SHTTR3.ID)

//console.log("SHATTERING IMAGES 1: ",std.Spells.ID(SHTTR))
//console.log("SHATTERING IMAGES 2: ",std.Spells.ID(SHTTR2))
//console.log("SHATTERING IMAGES 3: ",std.Spells.ID(SHTTR3))



// *************************************************************************
// *  Sure Footing
// *************************************************************************
const SRFTNG = std.Spells.create("shrek6", "SRFTNG")
    .Family.set(22)
    .Name.enGB.set("Sure Footing")
    .Icon.setPath("Ability_rogue_fleetfooted")
    .Description.enGB.set("The speed boost of your Windwalk ability is increased by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Duration.set(21)
    .Range.set(0)
    .CastTime.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.EFFECT2.set()
        .PercentBase.set(12)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const SRFTNG2 = std.Spells.create("shrek6", "SRFTNG2")
    .Family.set(22)
    .Name.enGB.set("Sure Footing")
    .Icon.setPath("Ability_rogue_fleetfooted") //Inv_boots_wolf
    .Description.enGB.set("The speed boost of your Windwalk ability is increased by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Duration.set(21)
    .Range.set(0)
    .CastTime.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.EFFECT2.set()
        .PercentBase.set(24)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

SRFTNG.Effects.get(0).ClassMask.setBit(22, 1)
SRFTNG2.Effects.get(0).ClassMask.setBit(22, 1)

const SRFTNG_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'SRFTNG_TALENT', 2)
    .Position.set(2, 3)
    .Spells.set(0, SRFTNG.ID)
    .Spells.set(1, SRFTNG2.ID)


