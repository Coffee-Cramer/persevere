import { DBC, std } from "wow/wotlk";
import { NECRO } from "../necro";

//console.log(std.Spells.load(688).objectify())
//console.log(std.CreatureTemplates.load(416).objectify())

//skill line
const GHOULSKLLINE = std.SkillLines.create('shrek6', 'petBoneGolemSkillline', 204)
    .Name.enGB.set("Pet - Ghoul")





//spell
const GHOUL_FEED1 = std.Spells.create('shrek6', 'GHOUL_FEED1')
    .Name.enGB.set("Feed")
    .Subtext.enGB.set("Rank 1")
    .Icon.setPath('ability_racial_cannibalize')
    .Description.enGB.set("Deals $s1 physical damage to the target and heals $s2% of the ghoul and the necromancer's health.")
    .CastTime.setSimple(0)
    .Range.set(2)
    .DefenseType.set(2)
    .SchoolMask.setBit(0, 1)
    .Cooldown.Time.set(8000)
    .Visual.set(372)
    .SchoolMask.setBit(0, 1) //physical
    .Effects.addMod(x => x
        .Type.SCHOOL_DAMAGE.set()
        .DamageBase.set(15)
        .DamageDieSides.set(7)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .Effects.addMod(x => x
        .Type.HEAL_PCT.set()
        .HealPctBase.set(2)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x => x
        .Type.HEAL_PCT.set()
        .HealPctBase.set(2)
        .ImplicitTargetA.UNIT_MASTER.set()
    )
    .SkillLines.add(GHOULSKLLINE.ID)
    .Levels.Base.set(10)
    .Levels.Max.set(16) //replaced by rank 2
    .Levels.Spell.set(10)
GHOUL_FEED1.Rank.set(GHOUL_FEED1.ID, 1)

const GHOUL_FEED2 = std.Spells.create('shrek6', 'GHOUL_FEED2')
    .Name.enGB.set("Feed")
    .Subtext.enGB.set("Rank 2")
    .Icon.setPath('ability_racial_cannibalize')
    .Description.enGB.set("Deals $s1 physical damage to the target and heals $s2% of the ghoul and the necromancer's health.")
    .CastTime.setSimple(0)
    .Range.set(2)
    .DefenseType.set(2)
    .SchoolMask.setBit(0, 1)
    .Cooldown.Time.set(8000)
    .Visual.set(372)
    .SchoolMask.setBit(0, 1) //physical
    .Effects.addMod(x => x
        .Type.SCHOOL_DAMAGE.set()
        .DamageBase.set(21)
        .DamageDieSides.set(15)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .Effects.addMod(x => x
        .Type.HEAL_PCT.set()
        .HealPctBase.set(2)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x => x
        .Type.HEAL_PCT.set()
        .HealPctBase.set(2)
        .ImplicitTargetA.UNIT_MASTER.set()
    )
    .SkillLines.add(GHOULSKLLINE.ID)
    .Levels.Base.set(16)
    .Levels.Max.set(60)
    .Levels.Spell.set(16)
GHOUL_FEED2.Rank.set(GHOUL_FEED1.ID, 2)





//family
const GHOUL_NECRO_FAMILY = DBC.CreatureFamily.add(47)
    .MinScale.set(2)
    .MinScaleLevel.set(1)
    .MaxScale.set(2)
    .MaxScaleLevel.set(60)
    .PetFoodMask.set(0)
    .PetTalentType.set(-1)
    .CategoryEnumID.set(-1)
    .Name.enGB.set("Ghoul")
    .SkillLine.setIndex(0, GHOULSKLLINE.ID)
    .SkillLine.setIndex(1, 0)




//skill line abilities
const GHOUL_SLA = DBC.SkillLineAbility.add(30000)
    .SkillLine.set(GHOULSKLLINE.ID)
    .Spell.set(GHOUL_FEED1.ID)
    .MinSkillLineRank.set(1)
    .AcquireMethod.set(2)

const GHOUL_SLA2 = DBC.SkillLineAbility.add(30001)
    .SkillLine.set(GHOULSKLLINE.ID)
    .Spell.set(52188)
    .MinSkillLineRank.set(1)
    .AcquireMethod.set(2)





export const GHLPET28 = std.CreatureTemplates.create('shrek6', 'GHLPET28', 416)  //imp is parent
    .Name.enGB.set("Ghoul")
    .Models.clearAll()
    .Models.addIds(10487)  //red ghoul: 829, skeletal warrior: 535, green ghoul: 10487, bone golem (Rattlegore): 12073, shade: 7857
    .Scale.set(0.5)
    .Stats.DamageMod.set(2)
    .Stats.HealthMod.set(1) 
    .Rank.NORMAL.set()
    .Family.set(GHOUL_NECRO_FAMILY.ID.get()) //Abilities are determined by the family, 47 = Bone Golem Family

    
//summon golem
const GHL_SUMMON = std.Spells.create('shrek6', 'GHL_SUMMON')
    .Name.enGB.set("Raise Ghoul")
    .Icon.setPath('spell_shadow_darksummoning')
    .CastTime.setSimple(0)
    .Range.setSimple(0, 30)
    //.Visual.set(std.Spells.load(172).Visual.get())
    .Effects.addMod(x => x
        .Type.SUMMON_PET.set()
        .SummonedCreature.set(GHLPET28.ID) 
        //.SummonProperties.set(61) //41 = companion, 61 = guardian, 63 = totem, 64 = independant
        //.ImplicitTargetA.DEST_TARGET_LEFT.set()
    )

//spell to check if target is dead (the one that is casted intitially)
export const RSGHL = std.Spells.create('shrek6', 'RSGHL')
    .Name.enGB.set("Raise Ghoul")
    .Icon.setPath('spell_shadow_animatedead') //spell_deathknight_gnaw_ghoul
    .Description.enGB.set("Raise a nearby humanoid or undead corpse as a ghoul. A crazed minion that stays at your side until death or dismissed.")
    .CastTime.setSimple(3000)
    .Range.setSimple(0, 30)
    .Visual.set(std.Spells.load(172).Visual.get())
    .Attributes.CAN_TARGET_DEAD.set(1)
    .InterruptFlags.ON_MOVEMENT.set(1)
    .InterruptFlags.ON_INTERRUPT_CAST.set(1)
    .InterruptFlags.ON_INTERRUPT.set(1)
    .InterruptFlags.ON_PUSHBACK.set(1)
    .Power.Type.MANA.set()
    .Power.CostPercent.set(20)
    .Cooldown.GlobalTime.set(1500)
    .SchoolMask.SHADOW.set(1)
    .Effects.addMod(x => x
        .Type.DUMMY.set()
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .InlineScripts.OnCast((spell)=> {
        let caster = spell.GetCaster()
        if(!caster) return

        let target = spell.GetTarget()
        if(!target) return

        let creature = target.ToCreature()
        if(!creature) return

        if(creature.IsDead()){
            if(creature.GetCreatureType() == 6.0 || creature.GetCreatureType() == 7.0){ //if undead or humanoid
                caster.CastSpell(caster, 81580, true)
                creature.DespawnOrUnsummon(1)
            }
        }
    })
