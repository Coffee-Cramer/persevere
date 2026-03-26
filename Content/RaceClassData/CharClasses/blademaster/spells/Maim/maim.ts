import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";

export const MAIM = std.Spells.create('shrek6', 'MAIM')
    .Name.enGB.set("Maim")
    .Icon.setPath("Inv_gauntlets_03") //Ability_rogue_bloodyeye, Inv_misc_head_dwarf_01
    .Description.enGB.set("Maims the target when they least expect it, applying 3 stacks of Blood Let immediately and generating 15 Rage. Cannot be used in combat.")
    .CastTime.set(0)
    .Visual.set(372)
    .Range.set(2) //melee
    .SchoolMask.setBit(0, 1)
    .Cooldown.GlobalTime.set(1500)
    .FacingCasterFlags.set("SPELL_FACING_FLAG_INFRONT")
    .Attributes.MELEE_COMBAT_START.set(true)
    .Attributes.IS_ABILITY.set(true)
    .Attributes.CANNOT_USE_IN_COMBAT.set(true)
    .DefenseType.set(2)
    .Effects.addMod(eff => eff
        .Type.DUMMY.set()
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .Effects.addModTriggerSpell('shrek6', 'MAIM_ENRAGE', 0, eff => eff //grant 15 rage
        .Name.enGB.set("Rage")
        .Icon.set(1)
        .CastTime.set(0)
        .Range.set(0)
        .Effects.addMod(eff => eff 
            .Type.ENERGIZE.set()
            .PowerType.RAGE.set()
            .PowerBase.set(150)
            .ImplicitTargetA.UNIT_CASTER.set()
        )
    )
    .InlineScripts.OnAfterCast((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = ToPlayer(caster)
        if(!player) return

        let target = spell.GetTarget()
        if(!target) return

        if(target.IsCreature()){
            let creature = ToCreature(target)
            if(!creature) return

            if(player.HasSpell(80917)){
                player.CastSpell(creature, 80917, true)
                player.CastSpell(creature, 80917, true)
                player.CastSpell(creature, 80917, true)
                
            }
            else if(player.HasSpell(80916)){
                player.CastSpell(creature, 80916, true)
                player.CastSpell(creature, 80916, true)
                player.CastSpell(creature, 80916, true)
                
                
            }
            else if(player.HasSpell(80915)){
                player.CastSpell(creature, 80915, true)
                player.CastSpell(creature, 80915, true)
                player.CastSpell(creature, 80915, true)
                
            }
            else if(player.HasSpell(80914)){
                player.CastSpell(creature, 80914, true)
                player.CastSpell(creature, 80914, true)
                player.CastSpell(creature, 80914, true)
                
            }
            else if(player.HasSpell(80913)){
                player.CastSpell(creature, 80913, true)
                player.CastSpell(creature, 80913, true)
                player.CastSpell(creature, 80913, true)
                
            }
            else if(player.HasSpell(80912)){
                player.CastSpell(creature, 80912, true)
                player.CastSpell(creature, 80912, true)
                player.CastSpell(creature, 80912, true)
                
            }
            else if(player.HasSpell(80911)){
                player.CastSpell(creature, 80911, true)
                player.CastSpell(creature, 80911, true)
                player.CastSpell(creature, 80911, true)
                
            }
            else if(player.HasSpell(80910)){
                player.CastSpell(creature, 80910, true)
                player.CastSpell(creature, 80910, true)
                player.CastSpell(creature, 80910, true)
                
            }
            else{
                return
            }
        }
        else if(target.IsPlayer()){
            let playerB = ToPlayer(target)
            if(!playerB) return

            if(player.HasSpell(80917)){
                player.CastSpell(playerB, 80917, true)
                player.CastSpell(playerB, 80917, true)
                player.CastSpell(playerB, 80917, true)
                
            }
            else if(player.HasSpell(80916)){
                player.CastSpell(playerB, 80916, true)
                player.CastSpell(playerB, 80916, true)
                player.CastSpell(playerB, 80916, true)
                
                
            }
            else if(player.HasSpell(80915)){
                player.CastSpell(playerB, 80915, true)
                player.CastSpell(playerB, 80915, true)
                player.CastSpell(playerB, 80915, true)
                
                
            }
            else if(player.HasSpell(80914)){
                player.CastSpell(playerB, 80914, true)
                player.CastSpell(playerB, 80914, true)
                player.CastSpell(playerB, 80914, true)
                
            }
            else if(player.HasSpell(80913)){
                player.CastSpell(playerB, 80913, true)
                player.CastSpell(playerB, 80913, true)
                player.CastSpell(playerB, 80913, true)
                
            }
            else if(player.HasSpell(80912)){
                player.CastSpell(playerB, 80912, true)
                player.CastSpell(playerB, 80912, true)
                player.CastSpell(playerB, 80912, true)
                
            }
            else if(player.HasSpell(80911)){
                player.CastSpell(playerB, 80911, true)
                player.CastSpell(playerB, 80911, true)
                player.CastSpell(playerB, 80911, true)
                
            }
            else if(player.HasSpell(80910)){
                player.CastSpell(playerB, 80910, true)
                player.CastSpell(playerB, 80910, true)
                player.CastSpell(playerB, 80910, true)
                
            }
            else{
                return
            }
        }
        else{
            return
        }

        player.RemoveAura(80903) //remove critical strike buff

        //re-apply critical strike buff
        caster.CastSpell(caster, 80903, true)
        caster.CastSpell(caster, 80903, true)
        caster.CastSpell(caster, 80903, true)
        
    })
    .SkillLines.add(AbilityCategory.Emp.getSkill())

//RANK DEBUGGING    
//console.log("BLOOD LET 1: ",std.Spells.ID(BLET))
//console.log("BLOOD LET 2: ",std.Spells.ID(BLET2))
//console.log("BLOOD LET 3: ",std.Spells.ID(BLET3))
//console.log("BLOOD LET 4: ",std.Spells.ID(BLET4))
//console.log("BLOOD LET 5: ",std.Spells.ID(BLET5))
//console.log("BLOOD LET 6: ",std.Spells.ID(BLET6))
//console.log("BLOOD LET 7: ",std.Spells.ID(BLET7))
//console.log("BLOOD LET 8: ",std.Spells.ID(BLET8))
