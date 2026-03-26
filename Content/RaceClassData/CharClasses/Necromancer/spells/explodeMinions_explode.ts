import { std } from "wow/wotlk";

export const EXPLDMNN_EXPLODE2 = std.Spells.create('shrek6', 'sdadggs') 
    .Icon.set(std.Spells.load(17616).Icon.get())  
    .Name.enGB.set("Explode Minions")
    .SchoolMask.NATURE.set(1)
    .Description.enGB.set("Detonate, the impact deals $s1 Nature damage to all enemies within 10 yards.")
    .CastTime.setSimple(0)
    .Range.set(0)
    .Duration.set(0)
    .Cooldown.GlobalTime.set(1500)
    .Cooldown.Time.set(6000)
    .Visual.set(11080) //basic corpse explosion visual by blizz
    .Effects.addMod(x => x
        .Type.SCHOOL_DAMAGE.set()
        .DamageBase.set(22)
        .ImplicitTargetA.SRC_CASTER.set()
        .ImplicitTargetB.UNIT_SRC_AREA_ENEMY.set()
        .Radius.set(13)
    )
    .Effects.addMod(x => x
        .Type.INSTAKILL.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )