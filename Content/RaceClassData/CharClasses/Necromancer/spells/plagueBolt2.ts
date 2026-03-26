import { std } from "wow/wotlk";

export const DC_DAMAGE2 = std.Spells.create('shrek6', 'DC_DAMAGE2')
    .Name.enGB.set("Death Coil")
    .Subtext.enGB.set("Rank 1")
    .Icon.setPath("Spell_shadow_deathcoil")
    .Range.setSimple(0, 100)
    .CastTime.set(0)
    .Duration.set(0)
    .SchoolMask.SHADOW.set(1)
    .Effects.addMod(x => x
        .Type.SCHOOL_DAMAGE.set()
        .DamageBase.set(22)
        .DamageDieSides.set(7)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )

export const DC_HEAL2 = std.Spells.create('shrek6', 'DC_HEAL2')
    .Name.enGB.set("Death Coil")
    .Subtext.enGB.set("Rank 1")
    .Icon.setPath("Spell_shadow_deathcoil")
    .Range.setSimple(0, 100)
    .CastTime.set(0)
    .Duration.set(0)
    .SchoolMask.SHADOW.set(1)
    .Effects.addMod(x => x
        .Type.HEAL.set()
        .HealBase.set(22)
        .HealDieSides.set(7)
        .ImplicitTargetA.UNIT_TARGET_ALLY.set()
    )

//console.log(DC_DAMAGE2.ID)
//console.log(DC_HEAL2.ID)

export const PLGBLT2 = std.Spells.create('shrek6', 'PLGBLT2', 21067) //poison bolt parent
    .Name.enGB.set("Death Coil")
    .Subtext.enGB.set("Rank 2")
    .Icon.setPath("Spell_shadow_deathcoil")
    .Description.enGB.set("A coil of death that can heal a controlled undead or damage an enemy target for 23 to 29 Shadow damage/healing. \n\nIn addition, Death Coil commands all controlled undead to attack it.")
    .CastTime.setSimple(0)
    .Range.setSimple(0, 30)
    .CastTime.setSimple(2000)
    .SchoolMask.SHADOW.set(1)
    .Power.Type.MANA.set()
    .Power.CostBase.set(18)
    .Stacks.set(1)
    .Duration.set(0)
    .Visual.set(std.Spells.load(28412).Visual.get()) //Death Coil Visual
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
            caster.CastSpell(creatureTarget, 81585, true) //if enemy, cast DC_DAMAGE
        }
        else if(creatureTarget.IsFriendlyTo(caster)){   
            caster.CastSpell(creatureTarget, 81586, true) //if friendly, cast DC_HEAL
        }
    })

PLGBLT2.Effects.get(0)
    .Type.DUMMY.set()
    //.DamageBase.set(11).DamageDieSides.set(5) //12 - 16 
    .ImplicitTargetA.UNIT_TARGET_ANY.set()

PLGBLT2.Effects.get(1).clear()
PLGBLT2.Effects.get(2).clear()
