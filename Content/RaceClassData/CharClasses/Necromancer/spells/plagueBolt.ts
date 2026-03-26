import { std } from "wow/wotlk";
import { NECRO } from "../necro";

export const DC_DAMAGE = std.Spells.create('shrek6', 'DC_DAMAGE')
    .Name.enGB.set("Death Coil")
    .Subtext.enGB.set("Rank 1")
    .Icon.setPath("Spell_shadow_deathcoil")
    .Range.setSimple(0, 100)
    .CastTime.set(0)
    .Duration.set(0)
    .SchoolMask.SHADOW.set(1)
    .Effects.addMod(x => x
        .Type.SCHOOL_DAMAGE.set()
        .DamageBase.set(11)
        .DamageDieSides.set(5)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )

export const DC_HEAL = std.Spells.create('shrek6', 'DC_HEAL')
    .Name.enGB.set("Death Coil")
    .Subtext.enGB.set("Rank 1")
    .Icon.setPath("Spell_shadow_deathcoil")
    .Range.setSimple(0, 100)
    .CastTime.set(0)
    .Duration.set(0)
    .SchoolMask.SHADOW.set(1)
    .Effects.addMod(x => x
        .Type.HEAL.set()
        .HealBase.set(11)
        .HealDieSides.set(5)
        .ImplicitTargetA.UNIT_TARGET_ALLY.set()
    )

//console.log(DC_DAMAGE.ID)
//console.log(DC_HEAL.ID)

export const PLGBLT = std.Spells.create('shrek6', 'PLGBLT', 21067) //poison bolt parent
    .Name.enGB.set("Death Coil")
    .Subtext.enGB.set("Rank 1")
    .Icon.setPath("Spell_shadow_deathcoil")
    .Description.enGB.set("A coil of death that can heal a controlled undead or damage an enemy target for 12 to 16 Shadow damage/healing. \n\nIn addition, Death Coil commands all controlled undead to attack it.")
    .Range.setSimple(0, 30)
    .CastTime.setSimple(1500)
    .Power.Type.MANA.set()
    .Power.CostBase.set(11)
    .Stacks.set(1)
    .Duration.set(0)
    .Cooldown.GlobalTime.set(1500)
    .Visual.set(std.Spells.load(28412).Visual.get()) //Death Coil Visual
    .SchoolMask.SHADOW.set(1)
    .InlineScripts.OnHit((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = caster.ToPlayer()
        if(!player) return

        let target = spell.GetTarget()
        if(!target) return

        let creatureTarget = target.ToCreature()
        if(!creatureTarget) return

        let controlled = player.GetControlled()
        if(!controlled){
            return
        }

        //COMMAND ALL CONTROLLED TO ATTACK
        controlled.forEach((cntrld) => {  
            let caster = spell.GetCaster()
            if(!caster) return

            let target = spell.GetTarget()
            if(!target) return

            let creatureTarget = target.ToCreature()
            if(!creatureTarget) return

            let cntrldCreature = cntrld.ToCreature()
            if(!cntrldCreature) return

            if(!creatureTarget.IsFriendlyTo(caster)) cntrldCreature.AttackStart(creatureTarget) //if not friendly, attack
        })
        
        if(!creatureTarget.IsFriendlyTo(caster)){
            caster.CastSpell(creatureTarget, 81584, true) //if enemy, cast DC_DAMAGE
        }
        else if(creatureTarget.IsFriendlyTo(caster)){   
            caster.CastSpell(creatureTarget, 81583, true) //if controlled, cast DC_HEAL
        }
    })

PLGBLT.Effects.get(0)
    .Type.DUMMY.set()
    //.DamageBase.set(11).DamageDieSides.set(5) //12 - 16 
    .ImplicitTargetA.UNIT_TARGET_ANY.set()
    
PLGBLT.Effects.get(1).clear()
PLGBLT.Effects.get(2).clear()

std.Spells.load(PLGBLT.ID).AutoLearn.add(1, NECRO.Mask)