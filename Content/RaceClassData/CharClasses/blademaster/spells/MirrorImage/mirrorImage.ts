import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";
import { MIRROR_IMAGE_SUMMON } from "../../../../../NPCData/Summons/MirrorImage";

const SUMMON_0 = std.Spells.create("shrek6", "SUMMON_0")
    .Family.set(222)
    .ClassMask.setBit(22, 1)
    .Name.enGB.set("Mirror Image")
    .Icon.setPath("Spell_nature_mirrorimage")
    .Description.enGB.set("Cloned.")
    .AuraDescription.enGB.set("Cloned.")
    .Visual.set(72)
    .Duration.setSimple(8000)
    .Range.setSimple(0, 30)
    .CastTime.set(0)
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x=>x
        .Type.SUMMON.set()
        .SummonedCreature.set(MIRROR_IMAGE_SUMMON.ID)
        .SummonProperties.set(1021) //og: 1021
        .ImplicitTargetA.DEST_TARGET_RIGHT.set()
        .Radius.set(15)
    )
    .Effects.addMod(x=>x
        .Type.SUMMON.set()
        .SummonedCreature.set(MIRROR_IMAGE_SUMMON.ID)
        .SummonProperties.set(1021) //og: 1021
        .ImplicitTargetA.DEST_TARGET_LEFT.set()
        .Radius.set(15)
    )

const SUMMON_1 = std.Spells.create("shrek6", "SUMMON_1")
    .Family.set(222)
    .ClassMask.setBit(22, 1)
    .Name.enGB.set("Master of Illusion")
    .Icon.setPath("Spell_nature_callstorm")
    .Description.enGB.set("Additional image.")
    .AuraDescription.enGB.set("Additional image.")
    .Visual.set(72)
    .Duration.setSimple(8000)
    .Range.setSimple(0, 30)
    .CastTime.set(0)
    .Effects.addMod(x=>x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x=>x
        .Type.SUMMON.set()
        .SummonedCreature.set(MIRROR_IMAGE_SUMMON.ID)
        .SummonProperties.set(1021) //og: 1021
        .ImplicitTargetA.DEST_TARGET_BACK.set()
        .Radius.set(15)
    )

//console.log(std.Spells.load(59711).Visual.get())
//console.log("MASTER OF ILLUSION: ",std.Spells.ID(MSTRILN))
//console.log("ADDITIONAL SUMM: ",std.Spells.ID(SUMMON_1))


export const MRRIMG = std.Spells.create("shrek6", "MRRIMG")
    .Name.enGB.set("Mirror Image")
    .Icon.setPath("Spell_nature_mirrorimage")
    .Description.enGB.set("Summon 2 Mirror Images to surround the target and attack them for 8 sec.")
    //.Visual.set(74)
    .Range.setSimple(0, 5)
    .CastTime.set(0)
    //.Power.Type.set(3)
    //.Power.CostPercent.set(50)
    .Cooldown.Time.set(180000)
    .Power.Type.MANA.set()
    .Power.CostPercent.set(30)
    .FacingCasterFlags.SPELL_FACING_FLAG_INFRONT.set(1)
    .DispelType.DISPEL_MAGIC.set()
    .PreventionType.SILENCE.set()
    .Effects.addMod(x => x
        .Type.WEAPON_PERCENT_DAMAGE.set()
        .DamagePctBase.set(2)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .InlineScripts.OnAfterCast((spell) => {
        let caster = spell.GetCaster()
        if(!caster){return}

        let target = spell.GetTarget()
        if(!target){return}

        let playerCaster = ToPlayer(caster)
        if(!playerCaster) return

        if(!target.IsCreature() && !target.IsPlayer()){return}

        if(target.IsCreature()){
            let creature = ToCreature(target)
            if(!creature){return}

            caster.CastSpell(creature, 80985, true)

            if(playerCaster.HasAura(81331)){
                playerCaster.CastSpell(creature, 81333, true)
            }
        }

        if(target.IsPlayer()){
            let player = ToPlayer(target)
            if(!player){return}

            caster.CastSpell(player, 80985, true)

            if(playerCaster.HasAura(81331)){
                playerCaster.CastSpell(player, 81333, true)
            }
        }
    })

MRRIMG.SkillLines.add(AbilityCategory.Exec.getSkill())


MRRIMG.Cooldown.Category.set(MRRIMG.ID)
MRRIMG.Cooldown.CategoryTime.set(300000)