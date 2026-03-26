import { std } from "wow/wotlk"
import { AbilityCategory } from "../../Content/RaceClassData/CharClasses/blademaster/category"
import { MaskCon } from "wow/data/cell/cells/MaskCell"

export class BLOODLET_INFO {
    private Family = 511
    private ClassMask = 12
    private Name = "Blood Let"
    private Icon = "Spell_shadow_lifedrain"
    private Description = "Causes the target to bleed for $s1 physical damage every 3 seconds for $d1. Every time Blood Let deals damage, there is a chance that the cooldown of Fatality, Pierce, Shock Blade, and Blazing Strikes will reset."
    private AuraDescription = "$s1 damage every 3 seconds."
    private Visual = 372
    private CostType = 0  //0 = Mana, 1 = Rage, 2 = Pet Focus, 3 = Energy, 4 = Happiness, 5 = Runes, 6 = Runic Power
    private Cost = 8
    private SkillLine = AbilityCategory.Emp.getSkill()
    private Range = 2
    private DefenseType = 2
    private CastTime = 0
    private CoolDown = 0
    private GlobalCD = 1500
    private Duration = 18000
    private SchoolMask = 0
    private StackGroup = std.SpellStackGroups.create().StackRule.EXCLUSIVE.set()
    private Stacks = 1
    private FacingCasterFlags: MaskCon<"SPELL_FACING_FLAG_INFRONT"> = "SPELL_FACING_FLAG_INFRONT"

    public GetFamily() { return this.Family }
    public GetClassMask() { return this.ClassMask }
    public GetName() { return this.Name }
    public GetIcon() { return this.Icon }
    public GetDesc() { return this.Description }
    public GetAuraDesc() { return this.AuraDescription }
    public GetVisual() { return this.Visual }
    public GetCostType() { return this.CostType }
    public GetCost() { return this.Cost }
    public GetSkillLine() { return this.SkillLine }
    public GetRange() { return this.Range }
    public GetDefenseType() { return this.DefenseType }
    public GetCastTime() { return this.CastTime }
    public GetCoolDown() { return this.CoolDown }
    public GetGlobalCD() { return this.GlobalCD }
    public GetDuration() { return this.Duration }
    public GetStackGroup() { return this.StackGroup }
    public GetSchoolMask() { return this.SchoolMask }
    public GetFacingCasterFlags() { return this.FacingCasterFlags }
    public GetStacks() { return this.Stacks }
}

export const BLOODLET_OBJ = new BLOODLET_INFO() //create object