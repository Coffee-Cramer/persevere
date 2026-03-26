import { std } from "wow/wotlk";
import { NECRO } from "../necro";

const NECROFOCUS = std.Spells.create('shrek6', 'NECROFOCUS')
    .Name.enGB.set("Necrotic Focus")
    .Icon.setPath('ability_rogue_feigndeath')
    .Description.enGB.set("Command all controlled undead to attack a single target.")
    .CastTime.setSimple(0)
    .Range.setSimple(0, 30)
    .Duration.setSimple(5000)
    .Visual.set(std.Spells.load(172).Visual.get())
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
            console.log("No pets")
            return
        }

        controlled.forEach((ghoul) => {
            let target = spell.GetTarget()
            if(!target) return

            let creature = target.ToCreature()
            if(!creature) return

            let ghoulCreature = ghoul.ToCreature()
            if(!ghoulCreature) return

            ghoulCreature.AttackStart(creature)
        })
    })


//console.log(EXPLODEMINION_DET.ID)

//std.Spells.load(NECROFOCUS.ID).AutoLearn.add(1, NECRO.Mask)