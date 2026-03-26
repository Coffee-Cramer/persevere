import { std } from "wow/wotlk";
import { NECRO } from "../necro";

//console.log(std.Spells.load(688).objectify())
//console.log(std.CreatureTemplates.load(10801).objectify())

export const NECROPET8 = std.CreatureTemplates.create('shrek6', 'NECROPET8')
    .Name.enGB.set("Risen Zombie")
    .Models.clearAll()
    .Models.addIds(10973) //skeletal warrior: 200
                          //ghoul: 10487
                          //skeleton: 11400
                          //zombie: 10973
    .Scale.set(1)
    .MovementSpeed.set(1)
    .Stats.DamageMod.set(3)
    .UnitClass.WARRIOR.set() 
    .UnitFlags.PACIFIED.set(1)
    .Stats.HealthMod.set(0.2) 
    .Rank.NORMAL.set()
    .Stats.ManaMod.set(0)
    .AIName.PetAI()
    //.Weapons.add(853)
    .Type.UNDEAD.set()
    .InlineScripts.OnJustEnteredCombat((npc) => {
        let cntrlr = npc.GetController()
        if(!cntrlr) return

        if(!cntrlr.IsInCombat()){
            npc.ClearInCombat()
        }
    })
    .InlineScripts.OnDeath((npc) => {
        npc.DespawnOrUnsummon(3000)
    })

const NECROPETINSTC = std.CreatureInstances.load(NECROPET8.ID)
    NECROPETINSTC
        .EquipmentID.set(1)
    

const RAISEDEAD_SUMMON = std.Spells.create('shrek6', 'RAISEDEAD_SUMMON')
    .Name.enGB.set("Raise Dead")
    .Icon.setPath('spell_shadow_animatedead')
    .CastTime.setSimple(0)
    .Range.setSimple(0, 30)
    .Duration.set(21)
    .Visual.set(std.Spells.load(5138).Visual.get())
    .Effects.addMod(x => x
        .Type.SUMMON.set()
        .SummonedCreature.set(NECROPET8.ID) 
        .SummonProperties.set(61) //61 = guardian, 67 = pet (has pet bar too), 
        .ImplicitTargetA.DEST_CASTER_LEFT.set()
    )

const RAISEDEAD_SUMMON2 = std.Spells.create('shrek6', 'RAISEDEAD_SUMMON2')
    .Name.enGB.set("Raise Dead")
    .Icon.setPath('spell_shadow_animatedead')
    .CastTime.setSimple(0)
    .Range.setSimple(0, 30)
    .Duration.set(21)
    .Visual.set(std.Spells.load(5138).Visual.get())
    .Effects.addMod(x => x
        .Type.SUMMON.set()
        .SummonedCreature.set(NECROPET8.ID) 
        .SummonProperties.set(61) 
        .ImplicitTargetA.DEST_CASTER_BACK.set()
    )

const RAISEDEAD_SUMMON3 = std.Spells.create('shrek6', 'RAISEDEAD_SUMMON3')
    .Name.enGB.set("Raise Dead")
    .Icon.setPath('spell_shadow_animatedead')
    .CastTime.setSimple(0)
    .Range.setSimple(0, 30)
    .Duration.set(21)
    .Visual.set(std.Spells.load(5138).Visual.get())
    .Effects.addMod(x => x
        .Type.SUMMON.set()
        .SummonedCreature.set(NECROPET8.ID) 
        .SummonProperties.set(61) 
        .ImplicitTargetA.DEST_CASTER_RIGHT.set()
    )

const RAISEDEAD_SUMMON4 = std.Spells.create('shrek6', 'RAISEDEAD_SUMMON4')
    .Name.enGB.set("Raise Dead")
    .Icon.setPath('spell_shadow_animatedead')
    .CastTime.setSimple(0)
    .Range.setSimple(0, 30)
    .Duration.set(21)
    .Visual.set(std.Spells.load(5138).Visual.get())
    .Effects.addMod(x => x
        .Type.SUMMON.set()
        .SummonedCreature.set(NECROPET8.ID) 
        .SummonProperties.set(61) 
        .ImplicitTargetA.DEST_CASTER_BACK_LEFT.set()
    )

const RAISEDEAD_SUMMON5 = std.Spells.create('shrek6', 'RAISEDEAD_SUMMON5')
    .Name.enGB.set("Raise Dead")
    .Icon.setPath('spell_shadow_animatedead')
    .CastTime.setSimple(0)
    .Range.setSimple(0, 30)
    .Duration.set(21)
    .Visual.set(std.Spells.load(5138).Visual.get())
    .Effects.addMod(x => x
        .Type.SUMMON.set()
        .SummonedCreature.set(NECROPET8.ID) 
        .SummonProperties.set(61) 
        .ImplicitTargetA.DEST_CASTER_BACK_RIGHT.set()
    )
    
//console.log("RAISEDEAD_SUMMON ", RAISEDEAD_SUMMON.ID)
//console.log("RAISEDEAD_SUMMON2 ", RAISEDEAD_SUMMON2.ID)
//console.log("RAISEDEAD_SUMMON3 ", RAISEDEAD_SUMMON3.ID)
//console.log("RAISEDEAD_SUMMON4 ", RAISEDEAD_SUMMON4.ID)
//console.log("RAISEDEAD_SUMMON5 ", RAISEDEAD_SUMMON5.ID)

export const RAISEDEAD = std.Spells.create('shrek6', 'RAISEDEAD')
    .Name.enGB.set("Raise Dead")
    .Icon.setPath('spell_shadow_raisedead')
    .Description.enGB.set("Raise a nearby humanoid or undead corpse as a zombie that fights for you. \n\n  level 1 : 2 zombies max \n  level 20: 3 zombies max\n  level 40: 4 zombies max")
    .CastTime.setSimple(3000)
    .Range.setSimple(0, 30)
    .Visual.set(std.Spells.load(172).Visual.get()) //5138 drain mana spell, 172 corruption spell
    .Attributes.CAN_TARGET_DEAD.set(1)
    .InterruptFlags.ON_MOVEMENT.set(1)
    .InterruptFlags.ON_INTERRUPT_CAST.set(1)
    .InterruptFlags.ON_INTERRUPT.set(1)
    .InterruptFlags.ON_PUSHBACK.set(1)
    .Power.Type.MANA.set()
    .Power.CostPercent.set(15)
    .Cooldown.GlobalTime.set(1500)
    .Cooldown.Time.set(3000)
    .SchoolMask.SHADOW.set(1)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_DUMMY.set()
        .AuraPeriod.set(3000)
        .ImplicitTargetA.UNIT_TARGET_ENEMY.set()
    )
    .InlineScripts.OnAfterCast((spell)=> {
        let caster = spell.GetCaster()
        if(!caster) return

        let target = spell.GetTarget()
        if(!target) return

        let creature = target.ToCreature()
        if(!creature) return

        let player = caster.ToPlayer()
        if(!player) return

        if(creature.IsDead()){
            if(creature.GetCreatureType() == 6.0 || creature.GetCreatureType() == 7.0){ //if undead or humanoid
                let controlled = player.GetControlled()
                if(!controlled) return

                let count = 0 //MINION COUNTER

                //LIMIT AMOUNT OF MINIONS
                controlled.forEach((cntrld) => {
                    if(cntrld.GetName() != "Ghoul") count++ //NORMAL PET DOESN'T COUNT FOR LIMIT

                    let cntrldCreature = cntrld.ToCreature()
                    if(!cntrldCreature) return

                    if(count > 2){
                        if(cntrld.GetName() != "Ghoul") cntrldCreature.DespawnOrUnsummon(1)
                    }
                })

                if(creature.GetLootRecipient() == player){ //IF CORPSE IS LOOTABLE TO THE PLAYER
                    //if(count == 3){
                        //caster.CastSpell(caster, 81574, true)
                    //}
                    //else if(count == 2){
                        //caster.CastSpell(caster, 81573, true)
                    //}
                    if(count == 1){
                        caster.CastSpell(caster, 81572, true)
                        creature.DespawnOrUnsummon(1)
                    }
                    else if(count == 0){
                        caster.CastSpell(caster, 81569, true)
                        creature.DespawnOrUnsummon(1)
                    }
                }
            }
        }
    })

std.Spells.load(RAISEDEAD.ID).AutoLearn.add(1, NECRO.Mask)