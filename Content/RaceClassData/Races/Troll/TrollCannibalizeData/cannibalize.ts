import { std } from "wow/wotlk";

const CNBLZ = std.Spells.load(20577)

const CNBLZ_HEAL = std.Spells.create('shrek6', 'CNBLZ_HEAL')
    .Name.enGB.set("Cannibalize")
    .Range.set(0)
    .CastTime.set(0)
    .Icon.set(CNBLZ.Icon.get())
    .Effects.addMod(x => x
        .Type.HEAL_PCT.set()
        .HealPctBase.set(6)
        .ImplicitTargetA.UNIT_CASTER.set()
    )

export const CNBLZ_COPY = std.Spells.create('shrek6', 'CNBLZCOPY')
    .Name.enGB.set("Cannibalize")
    .Subtext.enGB.set('Racial')
    .Description.enGB.set("When activated, regenerates 7% of your total health every 2 sec for 10 sec. Only works on the nearest Humanoid or Undead corpse within 8 yds of you. Any movement , action, or damage taken while Cannibalizing will cancel the effect.")
    .Range.set(0)
    .CastTime.set(0)
    .AuraInterruptFlags.MOVE.set(1)
    .AuraInterruptFlags.CAST.set(1)
    .Attributes.CHANNELED.set(1)
    .Duration.setSimple(10000)
    .Icon.set(CNBLZ.Icon.get())
    .CreatureTargets.UNDEAD.set(1)
    .CreatureTargets.HUMANOID.set(1)
    .Cooldown.GlobalTime.set(1500)
    .Cooldown.Time.set(120000)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_TRIGGER_SPELL.set()
        .TriggerSpell.set(CNBLZ_HEAL.ID)
        .AuraPeriod.set(2000)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .InlineScripts.OnApply((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = ToPlayer(caster)
        if(!player) return

        player.EmoteState(398) //cannibalize emote state
    })
    .InlineScripts.OnRemove((spell) => {
        let caster = spell.GetCaster()

        if(!caster){
            console.log("No caster.")
            return
        }

        let player = ToPlayer(caster)
        if(!player) return

        player.EmoteState(0) //stand state
        
    })
    .InlineScripts.OnBeforeCast((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = ToPlayer(caster)
        if(!player) return

        let victim = player.GetNearestCreature(8)
        if(!victim) {
           // console.log("No victim")
            spell.Cancel()
            return
        }

        if(victim.IsAlive()){
            //console.log("victim is alive")
            spell.Cancel()
        }
        else if(victim.GetCreatureType() != 6 && victim.GetCreatureType() != 7){
            //console.log("victim isnt undead or humanoid")
            spell.Cancel()
        }
    })
