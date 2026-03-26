import { std } from "wow/wotlk";
import { WINDWLK } from "../windWalk/windWalk";
import { AbilityCategory } from "../../category";


export const SCTRY_WINDWLK = std.Spells.create('shrek6', 'SCTRY_WINDWLK')
    .Family.set(22)
    .ClassMask.setBit(22, 1)
    .Name.enGB.set("Windwalk")
    .Icon.setPath("ability_blademaster_sanctuary_of_wind") 
    .AuraDescription.enGB.set("You are difficult to detect.")
    .Visual.set(184)
    .CastTime.set(0)
    .Range.set(0)
    .Duration.setSimple(5000)
    .Cooldown.Time.set(30000)
    .Cooldown.GlobalTime.set(1500)
    .Mana.Type.ENERGY.set()
    //stealth attributes
    .Attributes.UNK3.set(1)
    .Attributes.STOP_ATTACKING.set(1)
    .Attributes.IS_ABILITY.set(1)
    .Attributes.CANNOT_USE_IN_COMBAT.set(1)
    //interrupt flags & dispels
    .AuraInterruptFlags.TAKE_DAMAGE.set(1)
    .AuraInterruptFlags.CAST.set(1)
    .AuraInterruptFlags.HIT_BY_SPELL.set(1)
    .AuraInterruptFlags.setBit(12, 1) //attacking cancels
    .AuraInterruptFlags.add(1024) //TALK
    .AuraInterruptFlags.add(131072) //MOUNT
    .AuraInterruptFlags.add(32768) //TRANSFORM
    .DispelType.DISPEL_STEALTH.set()
    .CasterAuraState.Exclude.FAERIE_FIRE.set() //can't cast w/ faerie fire debuff
    .PreventionType.SILENCE.set()
    //stealth
    .Effects.addMod(x=>x 
        .Type.APPLY_AURA.set()
        .Aura.MOD_STEALTH.set()
        .School.NORMAL.set()
        .PointsBase.set(5)
        .PointsDieSides.set(1)
        .PointsPerLevel.set(5)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    //movement speed increase
    .Effects.addMod(x=>x 
        .Type.APPLY_AURA.set()
        .Aura.MOD_INCREASE_SPEED.set()
        .PercentBase.set(29)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .InlineScripts.OnAfterCast((wndwlk) => {
        let caster = wndwlk.GetCaster()
        if(!caster) return

        caster.CastSpell(caster, 81018, true) //windwalk visual

        let player = ToPlayer(caster)
        if(!player) return

        if(player.IsInCombat()){
            player.ClearInCombat()
        }
    })

SCTRY_WINDWLK.Cooldown.Category.set(WINDWLK.ID)
.Cooldown.CategoryTime.set(30000)



export const SCTRY_PERIODIC_SPELL = std.Spells.create('shrek6', 'SCTRY_PERIODIC_SPELL')
    .Name.enGB.set("Sanctuary of Wind")
    .Description.enGB.set("Drop combat.")
    .Icon.setPath("Spell_nature_invisibilty")
    .Range.set(0)
    .CastTime.setSimple(0)
    .Effects.addMod(x => x
        .Type.SANCTUARY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )


export const SCTRY1 = std.Spells.create('shrek6', 'SCTRY1')
    .Name.enGB.set("Sanctuary of Wind")
    .Description.enGB.set("The Blademaster is removed from combat and enters into a Windwalking state for 5 sec.")
    .AuraDescription.enGB.set("Immunity.")
    .Icon.setPath("ability_blademaster_sanctuary_of_wind")
    .Subtext.enGB.set("Rank 1")
    .Duration.setSimple(2000)
    .Range.set(0)
    .CastTime.setSimple(0)
    .Cooldown.Time.set(180000)
    .Cooldown.GlobalTime.set(1500)
    .Visual.set(72)
    .InterruptFlags.ON_MOVEMENT.set(1)
    .InterruptFlags.ON_INTERRUPT.set(1)
    .InterruptFlags.ON_PUSHBACK.set(1)
    .InterruptFlags.ON_INTERRUPT_CAST.set(1)
    .PreventionType.SILENCE.set()
    .Attributes.START_PERIODIC_AT_APPLY.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_TRIGGER_SPELL.set()
        .AuraPeriod.set(500)
        .TriggerSpell.set(SCTRY_PERIODIC_SPELL.ID)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(eff => eff
        .Type.APPLY_AURA.set()
        .Aura.SCHOOL_IMMUNITY.set()
        .Schools.set(127)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x=>x 
        .Type.FORCE_CAST_WITH_VALUE.set()
        .TriggerSpell.set(SCTRY_WINDWLK.ID)
        .PointsBase.set(29)
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .SkillLines.add(AbilityCategory.Exec.getSkill())
    .InlineScripts.OnAfterCast((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = ToPlayer(caster)
        if(!player) return

        if(player.HasAura(81375)){ //Great Escape (Rank 1) talent
            let rndm = getRandomNumber(1, 2) //50% chance

            if(rndm == 1){
                caster.CastSpell(caster, 20589, true) //trigger Escape Artist
            }
        }

        if(player.HasAura(81376)){ //Great Escape (Rank 2) talent
            caster.CastSpell(caster, 20589, true) //trigger Escape Artist
        }


        function getRandomNumber(min: number, max: number){
            min = Math.ceil(min)
            max = Math.ceil(max)

            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    })

SCTRY1.Cooldown.Category.set(SCTRY1.ID)
.Cooldown.CategoryTime.set(180000)



export const SCTRY2 = std.Spells.create('shrek6', 'SCTRY2')
    .Name.enGB.set("Sanctuary of Wind")
    .Description.enGB.set("The Blademaster and all party members within 20 yards are removed from combat and enter into a Windwalking state for 5 sec.")
    .AuraDescription.enGB.set("Immunity.")
    .Icon.setPath("ability_blademaster_sanctuary_of_wind")
    //.Subtext.enGB.set("Rank 2")
    .Duration.setSimple(2000)
    .Range.setSimple(0, 20)
    .CastTime.setSimple(5000)
    .Cooldown.Time.set(300000)
    .Cooldown.GlobalTime.set(1500)
    .Visual.set(72)
    .InterruptFlags.ON_MOVEMENT.set(1)
    .InterruptFlags.ON_INTERRUPT.set(1)
    .InterruptFlags.ON_PUSHBACK.set(1)
    .InterruptFlags.ON_INTERRUPT_CAST.set(1)
    .PreventionType.SILENCE.set()
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_TRIGGER_SPELL.set()
        .AuraPeriod.set(500)
        .TriggerSpell.set(SCTRY_PERIODIC_SPELL.ID)
        .ImplicitTargetA.UNIT_SRC_AREA_PARTY.set()
        .Radius.setSimple(20)
    )
    .Effects.addMod(eff => eff
        .Type.APPLY_AURA.set()
        .Aura.SCHOOL_IMMUNITY.set()
        .Schools.set(127)
        .ImplicitTargetA.UNIT_SRC_AREA_PARTY.set()
        .Radius.setSimple(20)
    )
    .Effects.addMod(x=>x 
        .Type.FORCE_CAST_WITH_VALUE.set()
        .TriggerSpell.set(SCTRY_WINDWLK.ID)
        .PointsBase.set(29)
        .ImplicitTargetA.UNIT_SRC_AREA_PARTY.set()
        .Radius.setSimple(20)
    )
    .SkillLines.add(AbilityCategory.Exec.getSkill())
    .InlineScripts.OnAfterCast((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return

        let player = ToPlayer(caster)
        if(!player) return

        if(player.HasAura(81375)){ //Great Escape (Rank 1) talent
            let rndm = getRandomNumber(1, 2) //50% chance

            if(rndm == 1){
                caster.CastSpell(caster, 20589, true) //trigger Escape Artist
            }
        }

        if(player.HasAura(81376)){ //Great Escape (Rank 2) talent
            caster.CastSpell(caster, 20589, true) //trigger Escape Artist
        }


        function getRandomNumber(min: number, max: number){
            min = Math.ceil(min)
            max = Math.ceil(max)

            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    })

SCTRY2.Cooldown.Category.set(SCTRY1.ID)
.Cooldown.CategoryTime.set(180000)
    
//console.log(std.Spells.ID(SCTRY2))
//console.log(SCTRY2.objectify())