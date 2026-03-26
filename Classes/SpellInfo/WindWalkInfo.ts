import { MaskCon } from "wow/data/cell/cells/MaskCell"
import { AbilityCategory } from "../../Content/RaceClassData/CharClasses/blademaster/category"

export class WINDWALK_INFO {
    private Family = 22
    private ClassMask = 22
    private Name = "Windwalk"
    private Icon = "Spell_frost_windwalkon"
    private Description = "Become unseen like the wind for $d1. If you attack, cast, or are attacked, the stealth effect ends.\n \nThis effect also increases your speed by 30%. Cannot be used in combat."
    private AuraDescription = "You are difficult to detect."
    private Visual = 184
    private CostType = 0 //0 = Mana, 1 = Rage, 2 = Pet Focus, 3 = Energy, 4 = Happiness, 5 = Runes, 6 = Runic Power
    private Cost = 18
    private SkillLine = AbilityCategory.Exec.getSkill()
    private Range = 0
    private DefenseType = 0
    private CastTime = 0
    private Duration = 8000
    private CoolDown = 30000
    private GlobalCD = 1500
    private SchoolMask = null
    private StackGroup = 0
    private Stacks = null
    private FacingCasterFlags: MaskCon<"SPELL_FACING_FLAG_INFRONT"> = 0

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
    public GetGlobalCD() { return this.GlobalCD }
    public GetCoolDown() { return this.CoolDown }
    public GetStackGroup() { return this.StackGroup }
    public GetSchoolMask() { return this.SchoolMask }
    public GetFacingCasterFlags() { return this.FacingCasterFlags }
    public GetStacks() { return this.Stacks }
    public GetDuration() { return this.Duration }
}

export const WINDWALK_OBJ = new WINDWALK_INFO() //create object