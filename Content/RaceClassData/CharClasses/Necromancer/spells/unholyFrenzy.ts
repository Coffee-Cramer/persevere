import { std } from "wow/wotlk";

export const UNHLYFRZY = std.Spells.create('shrek6', 'UNHLYFRZY')
    .Name.enGB.set("Unholy Frenzy")
    .Icon.setPath('spell_shadow_unholyfrenzy')
    .Description.enGB.set("Increases you and your minions' attack and casting speed by $s1% for $d1 at the cost of $s3% health every 3 sec for the duration.")
    .AuraDescription.enGB.set("Attack and casting speed increased by $s1%.")
    .CastTime.setSimple(0)
    .Range.setSimple(0, 30)
    .Duration.setSimple(30000)
    .Cooldown.Time.set(180000) //3 min
    .Visual.set(std.Spells.load(18499).Visual.get())
    //.Cooldown.GlobalTime.set(1500)
    .Power.Type.MANA.set()
    .Power.CostPercent.set(20)
    .SchoolMask.SHADOW.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_CASTING_SPEED_NOT_STACK.set()
        .PercentBase.set(19)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_ATTACKSPEED.set()
        .PercentBase.set(19)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_DAMAGE_PERCENT.set()
        .PercentBase.set(1) //2% of health
        .Period.set(3000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .InlineScripts.OnCast((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = caster.ToPlayer()
        if(!player) return

        let controlled = player.GetControlled()
        if(!controlled){
            return
        }

        controlled.forEach((ghoul) => {
            let ghoulCreature = ghoul.ToCreature()
            if(!ghoulCreature) return

            ghoulCreature.CastSpell(ghoulCreature, spell.GetEntry(), true)
        })
    })
