import { std } from "wow/wotlk";
import { BLET } from "./bloodLet";
import { AbilityCategory } from "../../category";
import { BLOODLET_OBJ } from "../../../../../../Classes/SpellInfo/BloodLetInfo";

//BLOOD LET RANK 3
export const BLET3 = std.Spells.create('shrek6', 'BLET3')
    .Attributes.MELEE_COMBAT_START.set(true)
    .Subtext.enGB.set('Rank 3')
    .Family.set(BLOODLET_OBJ.GetFamily())//Blood Let family
    .ClassMask.setBit(BLOODLET_OBJ.GetClassMask(), 1) //Blood Let classmask
    .Name.enGB.set(BLOODLET_OBJ.GetName())
    .Icon.setPath(BLOODLET_OBJ.GetIcon()) //Ability_rogue_bloodyeye
    .Description.enGB.set(BLOODLET_OBJ.GetDesc())
    .AuraDescription.enGB.set(BLOODLET_OBJ.GetAuraDesc())
    .Duration.setSimple(BLOODLET_OBJ.GetDuration())
    .CastTime.set(BLOODLET_OBJ.GetCastTime())
    .Visual.set(BLOODLET_OBJ.GetVisual())
    .Range.set(BLOODLET_OBJ.GetRange()) //melee
    .SchoolMask.setBit(BLOODLET_OBJ.GetSchoolMask(), 1)
    .Mana.Type.set(BLOODLET_OBJ.GetCostType()) //sets to mana cost
    .Mana.CostPercent.set(BLOODLET_OBJ.GetCost())
    .Cooldown.GlobalTime.set(BLOODLET_OBJ.GetGlobalCD())
    .Cooldown.Time.set(BLOODLET_OBJ.GetCoolDown())
    .FacingCasterFlags.set(BLOODLET_OBJ.GetFacingCasterFlags())
    .DefenseType.set(BLOODLET_OBJ.GetDefenseType())
    .StackGroups.add(BLOODLET_OBJ.GetStackGroup().ID)
    .Stacks.set(BLOODLET_OBJ.GetStacks())
    .Effects.addMod(eff => eff
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_DAMAGE.set()
        .DamagePeriod.set(3000)
        .DamageBase.set(24) 
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .InlineScripts.OnPeriodicDamage((spell) => { 
        let caster = spell.GetCaster()
        if(!caster) return

        //PROC FATALITY RESET
        let rstFt = getRandomNumber(1, 5)
        if(rstFt == 1){
            caster.ResetCooldown(81488)
            caster.ResetCooldown(81487)
            caster.ResetCooldown(80994)
            caster.ResetCooldown(80918)
        }

        function getRandomNumber(min: number, max: number){
            min = Math.ceil(min)
            max = Math.ceil(max)

            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    })
    .InlineScripts.OnApply((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return
        //caster.CastSpell(caster, 80903, true)

        let player = ToPlayer(caster)
        if(!player) return

        if(player.HasAura(81366)) //Subtle Strikes (rank 1) talent
        {
            let rndm = getRandomNumber(1, 10)

            if(rndm == 1){
                caster.CastSpell(caster, 80903, true)
            }
        }

        if(player.HasAura(81367)) //Subtle Strikes (rank 2) talent
        {
            let rndm = getRandomNumber(1, 8)

            if(rndm == 1){
                caster.CastSpell(caster, 80903, true)
            }
        }

        if(player.HasAura(81368)) //Subtle Strikes (rank 3) talent
        {
            let rndm = getRandomNumber(1, 6)

            if(rndm == 1){
                caster.CastSpell(caster, 80903, true)
            }
        }

        if(player.HasAura(81369)) //Subtle Strikes (rank 4) talent
        {
            let rndm = getRandomNumber(1, 4)

            if(rndm == 1){
                caster.CastSpell(caster, 80903, true)
            }
        }

        if(player.HasAura(81370)) //Subtle Strikes (rank 5) talent
        {
            let rndm = getRandomNumber(1, 2)

            if(rndm == 1){
                caster.CastSpell(caster, 80903, true)
            }
        }
        
        function getRandomNumber(min: number, max: number){
            min = Math.ceil(min)
            max = Math.ceil(max)

            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    })

BLET3.SkillLines.add(AbilityCategory.Emp.getSkill())
//MONK_IMMOLATE_PUNCH3.StackGroups.add(MONK_IMMOLATE_PUNCH.ID)
//MONK_IMMOLATE_PUNCH3.StackGroups.add(MONK_IMMOLATE_PUNCH.ID)
//MONK_IMMOLATE_PUNCH3.Rank.set(MONK_IMMOLATE_PUNCH3.ID, 3)
BLET3.Rank.set(BLET.ID, 3)
//console.log(std.Spells.load(64619).Visual.get())
