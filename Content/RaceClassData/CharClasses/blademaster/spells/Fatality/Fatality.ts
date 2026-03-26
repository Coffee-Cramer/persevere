import { std } from "wow/wotlk";
import { AbilityCategory, Category } from "../../category";
import { BLDMSTR } from "../../blademaster";
import { FTLTYVIS } from "../../SpellVisuals/FatalityVisual";


export const FTLTY = std.Spells.create('shrek6', 'FTLTY')
    .Family.set(20)
    .ClassMask.setBit(21, 1)
    .Name.enGB.set("Fatality")
    .Icon.setPath("ability_criticalstrike") //og: ability_criticalstrike
    .Description.enGB.set("An instant attack that deals weapon damage. The effectiveness of Fatality increases for every 10 rage you have (caps at 60 rage). Consumes all of your rage.")
    //.Subtext.enGB.set("Rank 1")
    .CastTime.set(0) //instant
    .Range.set(2) //melee
    .Visual.set(FTLTYVIS.ID) 
    .Cooldown.GlobalTime.set(1500)//1 second 
    .Cooldown.Time.set(12000)
    .Power.Type.RAGE.set()
    .Power.CostBase.set(150) 
    .SchoolMask.setBit(0, 1)
    .FacingCasterFlags.set("SPELL_FACING_FLAG_INFRONT")
    .Attributes.MELEE_COMBAT_START.set(true) 
    .Attributes.IS_ABILITY.set(true)
    .Attributes.SHEATHE_UNCHANGED.set(true)
    .CustomAttributes.CAN_CRIT.set(1)
    .DefenseType.set(2)
    .Effects.addMod(eff => eff
        .Type.WEAPON_PERCENT_DAMAGE.set()
        .DamagePctBase.set(99)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .InlineScripts.OnHit((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = ToPlayer(caster)
        if(!player) return

        if(player.HasAura(81404)){ //Mercilessness talent
            player.CastSpell(player, 81406, true) //cast Mercilessness rage energize
        }

    })
    .InlineScripts.OnBeforeCast((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = ToPlayer(caster)
        if(!player) return

        let BRstacks = 0 //to determine the amount of stacks of Bloodrush

        //depending on the amount of rage, cast set number of stacks of bloodrush
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

FTLTY.Cooldown.Category.set(FTLTY.ID)
FTLTY.Cooldown.CategoryTime.set(12000)

FTLTY.SkillLines.add(AbilityCategory.Emp.getSkill())

std.Spells.load(FTLTY.ID).AutoLearn.add(1, BLDMSTR.Mask) //learn at lvl 1


//console.log(std.Spells.ID(RUSHOFBATTLE_BUFF))

//console.log("BLOODRUSH:", BLOODRUSH.ID)
//console.log("BLOODRUSH2:", BLOODRUSH2.ID)
//console.log("BLOODRUSH3:", BLOODRUSH3.ID)