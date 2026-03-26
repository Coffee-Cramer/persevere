import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";
import { FTLTY } from "../Fatality/Fatality";


export const PIERCE = std.Spells.create('shrek6', 'PIERCE')
    .Family.set(20)
    .ClassMask.setBit(21, 1)
    .Name.enGB.set("Pierce")
    .Icon.setPath("ability_piercedamage") //ability_warrior_shieldbreak, ability_piercedamage
    .Description.enGB.set("Reduces the target's armor by $s1% for $d1. The effectiveness of Pierce increases for every 10 rage you have (caps at 60 rage). Consumes all your rage.")
    .AuraDescription.enGB.set("Armor reduced.")
    .CastTime.set(0) //instant
    .Range.set(2) //melee
    .Visual.set(372) //og: 3441 (expose armor visual), 398 (disarm visual), 671 (evicerate visual)
    .Cooldown.GlobalTime.set(1500) //1.5 seconds 
    .Cooldown.Time.set(12000)
    .Power.Type.RAGE.set()
    .Power.CostBase.set(150)
    .SchoolMask.setBit(0, 1)
    .FacingCasterFlags.set("SPELL_FACING_FLAG_INFRONT")
    .Attributes.MELEE_COMBAT_START.set(true) 
    .Attributes.IS_ABILITY.set(true)
    .DefenseType.set(2)
    .Duration.setSimple(15000)
    .Attributes.CANT_BE_CANCELED.set(true)
    .Attributes.CAN_TARGET_POSSESSED_FRIENDS.set(1)
    .SkillLines.add(AbilityCategory.Emp.getSkill())
    .Cooldown.Category.set(FTLTY.ID)
    .Cooldown.CategoryTime.set(12000)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_RESISTANCE_PCT.set()
        .Schools.setBit(0, 1)
        .PercentBase.set(-11)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .InlineScripts.OnApply((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = ToPlayer(caster)
        if(!player) return

        if(player.HasAura(81404)){ //Mercilessness talent
            player.CastSpell(player, 81406, true) //cast Mercilessness rage energize
        }
    })
    .InlineScripts.OnBeforeCast((spell: { GetCaster: () => any; }) => {
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

        player.SetPower(1, 0) //clear rage
    })
    

//console.log(std.Spells.load(58567).objectify())