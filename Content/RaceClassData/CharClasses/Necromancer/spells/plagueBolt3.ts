import { std } from "wow/wotlk";

export const DC_DAMAGE3 = std.Spells.create('shrek6', 'DC_DAMAGE3')
    .Name.enGB.set("Death Coil")
    .Subtext.enGB.set("Rank 1")
    .Icon.setPath("Spell_shadow_deathcoil")
    .Range.setSimple(0, 100)
    .CastTime.set(0)
    .Duration.set(0)
    .SchoolMask.SHADOW.set(1)
    .Effects.addMod(x => x
        .Type.SCHOOL_DAMAGE.set()
        .DamageBase.set(47)
        .DamageDieSides.set(9)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )

export const DC_HEAL3 = std.Spells.create('shrek6', 'DC_HEAL3')
    .Name.enGB.set("Death Coil")
    .Subtext.enGB.set("Rank 1")
    .Icon.setPath("Spell_shadow_deathcoil")
    .Range.setSimple(0, 100)
    .CastTime.set(0)
    .Duration.set(0)
    .SchoolMask.SHADOW.set(1)
    .Effects.addMod(x => x
        .Type.HEAL.set()
        .HealBase.set(67)
        .HealDieSides.set(9)
        .ImplicitTargetA.UNIT_TARGET_ALLY.set()
    )

//console.log(DC_DAMAGE3.ID)
//console.log(DC_HEAL3.ID)

export const PLGBLT3 = std.Spells.create('shrek6', 'PLGBLT3', 21067) //poison bolt parent
    .Name.enGB.set("Death Coil")
    .Subtext.enGB.set("Rank 3")
    .Icon.setPath("Spell_shadow_deathcoil")
    .Description.enGB.set("Damage an enemy for 48 to 56 Shadow damage or heal a controlled undead for 68 to 76. \n\nIn addition, Death Coil commands all controlled undead to attack it.")
    .CastTime.setSimple(0)
    .Range.setSimple(0, 30)
    .CastTime.setSimple(2500)
    .SchoolMask.SHADOW.set(1)
    .Power.Type.MANA.set()
    .Power.CostBase.set(30)
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
            caster.CastSpell(creatureTarget, 81587, true) //if enemy, cast DC_DAMAGE3
        }
        else if(creatureTarget.IsFriendlyTo(caster)){   
            caster.CastSpell(creatureTarget, 81588, true) //if friendly, cast DC_HEAL3
        }
    })

PLGBLT3.Effects.get(0)
    .Type.DUMMY.set()
    .ImplicitTargetA.UNIT_TARGET_ANY.set()

PLGBLT3.Effects.get(1).clear()
PLGBLT3.Effects.get(2).clear()


//.Effects.get(0).PointsBase.set(47).PointsDieSides.set(9) //48 - 56 nature damage