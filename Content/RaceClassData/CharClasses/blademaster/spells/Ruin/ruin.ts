import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";


export const RUIN = std.Spells.create('shrek6', 'RUIN')
    .Name.enGB.set("Ruin")
    .Icon.setPath("Spell_shadow_sacrificialshield") //Spell_shadow_sacrificialshield   ability_unspecified_lmao
    .Description.enGB.set("Resets the cooldowns of Fatality, Pierce, and Blazing Strikes.")
    .Range.set(0)
    .CastTime.set(0)
    .Cooldown.Time.set(180000)
    //.Visual.set(std.Spells.load(36110).Visual.get()) //Summon Dancing Sword Visual
    .SkillLines.add(AbilityCategory.Emp.getSkill())
    .Effects.addMod(x => x
        .Type.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .InlineScripts.OnBeforeCast((spell)=>{
        let caster = spell.GetCaster()
        if(!caster){
            return
        }

        let player = ToPlayer(caster) 
        if(!player) return

        player.ResetCooldown(81488)
        player.ResetCooldown(81487)
        player.ResetCooldown(80918)
        //player.ResetCooldown(80994)
    })

//RUIN.Cooldown.Category.set(MRRIMG.ID)
//RUIN.Cooldown.CategoryTime.set(300000)

//console.log("FATALITY: ", FTLTY.ID)
//console.log("PIERCE: ", PIERCE.ID)
//console.log("BLAZING STRIKES: ", BLAZINGSTRIKES.ID)
//console.log("SHOCK BLADE: ", SHOCKB.ID)