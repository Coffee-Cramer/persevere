import { exit } from "node:process";
import { std } from "wow/wotlk";

export const DTHPACT = std.Spells.create('shrek6', 'DTHPACT')
    .Name.enGB.set("Death Pact")
    .Icon.setPath('spell_shadow_deathpact')
    .Description.enGB.set("Sacrifice one of your minions to heal $s1% of your maximum health.")
    .CastTime.setSimple(0)
    .Range.setSimple(0, 30)
    .Cooldown.Time.set(30000)
    .Power.Type.MANA.set()
    .Power.CostPercent.set(10)
    .Visual.set(std.Spells.load(25531).Visual.get())
    .SchoolMask.SHADOW.set(1)
    .Effects.addMod(x => x
        .Type.HEAL_PCT.set()
        .HealPctBase.set(29)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .InlineScripts.OnCast((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = caster.ToPlayer()
        if(!player) return

        let controlled = player.GetControlled()
        if(!controlled) return

        let counter = 0
        
        controlled.forEach((cntrld) => {
            let caster = spell.GetCaster()
            if(!caster) return

            let player = caster.ToPlayer()
            if(!player) return

            let cntrldCreature = cntrld.ToCreature()
            if(!cntrldCreature) return

            if(cntrldCreature.GetName() != "Ghoul" && counter < 1){
                player.Kill(cntrld, false)
                counter++
            }
        })
    })