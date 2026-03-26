import { std } from "wow/wotlk";
import { NECROPET8 } from "./raiseDead";


export const DRKSUMM = std.Spells.create('shrek6', 'DRKSUMM')
    .Name.enGB.set("Dark Summoning")
    .Subtext.enGB.set("Rank 1") //LATER RANKS SUMMON MORE
    .Icon.setPath('spell_shadow_darksummoning') //spell_shadow_darksummoning spell_deathknight_gnaw_ghoul
    .Description.enGB.set("Summon a zombie, no corpse required.")
    .CastTime.setSimple(0)
    .Range.setSimple(0, 5)
    .Visual.set(std.Spells.load(59711).Visual.get())
    .Duration.set(21)
    .Cooldown.Time.set(60000)
    .Cooldown.GlobalTime.set(1500)
    .Power.Type.MANA.set()
    .Power.CostPercent.set(20)
    .SchoolMask.SHADOW.set(1)
    .Effects.addMod(x => x
        .Type.SUMMON.set()
        .SummonedCreature.set(NECROPET8.ID) 
        .SummonProperties.set(61) //41 = companion, 61 = guardian, 63 = totem, 64 = neutral
        .ImplicitTargetA.DEST_CASTER_RIGHT.set()
    )
    .InlineScripts.OnAfterCast((spell)=> {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = caster.ToPlayer()
        if(!player) return

        let controlled = player.GetControlled()
        if(!controlled) return

        let count = 0 //MINION COUNTER

        //LIMIT AMOUNT OF MINIONS
        controlled.forEach((cntrld) => {
            if(cntrld.GetName() != "Ghoul") count++ //NORMAL PET DOESN'T COUNT FOR LIMIT

            let cntrldCreature = cntrld.ToCreature()
            if(!cntrldCreature) return

            //console.log(count)
            if(count > 2){
                if(cntrld.GetName() != "Ghoul") cntrldCreature.DespawnOrUnsummon(1) //DONT UNSUMMON NORMAL PET
            }
        })
    })