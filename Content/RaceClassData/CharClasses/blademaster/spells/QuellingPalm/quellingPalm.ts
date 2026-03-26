import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";
import { QLINGVISUAL } from "../../SpellVisuals/quellingPalmVisual";

const QUELLING_PALM_SILENCE = std.Spells.create('shrek6', 'QUELLING_PALM_SILENCE') 
    .Family.set(67)
    .ClassMask.setBit(67, 1)
    .Name.enGB.set("Quelling Palm")
    .AuraDescription.enGB.set("Silenced")
    .Icon.setPath("ability_blademaster_quellingpalm")
    .Range.set(2)
    .CastTime.set(0)
    .Duration.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_SILENCE.set()
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )

export const QUELLING_PALM = std.Spells.create('shrek6', 'QUELLING_PALM', 1766) 
    .Attributes.MELEE_COMBAT_START.set(true)
    .Attributes.IS_ABILITY.set(true)
    .Name.enGB.set('Quelling Palm')
    .Description.enGB.set("Interrupts the target's spell casting and prevents them from casting any spell from that school for $d1.")
    .Icon.setPath("ability_blademaster_quellingpalm")
    .Visual.set(QLINGVISUAL.ID)
    .Cooldown.Time.set(10000)
    .Cooldown.GlobalTime.set(1500)
    .Power.Type.set(0)
    .Power.CostPercent.set(3)
    .CastTime.set(0)
    .Range.set(2)
    .FacingCasterFlags.SPELL_FACING_FLAG_INFRONT.set(1)
    .SkillLines.add(AbilityCategory.Ronin.getSkill())
    .InlineScripts.OnAfterCast((spell)=>{
        let caster = spell.GetCaster()
        if(!caster){
            return
        }

        let player = ToPlayer(caster)
        if(!player) return

        let target = spell.GetTarget()
        if(!target) return

        if(target.IsCreature()){
            let creature = ToCreature(target)
            if(!creature) return

            player.CastSpell(creature, 81517, true)  //quelling palm silence
        }
        else if(target.IsPlayer()){
            let playerTarget = ToPlayer(target)
            if(!playerTarget) return

            player.CastSpell(playerTarget, 81517, true) //quelling palm silence
        }
    })
    

//console.log(QUELLING_PALM_SILENCE.ID)


