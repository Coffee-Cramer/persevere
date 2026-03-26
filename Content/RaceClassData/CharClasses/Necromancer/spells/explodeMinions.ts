import { std } from "wow/wotlk";
import { TRAINERGOLDSHIRENECRO, TRAINERNRTHSHIRE_NECRO } from "../../../../NPCData/Trainers/humanNecroTrainr";
import { EXPLDMNN_EXPLODE2 } from "./explodeMinions_explode";

//console.log(std.Spells.load(17616).objectify())
//console.log(std.Spells.load(50444).Visual.get())

export const EXPLDMNN = std.Spells.create('shrek6', 'EXPLDMNN2') 
    .Name.enGB.set("Explode Minions")
    .Subtext.enGB.set("Rank 1")
    .Icon.set(std.Spells.load(17616).Icon.get())
    .Description.enGB.set("Detonate your zombies, each explosion deals 23 Nature damage to all enemies within 10 yards.")
    .CastTime.setSimple(0)
    .Range.set(0)
    .Duration.set(0)
    .Power.Type.MANA.set()
    .Power.CostBase.set(53)
    .Duration.set(0)
    .Cooldown.GlobalTime.set(1500)
    .Cooldown.Time.set(6000)
    .Visual.set(std.Spells.load(11445).Visual.get())
    .SchoolMask.NATURE.set(1)
    .Effects.addMod(x => x
        .Type.DUMMY.set()
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

        controlled.forEach((cntrld) => {
            let cntrldCreature = cntrld.ToCreature()
            if(!cntrldCreature) return

            if(cntrldCreature.GetName() != "Ghoul"){
                cntrldCreature.CastSpell(cntrldCreature, 81566, true)
            }
        })
    })


//trainer data here to avoid odd error
TRAINERGOLDSHIRENECRO.Spells.addGet(EXPLDMNN.ID).RequiredLevel.set(10).row.MoneyCost.set(400) 
TRAINERNRTHSHIRE_NECRO.Spells.addGet(EXPLDMNN.ID).RequiredLevel.set(10).row.MoneyCost.set(400)
//console.log(EXPLDMNN_EXPLODE2.ID)