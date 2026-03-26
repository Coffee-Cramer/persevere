import { std } from "wow/wotlk";
import { MECHANICS } from "../../../../../../Enumerators&Arrays/mechanic_immunity_list";
import { AbilityCategory } from "../../category";

const CC_MECHANICS = [
    MECHANICS.charm, 
    MECHANICS.disornt, 
    MECHANICS.disarm, 
    MECHANICS.distrct, 
    MECHANICS.fear, 
    MECHANICS.root, 
    MECHANICS.snare, 
    MECHANICS.sleep, 
    MECHANICS.stun, 
    MECHANICS.freeze, 
    MECHANICS.Knckout, 
    MECHANICS.plymrph, 
    MECHANICS.horror, 
    MECHANICS.sap,
    MECHANICS.daze
]


export const BLDESTORM = std.Spells.create('shrek6', 'blade-storm', 9632)
    .Cooldown.Time.set(180000)
    .Cooldown.GlobalTime.set(1500)
    .Subtext.clear()
    .Duration.setSimple(7000)
    .Description.enGB.set("Causes a bladestorm of destructive force around the Blademaster, freeing them from any bonds or snares and rendering them immune to magic. Bladestorm causes weapon damage plus an additional 5 to nearby enemies every 1.4 sec for $d1. Your movement speed is slowed by $s3% while under this effect.")

BLDESTORM.Effects.get(0)
    .AuraPeriod.set(1400)
    .Radius.setSimple(5)


BLDESTORM.Effects.get(1).clear()

BLDESTORM.Effects.addMod(x => x
    .Type.APPLY_AURA.set()
    //.Aura.MECHANIC_IMMUNITY_MASK.set()
    //.Mechanics.set(CC_MECHANICS)
    .Aura.SCHOOL_IMMUNITY.set()
    .Schools.add(['ARCANE', 'FIRE', 'FROST', 'HOLY', 'NATURE', 'SHADOW'])
    .ImplicitTargetA.UNIT_CASTER.set()
)
BLDESTORM.Effects.addMod(x => x
    .Type.APPLY_AURA.set()
    .Aura.MOD_DECREASE_SPEED.set()
    .PercentBase.set(-31)
    .ImplicitTargetA.UNIT_CASTER.set()
)
BLDESTORM.InlineScripts.OnAfterCast((spell) => { //Trigger Cast Escape Artist 
    let caster = spell.GetCaster()
    if(!caster) return
    caster.CastSpell(caster, 20589, true)
})

std.Spells.load(9633).Effects.get(0).Radius.setSimple(5)

//console.log("BLADESTORM: ", BLDESTORM.ID)
//console.log(std.Spells.load(9633).objectify())
BLDESTORM.SkillLines.add(AbilityCategory.Ronin.getSkill())