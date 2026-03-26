import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";
import { MIRROR_IMAGE_SUMMON } from "../../../../../NPCData/Summons/MirrorImage";


export const DECEPT = std.Spells.create('shrek6', 'DECEPT')
    .Name.enGB.set("Deception")
    .Icon.setPath("Spell_nature_massteleport") //og: Spell_nature_mirrorimage
    .Description.enGB.set("Go into Windwalk and summon a Mirror Image to take your place, causing enemies to attack the image instead for $d1. If the image dies, your enemies will be fooled and you will exit combat. \n\nIf you attack, cast, or are attacked, the Windwalk effect ends. This effect also increases your speed by $s3%. ")
    .AuraDescription.enGB.set("You are difficult to detect.")
    //.Subtext.enGB.set("Rank 1")
    .Visual.set(184)
    .CastTime.set(0)
    .Range.set(0)
    .Duration.setSimple(8000)
    .Cooldown.Time.set(120000)
    .Cooldown.GlobalTime.set(1500)
    //stealth attributes
    .Attributes.UNK3.set(1)
    .Attributes.STOP_ATTACKING.set(1)
    .Attributes.IS_ABILITY.set(1)
    //interrupt flags & dispels
    .AuraInterruptFlags.TAKE_DAMAGE.set(1)
    .AuraInterruptFlags.CAST.set(1)
    .AuraInterruptFlags.HIT_BY_SPELL.set(1)
    .AuraInterruptFlags.setBit(12, 1) //attacking cancels
    .DispelType.DISPEL_STEALTH.set()
    .CasterAuraState.Exclude.FAERIE_FIRE.set() //can't cast w/ faerie fire debuff
    .PreventionType.SILENCE.set()
    //clone spell
    .Effects.addModTriggerSpell("shrek6", "DECEPT-Summon-Clone", 0, x=>x
        .Name.enGB.set("Deception Clone")
        .Icon.setPath("Spell_nature_massteleport")
        .CastTime.set(0)
        .Range.set(0)
        .Duration.setSimple(8000)
        .Cooldown.GlobalTime.set(1500)
        .Effects.addMod(x=>x
            .Type.SUMMON.set()
            .SummonedCreature.set(MIRROR_IMAGE_SUMMON.ID)
            .SummonProperties.set(1021) //og: 1021
            .ImplicitTargetA.DEST_CASTER.set()
            .Radius.set(15)
        )
    )
    //stealth
    .Effects.addMod(x=>x 
        .Type.APPLY_AURA.set()
        .Aura.MOD_STEALTH.set()
        .School.NORMAL.set()
        .PointsBase.set(55)
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
    .InlineScripts.OnCast((spell) => {
        let caster = spell.GetCaster()

        if(!caster){
            return
        }

        let target = spell.GetTarget()

        let clone = caster.GetCreature(45015)
        
        //clone?.Attack(, true)
    })

DECEPT.SkillLines.add(AbilityCategory.Exec.getSkill())

DECEPT.Rank.getFirstSpell()

//DECEPT.Cooldown.Category.set(WINDWLK.ID)
//.Cooldown.CategoryTime.set(30000)

//console.log(std.CreatureTemplates.load(31216).objectify())

//Summon guard debug
//console.log(std.Spells.load(72972).objectify()) //summon properties: 2915

//stealth debug
//console.log(std.Spells.load(1784).objectify()) 
//console.log(std.Spells.load(1784).Visual.get()) 

//Mirror image debug
//console.log(std.Spells.load(55342).objectify()) mirror image
//console.log(std.Spells.load(58832).objectify()) mirror image trigger spell

//3 trigger spells from 58832 spell
//console.log(std.Spells.load(58833).objectify()) 
/*Effect:
* Type: SUMMON
* Summoned creature: 31216
* Summon Properties: 1021
* ImpTargetA: DEST_CASTER_RIGHT
* Radius: 15
*/
//console.log(std.Spells.load(58831).objectify())
//console.log(std.Spells.load(6603).objectify())