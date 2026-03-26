import { std } from "wow/wotlk";

const CHRGE_LUNCH = std.Spells.create('shrek6', 'LNCHCHRGE', 68763) //charge is parent
    .Icon.setPath('spell_deathknight_gnaw_ghoul')
    .Range.setSimple(0, 50)
    .Duration.setSimple(1500)

CHRGE_LUNCH.Effects.get(1).clear()
CHRGE_LUNCH.Effects.get(2).clear()

CHRGE_LUNCH.Effects.get(1)
    .Type.APPLY_AURA.set()
    .Aura.MOD_STUN.set()
    .ImplicitTargetA.UNIT_TARGET_ENEMY.set()

CHRGE_LUNCH.Effects.get(2)
    .Type.THREAT.set()
    .ThreatBase.set(200)
    .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    

//console.log(CHRGE_LUNCH.objectify())

export const LNCH = std.Spells.create('shrek6', 'LNCH')
    .Name.enGB.set("Death Charge")
    .Icon.setPath('spell_deathknight_gnaw_ghoul')
    .Description.enGB.set("Command all controlled undead to charge at the target, stunning it for 1.50 sec. Causes a large amount of threat.")
    .CastTime.setSimple(0)
    .Range.setSimple(0, 30)
    //.Duration.setSimple(5000)
    .Cooldown.Time.set(30000)
    .Power.Type.MANA.set()
    .Power.CostPercent.set(10)
    //.Visual.set(std.Spells.load(172).Visual.get())
    .SchoolMask.SHADOW.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .InlineScripts.OnCast((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = caster.ToPlayer()
        if(!player) return

        let target = spell.GetTarget()
        if(!target) return

        let creature = target.ToCreature()
        if(!creature) return

        let controlled = player.GetControlled()
        if(!controlled){
            return
        }

        controlled.forEach((cntrld) => {
            let target = spell.GetTarget()
            if(!target) return

            let creature = target.ToCreature()
            if(!creature) return

            let cntrldCreature = cntrld.ToCreature()
            if(!cntrldCreature) return

            cntrldCreature.CastSpell(creature, 81589, true)
        })
    })