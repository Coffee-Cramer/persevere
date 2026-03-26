import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";
import { FTLTY } from "../Fatality/Fatality";
import { BLZVIS } from "../../SpellVisuals/BlazingStrikesVisual";

export const BLAZINGSTRIKES = std.Spells.create("shrek6", "BLAZINGSTRIKE")
    .Family.set(20)
    .ClassMask.setBit(21, 1)
    .Name.enGB.set("Blazing Strikes")
    .Description.enGB.set("The Blademaster strikes with blazing speed, their attack speed is increased by $s1% for $d1. The effectiveness of Blazing Strikes increases for every 10 rage you have (caps at 60 rage). Consumes all of your rage.")
    .AuraDescription.enGB.set("Attack speed increased by $s1%")
    .Icon.setPath("Inv_sword_01")
    .Duration.setSimple(10000)
    .Visual.set(BLZVIS.ID)
    .Range.set(0)
    .CastTime.set(0)
    .Power.Type.RAGE.set()
    .Power.CostBase.set(150)
    //.Attributes.REQUIRES_OFFHAND.set(1)
    .Attributes.IS_ABILITY.set(true)
    .PreventionType.SILENCE.set()
    .Cooldown.Category.set(FTLTY.ID)
    .Cooldown.CategoryTime.set(12000)
    .SkillLines.add(AbilityCategory.Emp.getSkill())
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_ATTACKSPEED.set()
        .PercentBase.set(19)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .InlineScripts.OnHit((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = ToPlayer(caster)
        if(!player) return

        player.SetPower(1, 0) //clear rage
    })
    .InlineScripts.OnBeforeCast((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = ToPlayer(caster)
        if(!player) return

        //depending on the amount of rage, cast set number of stacks of bloodrush
        //if(player.GetPowerPct(1) > 90) BRstacks = 8
        let BRstacks = 0

        //if(player.GetPowerPct(1) > 90) BRstacks = 8
        //else if(player.GetPowerPct(1) > 80) BRstacks = 7
        //else if(player.GetPowerPct(1) > 70) BRstacks = 6
        if(player.GetPowerPct(1) > 60) BRstacks = 5
        else if(player.GetPowerPct(1) > 50) BRstacks = 4
        else if(player.GetPowerPct(1) > 40) BRstacks = 3
        else if(player.GetPowerPct(1) > 30) BRstacks = 2
        else if(player.GetPowerPct(1) > 20) BRstacks = 1

        for(let i = 0; i < BRstacks; i++){
            player.CastSpell(player, 81459, true)
        }
    })
//console.log(std.Spells.load(54521).Visual.get())
    