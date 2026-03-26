import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";
import { FTLTY } from "../Fatality/Fatality";


const VORTEX_VISUAL = std.Spells.create('shrek6', 'VORTEX_VISUAL')
    .Name.enGB.set("Vortex")
    .Icon.setPath("Spell_frost_windwalkon") 
    .Visual.set(8251) //old: 8251
    .CastTime.set(0)
    .Range.set(0)
    .Effects.addMod(x => x
        .Type.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )

export const SHOCKB = std.Spells.create('shrek6', 'chakra-burst')
    .Family.set(20)
    .ClassMask.setBit(21, 1)
    .Name.enGB.set("Shock Blade")
    .Icon.setPath("Ability_warrior_shockwave")
    .Description.enGB.set("Deals $s1% weapon damage plus 21 Nature damage to all nearby enemies and lowers their attack speed for 8 seconds. The effectiveness of Shock Blade increases for every 10 rage you have (caps at 60 rage). Consumes all of your rage.")
    //.Subtext.enGB.set("Rank 1")
    .Visual.set(223) //whirlwind visual id
    .Range.set(2) //melee
    .CastTime.set(0)
    .Cooldown.GlobalTime.set(1500)
    .Cooldown.Time.set(8000)
    .Mana.Type.RAGE.set()
    .Power.CostBase.set(150)
    .SchoolMask.setBit(0, 1)
    .Attributes.IS_ABILITY.set(true)
    .Attributes.MELEE_COMBAT_START.set(true)
    .DefenseType.set(2)
    .PreventionType.SILENCE.set()
    //50% weapon damage
    .Effects.addMod(x=>x
        .Type.WEAPON_PERCENT_DAMAGE.set()
        .DamagePctBase.set(69) // 70%
        .ImplicitTargetA.SRC_CASTER.set()
        .ImplicitTargetB.UNIT_SRC_AREA_ENEMY.set()
        .Radius.set(14)
    )
    //Attack Slow
    .Effects.addModTriggerSpell("shrek6", "chakra-silance", 0, x=>x
        //.Family.set(20)
        //.ClassMask.setBit(21, 1)
        .Name.enGB.set("Shock Blade")
        .Icon.setPath("Ability_warrior_shockwave")
        .Description.enGB.set("Shock Blade silence.")
        .AuraDescription.enGB.set("Attack speed lowered by $s1%.")
        //.Subtext.enGB.set("Rank 1")
        .Visual.set(7660) //Stormstrike visual id
        .Duration.setSimple(8000) //8 second silence duration
        .Range.setSimple(0, 5)
        .CastTime.set(0)
        .Cooldown.GlobalTime.set(1500)
        .SchoolMask.NATURE.set(1)
        .Attributes.IS_ABILITY.set(true)
        .Attributes.MELEE_COMBAT_START.set(true)
        .CustomAttributes.CAN_CRIT.set(1)
        .Effects.addMod(x=>x
            .Type.APPLY_AURA.set()
            .Aura.MELEE_SLOW.set()
            .PercentBase.set(-31)
            .ImplicitTargetA.SRC_CASTER.set()
            .ImplicitTargetB.UNIT_SRC_AREA_ENEMY.set()
            .Radius.set(14)
        )
    )
    //Nature damage w/ stromstrike visual
    .Effects.addModTriggerSpell("shrek6", "chakra-nova", 0, x=>x
        .Family.set(20)
        .ClassMask.setBit(21, 1)
        .Name.enGB.set("Shock Blade")
        .Icon.setPath("Ability_whirlwind")
        .Description.enGB.set("")
        .Subtext.enGB.set("Rank 1")
        .Visual.set(7660) //Stormstrike visual id
        .Range.setSimple(0, 5)
        .CastTime.set(0)
        .Cooldown.GlobalTime.set(1500)
        .SchoolMask.NATURE.set(1)
        .Attributes.IS_ABILITY.set(true)
        .Attributes.MELEE_COMBAT_START.set(true)
        .Effects.addMod(eff => eff
            .Type.SCHOOL_DAMAGE.set()
            .DamageBase.set(20)//21
            .ImplicitTargetA.SRC_CASTER.set()
            .ImplicitTargetB.UNIT_SRC_AREA_ENEMY.set()
            .Radius.set(14)
        )
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

        player.CastSpell(player, 81518, true)
        
        //depending on the amount of rage, cast set number of stacks of bloodrush
        //if(player.GetPowerPct(1) > 90) BRstacks = 8
        let BRstacks = 0

        if(player.GetPowerPct(1) > 60) BRstacks = 5
        else if(player.GetPowerPct(1) > 50) BRstacks = 4
        else if(player.GetPowerPct(1) > 40) BRstacks = 3
        else if(player.GetPowerPct(1) > 30) BRstacks = 2
        else if(player.GetPowerPct(1) > 20) BRstacks = 1

        for(let i = 0; i < BRstacks; i++){
            player.CastSpell(player, 81459, true)
        }
    })

SHOCKB.Cooldown.Category.set(FTLTY.ID)
SHOCKB.Cooldown.CategoryTime.set(12000)

SHOCKB.SkillLines.add(AbilityCategory.Ronin.getSkill())

SHOCKB.Rank.getFirstSpell()
//console.log(std.Spells.load(64757).Visual.get()) stormstrike visual
//console.log(std.Spells.load(1680).objectify()) whirlwind objectified
//console.log(std.Spells.load(22666).objectify())
//console.log(VORTEX_VISUAL.ID)