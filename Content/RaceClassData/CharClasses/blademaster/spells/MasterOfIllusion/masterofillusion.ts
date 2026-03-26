import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";

export const MSTRILN = std.Spells.create('shrek6', 'MSTRILN')
    .Name.enGB.set("Master of Illusion")
    .Icon.setPath("Spell_nature_callstorm")
    .Description.enGB.set("Mirror Image now summons an additional third image to attack the target.")
    .Subtext.enGB.set("Passive")
    .Attributes.IS_PASSIVE.set(1)
    .CastTime.set(0)
    .Range.set(0)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.DUMMY.set()
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .SkillLines.add(AbilityCategory.Exec.getSkill())