import { std } from "wow/wotlk";
import { BLDMSTR } from "../blademaster";
import { SHOCKB } from "../spells/shockBlade/shock-blade";
import { MEDCNTR } from "../spells/Counter/med-counter";
import { SCNDWND, SCNDWND_ENERGIZE } from "../spells/SecondWind/secondwind";
import { QUELLING_PALM } from "../spells/QuellingPalm/quellingPalm";

const TALENT_TREE1 = std.TalentTrees.create('shrek6', 'test-talenttree-1')
    .Name.enGB.set("Cyclone")
    .ClassMask.add(BLDMSTR.Mask)
    .BackgroundImage.set('ShamanEnhancement')
    .OrderIndex.set(0)


//*************************************************************************
// * Deflection
// ************************************************************************/
const DEFLECTION_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'deflection-talent', 5)
    .Position.set(1, 2)
    .Spells.set(0, 16462)
    .Spells.set(1, 16463)
    .Spells.set(2, 16464)
    .Spells.set(3, 16465)
    .Spells.set(4, 16466)



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



//*************************************************************************
// * Weapon Arts
// ************************************************************************/
const RNGF = std.Spells.create('shrek6', 'rngf', 14983)
    .Name.enGB.set("Weapon Arts")
    .Icon.setPath("Inv_weapon_halberd_02")
    .Subtext.enGB.set("Rank 1")
    .Description.enGB.set("Increases your Expertise by $s1.")
    .CastTime.setSimple(0)
    .Range.set(0)
RNGF.Effects.get(0)
    .Aura.MOD_EXPERTISE.set()
    .PointsBase.set(1)

//console.log(RNGF.objectify())

const RNGF2 = std.Spells.create('shrek6', 'rngf2', 14983)
    .Name.enGB.set("Weapon Arts")
    .Icon.setPath("Inv_weapon_halberd_02")
    .Subtext.enGB.set("Rank 2")
    .Description.enGB.set("Increases your Expertise by $s1.")
    .CastTime.setSimple(0)
    .Range.set(0)
    .Power.Type.ENERGY.set()
    .Attributes.IS_PASSIVE.set(1)
RNGF2.Effects.get(0)
    .Aura.MOD_EXPERTISE.set()
    .PointsBase.set(3)


const RNGF3 = std.Spells.create('shrek6', 'rngf3',14983)
    .Name.enGB.set("Weapon Arts")
    .Icon.setPath("Inv_weapon_halberd_02")
    .Subtext.enGB.set("Rank 3")
    .Description.enGB.set("Increases your Expertise by $s1.")
    .CastTime.setSimple(0)
    .Range.set(0)
    .Power.Type.ENERGY.set()
    .Attributes.IS_PASSIVE.set(1)
RNGF3.Effects.get(0)
    .Aura.MOD_EXPERTISE.set()
    .PointsBase.set(5)

const RNGF4 = std.Spells.create('shrek6', 'rngf4',14983)
    .Name.enGB.set("Weapon Arts")
    .Icon.setPath("Inv_weapon_halberd_02")
    .Subtext.enGB.set("Rank 4")
    .Description.enGB.set("Increases your Expertise by $s1.")
    .CastTime.setSimple(0)
    .Range.set(0)
    .Power.Type.ENERGY.set()
    .Attributes.IS_PASSIVE.set(1)
RNGF4.Effects.get(0)
    .Aura.MOD_EXPERTISE.set()
    .PointsBase.set(7)


const RNGF5 = std.Spells.create('shrek6', 'rngf5',14983)
    .Name.enGB.set("Weapon Arts")
    .Icon.setPath("Inv_weapon_halberd_02")
    .Subtext.enGB.set("Rank 5")
    .Description.enGB.set("Increases your Expertise by $s1.")
    .CastTime.setSimple(0)
    .Range.set(0)
    .Power.Type.ENERGY.set()
    .Attributes.IS_PASSIVE.set(1)
RNGF5.Effects.get(0)
    .Aura.MOD_EXPERTISE.set()
    .PointsBase.set(9)


export const RING_FIGHTING_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'ring-fighting-talent', 5)
    .Position.set(0, 1)
    .Spells.set(0, RNGF.ID)
    .Spells.set(1, RNGF2.ID)
    .Spells.set(2, RNGF3.ID)
    .Spells.set(3, RNGF4.ID)
    .Spells.set(4, RNGF5.ID)
 
//console.log(IMPSINISTERSTRIKE.objectify())
//console.log(std.Spells.load(14983).objectify())
//console.log(std.Spells.ID(RNGF2))
//console.log(std.Spells.ID(RNGF3))
//console.log(std.Spells.ID(RNGF4))
//console.log(std.Spells.ID(RNGF5))
//console.log("Energizers:")
//console.log(std.Spells.ID(RNGF_ENERGIZE))
//console.log(std.Spells.ID(RNGF_ENERGIZE2))
//console.log(std.Spells.ID(RNGF_ENERGIZE3))
//console.log(std.Spells.ID(RNGF_ENERGIZE4))
//console.log(std.Spells.ID(RNGF_ENERGIZE5))
//console.log(IMPSINISTERSTRIKE.Family.get())
//console.log(SWFTSTK.Mask)





//*************************************************************************
//* Blademaster's Will  
// ************************************************************************/
const DEMEMB = std.Spells.load(18697)

const BLMW = std.Spells.create('shrek6', 'blmw', 18697)
    .Name.enGB.set("Blademaster's Will")
    .Icon.setPath("spell_nature_shamanrage")
    .Subtext.enGB.set("Rank 1")
    .Description.enGB.set("Increases your stamina by $s1%.")
    BLMW.Effects.get(0).PointsBase.set(1)//2

const BLMW2 = std.Spells.create('shrek6', 'blmw2', 18697)
    .Name.enGB.set("Blademaster's Will")
    .Icon.setPath("spell_nature_shamanrage")
    .Subtext.enGB.set("Rank 2")
    .Description.enGB.set("Increases your stamina by $s1%.")
    BLMW2.Effects.get(0).PointsBase.set(3)//4

const BLMW3 = std.Spells.create('shrek6', 'blmw3', 18697)
    .Name.enGB.set("Blademaster's Will")
    .Icon.setPath("spell_nature_shamanrage")
    .Subtext.enGB.set("Rank 3")
    .Description.enGB.set("Increases your stamina by $s1%.")
    .Power.Type.ENERGY.set()
    BLMW3.Effects.get(0).PointsBase.set(5)//6

const BLMW4 = std.Spells.create('shrek6', 'blmw4', 18697)
    .Name.enGB.set("Blademaster's Will")
    .Icon.setPath("spell_nature_shamanrage")
    .Subtext.enGB.set("Rank 4")
    .Description.enGB.set("Increases your stamina by $s1%.")
    .Power.Type.ENERGY.set()
    BLMW4.Effects.get(0).PointsBase.set(7) //8

const BLMW5 = std.Spells.create('shrek6', 'blmw5', 18697)
    .Name.enGB.set("Blademaster's Will")
    .Icon.setPath("spell_nature_shamanrage")
    .Subtext.enGB.set("Rank 5")
    .Description.enGB.set("Increases your stamina by $s1%.")
    .Power.Type.ENERGY.set()
    BLMW5.Effects.get(0).PointsBase.set(9) //10

const BLMW_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'blmw-talent', 5)
    .Position.set(0, 2)
    .Spells.set(0, BLMW.ID)
    .Spells.set(1, BLMW2.ID)
    .Spells.set(2, BLMW3.ID)
    .Spells.set(3, BLMW4.ID)
    .Spells.set(4, BLMW5.ID)
    .Requirements.forEach(x=>x
        .Talent.set(5)
    )

//console.log(std.Spells.load(18697).objectify())





//*************************************************************************
// * Mental Gymnastics
// ************************************************************************/
const IRONWILL = std.Spells.create("shrek6", "IRONWILL", 12300)
    .Name.enGB.set("Mental Gymnastics")
    .Icon.setPath("Spell_nature_mentalquickness")//Spell_nature_mentalquickness

const IRONWILL2 = std.Spells.create("shrek6", "IRONWILL2", 12959)
    .Name.enGB.set("Mental Gymnastics")
    .Icon.setPath("Spell_nature_mentalquickness") 

const IRONWILL3 = std.Spells.create("shrek6", "IRONWILL3", 12960)
    .Name.enGB.set("Mental Gymnastics")
    .Icon.setPath("Spell_nature_mentalquickness") 


const IRONWILL_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'IRONWILL_TALENT', 3)
    .Position.set(2, 3)
    .Spells.set(0, IRONWILL.ID)
    .Spells.set(1, IRONWILL2.ID)
    .Spells.set(2, IRONWILL3.ID)

//console.log(std.Spells.load(55848).Icon.get())
//console.log(AWKNING_SPELL.objectify()


//*************************************************************************
// * PRECISION
// ************************************************************************/
const PRECISION_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'PRECISION_TALENT', 3)
    .Position.set(3, 2)
    .Spells.set(0, 29590)
    .Spells.set(1, 29591)
    .Spells.set(2, 29592)

    
    
//console.log(std.Spells.load(14165).objectify())


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
    
//console.log(std.Spells.ID(IMP_BLDSTRM))
//console.log(std.Spells.ID(IMP_BLDSTRM_DEFLECT))

//console.log(std.Spells.ID(IMP_BLDSTRM2))
//console.log(std.Spells.ID(IMP_BLDSTRM_DEFLECT2))

//console.log(std.Spells.ID(IMP_BLDSTRM3))
//console.log(std.Spells.ID(IMP_BLDSTRM_DEFLECT3))



//*************************************************************************
//* Piercing
//*************************************************************************
const POLSPEC = std.Spells.create('shrek6', 'POLSPEC') 
    .Name.enGB.set("Piercing")
    .Subtext.enGB.set("Talent")
    .Icon.setPath("Inv_spear_04")
    .Description.enGB.set("Chance to Critical Strike is increased by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    //.ItemEquips.Class.set(2)
    //.ItemEquips.Subclass.set(200)
POLSPEC.Effects.clearAll()
POLSPEC.Effects.addMod(x => x
    .Type.APPLY_AURA.set()
    .Aura.MOD_CRIT_PCT.set()
    .PercentBase.set(0)
)

const POLSPEC2 = std.Spells.create('shrek6', 'POLSPEC2')
    .Name.enGB.set("Piercing")
    .Subtext.enGB.set("Talent")
    .Icon.setPath("Inv_spear_04")
    .Description.enGB.set("Chance to Critical Strike is increased by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    //.ItemEquips.Class.set(2)
    //.ItemEquips.Subclass.set(200)
POLSPEC2.Effects.clearAll()
POLSPEC2.Effects.addMod(x => x
    .Type.APPLY_AURA.set()
    .Aura.MOD_CRIT_PCT.set()
    .PercentBase.set(1)
)

const POLSPEC3 = std.Spells.create('shrek6', 'POLSPEC3')
    .Name.enGB.set("Piercing")
    .Subtext.enGB.set("Talent")
    .Icon.setPath("Inv_spear_04")
    .Description.enGB.set("Chance to Critical Strike is increased by $s1%.")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    //.ItemEquips.Class.set(2)
    //.ItemEquips.Subclass.set(200)
POLSPEC3.Effects.clearAll()
POLSPEC3.Effects.addMod(x => x
    .Type.APPLY_AURA.set()
    .Aura.MOD_CRIT_PCT.set()
    .PercentBase.set(2)
)

const POLSPEC_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'POLSPEC_TALENT', 3)
    .Position.set(3, 1)
    .Spells.set(0, POLSPEC.ID)
    .Spells.set(1, POLSPEC2.ID)
    .Spells.set(2, POLSPEC3.ID)




//*************************************************************************
// * Level 20 Spell Talent - Meditation: Counter
// ************************************************************************/
const MEDCNTR_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'MEDCNTR_TALENT', 1)
    .Position.set(2, 0)
    .Spells.set(0, MEDCNTR.ID)



//*************************************************************************
//* Level 40 Spell Talent - Shock Blade
// ************************************************************************/
const SHCKBLD = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'SHCKBLD-talent', 1)
    .Position.set(6, 1)
    .Spells.set(0, SHOCKB.ID)




//*************************************************************************
// * Level 30 Spell Talent - Second Wind
// ************************************************************************/
const SCNDWND_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'SCNDWND_TALENT', 1)
    .Position.set(4, 1)
    .Spells.set(0, SCNDWND.ID)


    

//*************************************************************************
//* Improved Second Wind
// ************************************************************************/
const IMP_SCNDWND_ATKPOWER = std.Spells.create('shrek6', 'IMP_SCNDWND_HEAL')
    .Name.enGB.set("Second Wind")
    .Icon.setPath("Spell_nature_reincarnation")
    .AuraDescription.enGB.set("Increases your attack power by $s1%.")
    .Range.set(0)
    .Duration.setSimple(3000)
    //.Attributes.IS_HIDDEN_FROM_LOG.set(1)
    //.Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_ATTACK_POWER_PCT.set()
        .PercentBase.set(1)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const IMP_SCNDWND = std.Spells.create('shrek6', 'IMP_SCNDWND')
    .Name.enGB.set("Improved Second Wind")
    .Icon.setPath("Spell_nature_reincarnation")
    .Description.enGB.set("Second Wind now increases your attack power by 2%.")
    .Range.set(0)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const IMP_SCNDWND_ATKPOWER2 = std.Spells.create('shrek6', 'IMP_SCNDWND_HEAL2')
    .Name.enGB.set("Second Wind")
    .Icon.setPath("Spell_nature_reincarnation")
    .AuraDescription.enGB.set("Increases your attack power by $s1%.")
    .Range.set(0)
    .Duration.setSimple(3000)
    //.Attributes.IS_HIDDEN_FROM_LOG.set(1)
    //.Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_ATTACK_POWER_PCT.set()
        .PercentBase.set(3)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

const IMP_SCNDWND2 = std.Spells.create('shrek6', 'IMP_SCNDWND2')
    .Name.enGB.set("Improved Second Wind")
    .Icon.setPath("Spell_nature_reincarnation")
    .Description.enGB.set("Second Wind now increases your attack power by 4%.")
    .Range.set(0)
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )

//console.log("IMPROVED SECONDWIND: ",std.Spells.ID(IMP_SCNDWND))
//console.log("SECOND WIND HEAL (ATTACK POWER BUFF)",std.Spells.ID(IMP_SCNDWND_HEAL))
//console.log("IMPROVED SECONDWIND 2: ",std.Spells.ID(IMP_SCNDWND2))
//console.log("SECOND WIND HEAL 2 (ATTACK POWER BUFF 2)",std.Spells.ID(IMP_SCNDWND_HEAL2))

SCNDWND_ENERGIZE.InlineScripts.OnAfterCast((spell) => {
    let caster = spell.GetCaster()
    if(!caster) return

    let player = ToPlayer(caster)
    if(!player) return

    if(player.HasAura(81102)){
        player.CastSpell(player, 81101, true)
    }

    if(player.HasAura(81104)){
        player.CastSpell(player, 81103, true)
    }
})

const IMP_SCNDWND_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'IMP_SCNDWND_TALENT', 2)
    .Position.set(5, 1)
    .Spells.set(0, IMP_SCNDWND.ID)
    .Spells.set(1, IMP_SCNDWND2.ID)
    .Requirements.add(SCNDWND_TALENT.ID, 1)


// *************************************************************************
// * Clutch
// *************************************************************************
const DTHGRSP = std.Spells.create("shrek6", "DTHGRSP", 26022)
    .Name.enGB.set("Clutch")
    .Description.enGB.set("Reduces the duration of all Disarm effects on you by $s3%.")
    .Icon.setPath("Spell_nature_undyingstrength")
DTHGRSP.Effects.get(0).clear()

const DTHGRSP2 = std.Spells.create("shrek6", "DTHGRSP2", 26022)
    .Name.enGB.set("Clutch")
    .Description.enGB.set("Reduces the duration of all Disarm effects on you by $s3%.")
    .Icon.setPath("Spell_nature_undyingstrength")
DTHGRSP2.Effects.get(2).PointsBase.set(49)
DTHGRSP2.Effects.get(0).clear()

const DTHGRIP_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'DTHGRIP_TALENT', 2)
    .Position.set(2, 1)
    .Spells.set(0, DTHGRSP.ID)
    .Spells.set(1, DTHGRSP2.ID)
    

// *************************************************************************
// * Improved Counter
// *************************************************************************
const IMPCNTR = std.Spells.create("shrek6", "IMPCNTR")
    .Family.set(33)
    .Name.enGB.set("Improved Counter Strikes")
    .Description.enGB.set("Increases the damage of your counter strikes by $s1%.")
    .Icon.setPath("Ability_rogue_shadowstrikes")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.DAMAGE.set()
        .PercentBase.set(24)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPCNTR.Effects.get(0).ClassMask.setBit(33, 1)

const IMPCNTR2 = std.Spells.create("shrek6", "IMPCNTR2")
    .Family.set(33)
    .Name.enGB.set("Improved Counter Strikes")
    .Description.enGB.set("Increases the damage of your counter strikes by $s1%.")
    .Icon.setPath("Ability_rogue_shadowstrikes")
    .Attributes.IS_PASSIVE.set(1)
    .Attributes.IS_HIDDEN_FROM_LOG.set(1)
    .Attributes.IS_HIDDEN_IN_SPELLBOOK.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.ADD_PCT_MODIFIER.set()
        .Operation.DAMAGE.set()
        .PercentBase.set(49)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
IMPCNTR2.Effects.get(0).ClassMask.setBit(33, 1)

const IMPCNTR_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'IMPCNTR_TALENT', 2)
    .Position.set(4, 0)
    .Spells.set(0, IMPCNTR.ID)
    .Spells.set(1, IMPCNTR2.ID)
    .Requirements.add(MEDCNTR_TALENT.ID, 1)


// *************************************************************************
// * Improved Quelling Palm
// *************************************************************************
const IMPQLING = std.Spells.create('shrek6', 'IMPQLING')
    .Family.set(67)
    .Name.enGB.set('Improved Quelling Palm')
    .Description.enGB.set("Quelling Palm now silences the target for 1 sec.")
    .Icon.set(QUELLING_PALM.Icon.get())
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
IMPQLING.Effects.get(0).ClassMask.setBit(67, 1)

const IMPQLING2 = std.Spells.create('shrek6', 'IMPQLING2')
    .Family.set(67)
    .Name.enGB.set('Improved Quelling Palm')
    .Description.enGB.set("Quelling Palm now silences the target for 2 sec.")
    .Icon.set(QUELLING_PALM.Icon.get())
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
IMPQLING2.Effects.get(1).ClassMask.setBit(67, 1)

const IMPQLING_TALENT = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'IMPQLING_TALENT', 2)
    .Position.set(3, 3)
    .Spells.set(0, IMPQLING.ID)
    .Spells.set(1, IMPQLING2.ID)