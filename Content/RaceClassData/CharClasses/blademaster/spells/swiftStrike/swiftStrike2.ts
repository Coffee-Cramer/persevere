import { std } from "wow/wotlk";
import { SWFTSTK} from "./swiftStrike";
import { AbilityCategory } from "../../category";
import { SWIFTSTRIKE_VISUAL } from "../../SpellVisuals/SwiftStrikeVisual";
import { SWFITSTRIKE_OBJ } from "../../../../../../Classes/SpellInfo/swiftStrikeInfo";

export const SWFTSTK2 = std.Spells.create('shrek6', 'SWFTSTK2')
    .Attributes.MELEE_COMBAT_START.set(true)
    .Attributes.IS_ABILITY.set(true)
    .Attributes.SHEATHE_UNCHANGED.set(1)
    .CustomAttributes.CAN_CRIT.set(1)
    .Subtext.enGB.set('Rank 2')
    .Family.set(SWFITSTRIKE_OBJ.GetFamily())
    .ClassMask.setBit(SWFITSTRIKE_OBJ.GetClassMask(), 1)
    .Name.enGB.set(SWFITSTRIKE_OBJ.GetName())
    .Icon.setPath(SWFITSTRIKE_OBJ.GetIcon()) 
    .Description.enGB.set(SWFITSTRIKE_OBJ.GetDesc())
    .Visual.set(SWFITSTRIKE_OBJ.GetVisual())
    .CastTime.set(SWFITSTRIKE_OBJ.GetCastTime()) //instant
    .Range.set(SWFITSTRIKE_OBJ.GetRange()) //melee
    .Cooldown.GlobalTime.set(SWFITSTRIKE_OBJ.GetGlobalCD())//1 second
    .Cooldown.Time.set(SWFITSTRIKE_OBJ.GetCoolDown())
    .Mana.Type.set(SWFITSTRIKE_OBJ.GetCostType()) 
    .Power.CostPercent.set(SWFITSTRIKE_OBJ.GetCost())
    .FacingCasterFlags.set(SWFITSTRIKE_OBJ.GetFacingCasterFlags())
    .DefenseType.set(SWFITSTRIKE_OBJ.GetDefenseType())
    .Effects.addMod(eff => eff 
        .Type.WEAPON_DAMAGE.set()
        //.DamagePctBase.set(49)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .Effects.addMod(eff => eff //do 9 physical damage
        .Type.SCHOOL_DAMAGE.set()
        .DamageBase.set(8) 
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .Duration.setSimple(0)
    .Effects.addModTriggerSpell('shrek6', 'SWIFTSTRIKE_ENRAGE2', 0, eff => eff //grant 9 rage
        .Name.enGB.set("Rage")
        .Icon.set(1)
        .CastTime.set(0)
        .Range.set(0)
        .Effects.addMod(eff => eff 
            .Type.ENERGIZE.set()
            .PowerType.RAGE.set()
            .PowerBase.set(90)
            .ImplicitTargetA.UNIT_CASTER.set()
        )
    )
    .InlineScripts.OnHit((spell) => {
        let caster = spell.GetCaster()
        if(!caster) return
        
        //caster.CastSpell(caster, 80903, true)

        let player = ToPlayer(caster)
        if(!player) return

        if(player.HasAura(81366)) //Subtle Strikes (rank 1) talent
        {
            let rndm = getRandomNumber(1, 10)

            if(rndm == 1){
                caster.CastSpell(caster, 80903, true)
            }
        }

        if(player.HasAura(81367)) //Subtle Strikes (rank 2) talent
        {
            let rndm = getRandomNumber(1, 8)

            if(rndm == 1){
                caster.CastSpell(caster, 80903, true)
            }
        }

        if(player.HasAura(81368)) //Subtle Strikes (rank 3) talent
        {
            let rndm = getRandomNumber(1, 6)

            if(rndm == 1){
                caster.CastSpell(caster, 80903, true)
            }
        }

        if(player.HasAura(81369)) //Subtle Strikes (rank 4) talent
        {
            let rndm = getRandomNumber(1, 4)

            if(rndm == 1){
                caster.CastSpell(caster, 80903, true)
            }
        }

        if(player.HasAura(81370)) //Subtle Strikes (rank 5) talent
        {
            let rndm = getRandomNumber(1, 2)

            if(rndm == 1){
                caster.CastSpell(caster, 80903, true)
            }
        }
        
        function getRandomNumber(min: number, max: number){
            min = Math.ceil(min)
            max = Math.ceil(max)

            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    })
SWFTSTK2.Rank.set(SWFTSTK.ID, 2)
SWFTSTK2.SkillLines.add(AbilityCategory.Ronin.getSkill())