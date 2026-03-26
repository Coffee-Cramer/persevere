import { std } from "wow/wotlk";


const SHATTER3 = std.Spells.create("shrek6", "SHATTER3")
    .Family.set(222)
    .ClassMask.setBit(22, 1)
    .Name.enGB.set("Shatter (Rank 3)")
    .Icon.setPath("Spell_nature_wispsplode")
    .Visual.set(std.Spells.load(65955).Visual.get())
    .Range.setSimple(0, 15)
    .CastTime.set(0)
    .Effects.addMod(x => x
        .Type.WEAPON_PERCENT_DAMAGE.set()
        .Percentage.set(249)
        .ImplicitTargetA.SRC_CASTER.set()
        .ImplicitTargetB.UNIT_SRC_AREA_ENEMY.set()
        .Radius.set(14)
    )


const SHATTER_PERIODIC3 = std.Spells.create("shrek6", "SHATTER_PERIODIC3")
    .Name.enGB.set("Shattering")
    .Icon.setPath("Spell_nature_wispsplode")
    .Duration.setSimple(10000)
    .Range.set(0)
    .CastTime.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.PERIODIC_TRIGGER_SPELL.set()
        .AuraPeriod.set(7500)
        .TriggerSpell.set(SHATTER3.ID)
        .ImplicitTargetA.UNIT_CASTER.set()
    )