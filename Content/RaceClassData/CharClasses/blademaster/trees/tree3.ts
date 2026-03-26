import { std } from "wow/wotlk";
import { BLDMSTR } from "../blademaster";
import { AbilityCategory } from "../category";
import { BLAZINGSTRIKES } from "../spells/BlazingStrikes/Blzingstrks";
import { RUIN } from "../spells/Ruin/ruin";
import { INCURSION_OBJ } from "../../../../../Classes/SpellInfo/IncursionInfo";



export const TALENT_TREE3 = std.TalentTrees.create('shrek6', 'test-talenttree-3')
    .Name.enGB.set("Mayhem")
    .ClassMask.add(BLDMSTR.Mask)
    .BackgroundImage.set('RogueCombat')
    .OrderIndex.set(2)


//*************************************************************************
// * Agile Tactician
// ************************************************************************/
const AGLTAC = std.Spells.create('shrek6', 'AGLTAC', 18697)
    .Name.enGB.set("Agile Tactician")
    .Icon.setPath("Ability_hunter_resourcefulness") //Ability_hunter_resourcefulness
    .Subtext.enGB.set("Rank 1")
    .Description.enGB.set("Raises agility by $s1%.")
AGLTAC.Effects.get(0).clear()
AGLTAC.Effects.addMod( x => x
    .Type.APPLY_AURA.set()
    .Aura.MOD_TOTAL_STAT_PERCENTAGE.set()
    .Stat.AGILITY.set()
    .PercentBase.set(1)
    .ImplicitTargetA.UNIT_CASTER.set()
)

const AGLTAC2 = std.Spells.create('shrek6', 'AGLTAC2', 18697)
    .Name.enGB.set("Agile Tactician")
    .Icon.setPath("Ability_hunter_resourcefulness")
    .Subtext.enGB.set("Rank 1")
    .Description.enGB.set("Raises agility by $s1%.")
AGLTAC2.Effects.get(0).clear()
AGLTAC2.Effects.addMod( x => x
    .Type.APPLY_AURA.set()
    .Aura.MOD_TOTAL_STAT_PERCENTAGE.set()
    .Stat.AGILITY.set()
    .PercentBase.set(3)
    .ImplicitTargetA.UNIT_CASTER.set()
)

const AGLTAC3 = std.Spells.create('shrek6', 'AGLTAC3', 18697)
    .Name.enGB.set("Agile Tactician")
    .Icon.setPath("Ability_hunter_resourcefulness")
    .Subtext.enGB.set("Rank 1")
    .Description.enGB.set("Raises agility by $s1%.")
AGLTAC3.Effects.get(0).clear()
AGLTAC3.Effects.addMod( x => x
    .Type.APPLY_AURA.set()
    .Aura.MOD_TOTAL_STAT_PERCENTAGE.set()
    .Stat.AGILITY.set()
    .PercentBase.set(5)
    .ImplicitTargetA.UNIT_CASTER.set()
)

const AGLTAC4 = std.Spells.create('shrek6', 'AGLTAC4', 18697)
    .Name.enGB.set("Agile Tactician")
    .Icon.setPath("Ability_hunter_resourcefulness")
    .Subtext.enGB.set("Rank 1")
    .Description.enGB.set("Raises agility by $s1%.")
AGLTAC4.Effects.get(0).clear()
AGLTAC4.Effects.addMod( x => x
    .Type.APPLY_AURA.set()
    .Aura.MOD_TOTAL_STAT_PERCENTAGE.set()
    .Stat.AGILITY.set()
    .PercentBase.set(7)
    .ImplicitTargetA.UNIT_CASTER.set()
)

const AGLTAC5 = std.Spells.create('shrek6', 'AGLTAC5', 18697)
    .Name.enGB.set("Agile Tactician")
    .Icon.setPath("Ability_hunter_resourcefulness")
    .Subtext.enGB.set("Rank 1")
    .Description.enGB.set("Raises agility by $s1%.")
AGLTAC5.Effects.get(0).clear()
AGLTAC5.Effects.addMod( x => x
    .Type.APPLY_AURA.set()
    .Aura.MOD_TOTAL_STAT_PERCENTAGE.set()
    .Stat.AGILITY.set()
    .PercentBase.set(9)
    .ImplicitTargetA.UNIT_CASTER.set()
)

const AGLTAC_TALENT = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'AGLTAC_TALENT', 5)
    .Position.set(0, 2)
    .Spells.set(0, AGLTAC.ID)
    .Spells.set(1, AGLTAC2.ID)
    .Spells.set(2, AGLTAC3.ID)
    .Spells.set(3, AGLTAC4.ID)
    .Spells.set(4, AGLTAC5.ID)



// ************************************************************************
// * Blood Spilling
// ************************************************************************
const BLOODSPILL = std.Spells.create("shrek6", "BLOODSPILL")
BLOODSPILL.Name.enGB.set("Blood Spilling")
    .Icon.setPath("Spell_nature_bloodlust")
    .Description.enGB.set("Increases the damage of Fatality by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Family.set(20)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.DAMAGE.set()
        .PercentBase.set(2) //3%
        .ImplicitTargetA.UNIT_CASTER.set()
    )
BLOODSPILL.Effects.get(0).ClassMask.setBit(21, 1)

const BLOODSPILL2 = std.Spells.create("shrek6", "BLOODSPILL2")
BLOODSPILL2.Name.enGB.set("Blood Spilling")
    .Icon.setPath("Spell_nature_bloodlust")
    .Description.enGB.set("Increases the damage of Fatality by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Family.set(20)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.DAMAGE.set()
        .PercentBase.set(5) //6%
        .ImplicitTargetA.UNIT_CASTER.set()
    )
BLOODSPILL2.Effects.get(0).ClassMask.setBit(21, 1)

const BLOODSPILL3 = std.Spells.create("shrek6", "BLOODSPILL3")
BLOODSPILL3.Name.enGB.set("Blood Spilling")
    .Icon.setPath("Spell_nature_bloodlust")
    .Description.enGB.set("Increases the damage of Fatality by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Family.set(20)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.DAMAGE.set()
        .PercentBase.set(8) //9%
        .ImplicitTargetA.UNIT_CASTER.set()
    )
BLOODSPILL3.Effects.get(0).ClassMask.setBit(21, 1)

const BLOODSPILL4 = std.Spells.create("shrek6", "BLOODSPILL4")
BLOODSPILL4.Name.enGB.set("Blood Spilling")
    .Icon.setPath("Spell_nature_bloodlust")
    .Description.enGB.set("Increases the damage of Fatality by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Family.set(20)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.DAMAGE.set()
        .PercentBase.set(11) //12%
        .ImplicitTargetA.UNIT_CASTER.set()
    )
BLOODSPILL4.Effects.get(0).ClassMask.setBit(21, 1)

const BLOODSPILL5 = std.Spells.create("shrek6", "BLOODSPILL5")
BLOODSPILL5.Name.enGB.set("Blood Spilling")
    .Icon.setPath("Spell_nature_bloodlust")
    .Description.enGB.set("Increases the damage of Fatality by $s1%.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Family.set(20)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.DAMAGE.set()
        .PercentBase.set(14) //15%
        .ImplicitTargetA.UNIT_CASTER.set()
    )
BLOODSPILL5.Effects.get(0).ClassMask.setBit(21, 1)


const BLOODSPILL_TALENT = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'BLOODSPILL_TALENT', 5)
    .Position.set(5, 1)
    .Spells.set(0, BLOODSPILL.ID)
    .Spells.set(1, BLOODSPILL2.ID)
    .Spells.set(2, BLOODSPILL3.ID)
    .Spells.set(3, BLOODSPILL4.ID)
    .Spells.set(4, BLOODSPILL5.ID)


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
    .Position.set(1, 2)
    .Spells.set(0, DSCMBB.ID)
    .Spells.set(1, DSCMBB2.ID)
    .Spells.set(2, DSCMBB3.ID)
    .Spells.set(3, DSCMBB4.ID)
    .Spells.set(4, DSCMBB5.ID)


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
    .Position.set(1, 1)
    .Spells.set(0, EXPWNDS.ID)
    .Spells.set(1, EXPWNDS2.ID)
    .Spells.set(2, EXPWNDS3.ID)
    .Spells.set(3, EXPWNDS4.ID)
    .Spells.set(4, EXPWNDS5.ID)
    



//*************************************************************************
// * BLAZING STRIKES
// ************************************************************************/
const BLZINGSTRKS_TALENT = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'BLZINGSTRKS_TALENT', 1)
    .Position.set(6, 1) 
    .Spells.set(0, BLAZINGSTRIKES.ID)




// *************************************************************************
// * Flurry
// ************************************************************************/
//RANK 1
const CRASHOUTEFFECT = std.Spells.create("shrek6", "crashout-effect", 12966)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 1")
CRASHOUTEFFECT.Effects.get(0).PointsBase.set(4)//5

const CRASHOUT = std.Spells.create("shrek6", "crashout", 12319)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 1")
    .Description.enGB.set("When you critical strike, you gain 5% increased attack speed for your next 3 attacks.")
CRASHOUT.Effects.get(0).TriggerSpell.set(CRASHOUTEFFECT.ID)

//RANK 2
const CRASHOUTEFFECT2 = std.Spells.create("shrek6", "crashout-effect2", 12966)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 2")
CRASHOUTEFFECT2.Effects.get(0).PointsBase.set(9)//10

const CRASHOUT2 = std.Spells.create("shrek6", "crashout2", 12319)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 2")
    .Description.enGB.set("When you critical strike, you gain 10% increased attack speed for your next 3 attacks.")
CRASHOUT2.Effects.get(0).TriggerSpell.set(CRASHOUTEFFECT2.ID)

//RANK 3
const CRASHOUTEFFECT3 = std.Spells.create("shrek6", "crashout-effect3", 12966)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 3")
CRASHOUTEFFECT3.Effects.get(0).PointsBase.set(14)//15

const CRASHOUT3 = std.Spells.create("shrek6", "crashout3", 12319)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 3")
    .Description.enGB.set("When you critical strike, you gain 15% increased attack speed for your next 3 attacks.")
CRASHOUT3.Effects.get(0).TriggerSpell.set(CRASHOUTEFFECT3.ID)


//RANK 4
const CRASHOUTEFFECT4 = std.Spells.create("shrek6", "crashout-effect4", 12966)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 4")
CRASHOUTEFFECT4.Effects.get(0).PointsBase.set(19)//20

const CRASHOUT4 = std.Spells.create("shrek6", "crashout4", 12319)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 4")
    .Description.enGB.set("When you critical strike, you gain 20% increased attack speed for your next 3 attacks.")
CRASHOUT4.Effects.get(0).TriggerSpell.set(CRASHOUTEFFECT4.ID)

//RANK 5
const CRASHOUTEFFECT5 = std.Spells.create("shrek6", "crashout-effect5", 12966)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 5")
CRASHOUTEFFECT5.Effects.get(0).PointsBase.set(24)//25

const CRASHOUT5 = std.Spells.create("shrek6", "crashout5", 12319)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 5")
    .Description.enGB.set("When you critical strike, you gain 25% increased attack speed for your next 3 attacks.")
CRASHOUT5.Effects.get(0).TriggerSpell.set(CRASHOUTEFFECT5.ID)

const CRSHOUT_TALENT = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'crashout-talent', 5)
    .Position.set(2, 0)
    .Spells.set(0, CRASHOUT.ID)
    .Spells.set(1, CRASHOUT2.ID)
    .Spells.set(2, CRASHOUT3.ID)
    .Spells.set(3, CRASHOUT4.ID)
    .Spells.set(4, CRASHOUT5.ID)



//console.log(std.Spells.load(81263).objectify())
// *************************************************************************
// * Obliteration
// *************************************************************************
const BLDBATH = std.Spells.create("shrek6", "BLDBATH", 16493)
    .Name.enGB.set("Obliteration")
    .Icon.setPath("Spell_shadow_deathscream") //ability_unspecified_lmao Spell_shadow_deathscream
BLDBATH.Effects.get(0).PointsBase.set(3)

const BLDBATH2 = std.Spells.create("shrek6", "BLDBATH2", 16493)
    .Name.enGB.set("Obliteration")
    .Icon.setPath("Spell_shadow_deathscream")
BLDBATH2.Effects.get(0).PointsBase.set(7)

const BLDBATH3 = std.Spells.create("shrek6", "BLDBATH3", 16493)
    .Name.enGB.set("Obliteration")
    .Icon.setPath("Spell_shadow_deathscream")
BLDBATH3.Effects.get(0).PointsBase.set(11)

const BLDBATH4 = std.Spells.create("shrek6", "BLDBATH4", 16493)
    .Name.enGB.set("Obliteration")
    .Icon.setPath("Spell_shadow_deathscream")
BLDBATH4.Effects.get(0).PointsBase.set(15)

const BLDBATH5 = std.Spells.create("shrek6", "BLDBATH5", 16493)
    .Name.enGB.set("Obliteration")
    .Icon.setPath("Spell_shadow_deathscream") //Spell_nature_agitatingtotem
BLDBATH5.Effects.get(0).PointsBase.set(19)

const BLDBATH_TALENT = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'BLDBATH_TALENT', 5)
    .Position.set(3, 2)
    .Spells.set(0, BLDBATH.ID)
    .Spells.set(1, BLDBATH2.ID)
    .Spells.set(2, BLDBATH3.ID)
    .Spells.set(3, BLDBATH4.ID)
    .Spells.set(4, BLDBATH5.ID)



//*************************************************************************
// * Thrashing
// ************************************************************************/
const THRASH = std.Spells.load(3417) //10% chance
//console.log(std.Spells.load(THRASH.ID).Proc.Chance.get())

const TRSHING = std.Spells.create("shrek6", "TRSHING", THRASH.ID)
TRSHING.Proc.Chance.set(2)
TRSHING.Name.enGB.set("Thrash")
TRSHING.Description.enGB.set("Adds a 3% chance to do two extra attacks.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)

const TRSHING2 = std.Spells.create("shrek6", "TRSHING2", THRASH.ID)
TRSHING2.Proc.Chance.set(5)
TRSHING2.Name.enGB.set("Thrash")
TRSHING2.Description.enGB.set("Adds a 6% chance to do two extra attacks.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)

const TRSHING3 = std.Spells.create("shrek6", "TRSHING3", THRASH.ID)
TRSHING3.Proc.Chance.set(8)
TRSHING3.Name.enGB.set("Thrash")
TRSHING3.Description.enGB.set("Adds a 9% chance to do two extra attacks.")
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)


const THRSHING_TALENT = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'THRSHING_TALENT', 3)
    .Position.set(5, 0)
    .Spells.set(0, TRSHING.ID)
    .Spells.set(1, TRSHING2.ID)
    .Spells.set(2, TRSHING3.ID)




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


//*************************************************************************
// * Mercilessness
// ************************************************************************/
const RUSHBTL = std.Spells.create('shrek6', 'RUSHBTL')
    .Name.enGB.set("Mercilessness")
    .Icon.setPath("Ability_racial_avatar")
    .Subtext.enGB.set("Passive")
    .Description.enGB.set("When you use Fatality or Pierce, you are refunded 10 rage.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .SkillLines.add(AbilityCategory.Emp.getSkill())

//console.log(std.Spells.ID(RUSHBTL))

const RUSHBTL_TAL = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'RUSHBTL_TAL', 1)
    .Position.set(2, 1)
    .Spells.set(0, RUSHBTL.ID)


//*************************************************************************
// * Harnessed Destruction
// ************************************************************************/
const PCMND_TRIGGER_ENERGIZE = std.Spells.create("shrek6", "PCMND_TRIGGER_ENERGIZE")
    .Name.enGB.set("Harnessed Destruction")
    .Icon.setPath("Ability_rogue_bloodyeye")
    .Range.set(0)
    .Duration.set(0)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Effects.addMod(x => x
        .Type.ENERGIZE_PCT.set()
        .PowerType.RAGE.set()
        .PowerPctBase.set(0)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const PCMND_TRIGGER_ENERGIZE2 = std.Spells.create("shrek6", "PCMND_TRIGGER_ENERGIZE2")
    .Name.enGB.set("Harnessed Destruction")
    .Icon.setPath("Ability_rogue_bloodyeye")
    .Range.set(0)
    .Duration.set(0)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Effects.addMod(x => x
        .Type.ENERGIZE_PCT.set()
        .PowerType.RAGE.set()
        .PowerPctBase.set(1)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const PCMND = std.Spells.create('shrek6', 'PCMND')
    .Name.enGB.set("Harnessed Destruction")
    .Icon.setPath("Ability_rogue_bloodyeye")
    .Description.enGB.set("Passively generate 1 additional rage every 3 sec.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_TRIGGER_SPELL.set()
        .TriggerSpell.set(PCMND_TRIGGER_ENERGIZE.ID)
        .AuraPeriod.set(3000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const PCMND2 = std.Spells.create('shrek6', 'PCMND2')
    .Name.enGB.set("Harnessed Destruction")
    .Icon.setPath("Ability_rogue_bloodyeye")
    .Description.enGB.set("Passively generate 2 additional rage every 3 sec.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_TRIGGER_SPELL.set()
        .TriggerSpell.set(PCMND_TRIGGER_ENERGIZE2.ID)
        .AuraPeriod.set(3000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

//console.log(std.Spells.ID(PCMND))

const PCMND_TAL = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'PCMND_TAL', 2)
    .Position.set(2, 3)
    .Spells.set(0, PCMND.ID)
    .Spells.set(1, PCMND2.ID)



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




// ************************************************************************
// * Ruin
// ************************************************************************
const DLW_TAL = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'DLW_TAL', 1)
    .Position.set(4, 1)
    .Spells.set(0, RUIN.ID)
    .Requirements.add(RUSHBTL_TAL.ID, 1)