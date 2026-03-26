import { std } from "wow/wotlk";
import { AbilityCategory } from "../../category";

export const WNDSTP = std.Spells.create('shrek6', 'WNDSTP', 58470) 
    .Name.enGB.set("Windstep")
    .Icon.setPath("Spell_nature_cyclone")
    .Visual.set(8262) //shadowstep visual
    .Attributes.MELEE_COMBAT_START.set(1)
    .Attributes.CANT_TARGET_SELF.set(1)
    .Cooldown.Time.set(30000)
    .Cooldown.GlobalTime.set(0)
    .PreventionType.SILENCE.set()

WNDSTP.SkillLines.add(AbilityCategory.Exec.getSkill())