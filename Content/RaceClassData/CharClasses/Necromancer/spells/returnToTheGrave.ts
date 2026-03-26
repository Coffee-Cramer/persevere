import { std } from "wow/wotlk";

export const RTTG = std.Spells.create('shrek6', 'RTTG')
    .Name.enGB.set("Return to the Grave")
    .Icon.setPath("spell_shadow_sacrificialshield")
    .Description.enGB.set("All of your zombies return to the grave, dismissed.")
    .CastTime.setSimple(1500)
    .Range.set(0)
    .Duration.set(0)
    .Cooldown.GlobalTime.set(1500)
    .Visual.set(std.Spells.load(172).Visual.get()) 
    .SchoolMask.SHADOW.set(1)
    .InterruptFlags.ON_MOVEMENT.set(1)
    .InterruptFlags.ON_INTERRUPT_CAST.set(1)
    .InterruptFlags.ON_INTERRUPT.set(1)
    .InterruptFlags.ON_PUSHBACK.set(1)
    .Effects.addMod(x => x
        .Type.DUMMY.set()
        .ImplicitTargetA.DEST_CASTER.set()
    )
    .InlineScripts.OnAfterCast((spell)=> {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = caster.ToPlayer()
        if(!player) return

        let controlled = player.GetControlled()
        if(!controlled) return

        controlled.forEach((cntrld) => {
            let cntrldCreature = cntrld.ToCreature()
            if(!cntrldCreature) return

            if(cntrld.GetName() != "Ghoul") cntrldCreature.DespawnOrUnsummon(1)
        })   
    })