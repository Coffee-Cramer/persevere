import { MaskCon } from "wow/data/cell/cells/MaskCell"
import { AbilityCategory } from "../../Content/RaceClassData/CharClasses/blademaster/category"
import { SWIFTSTRIKE_VISUAL } from "../../Content/RaceClassData/CharClasses/blademaster/SpellVisuals/SwiftStrikeVisual"

export class INCURSION_INFO {
    private Family = 15
    private ClassMask = 15
    private Name = "Incursion"
    private Icon = "Ability_warrior_weaponmastery"
    private Description = "Deals $s1% weapon damage and generates " //description continues in the incursion files
    private AuraDescription = ""
    private Visual = 372
    private CostType = 0  //0 = Mana, 1 = Rage, 2 = Pet Focus, 3 = Energy, 4 = Happiness, 5 = Runes, 6 = Runic Power
    private Cost = 0
    private SkillLine = AbilityCategory.Exec.getSkill()
    private Range = 2
    private DefenseType = 2
    private CastTime = 0
    private CoolDown = 12000
    private GlobalCD = 1500
    private SchoolMask = 0
    private StackGroup = 0
    private Stacks = null
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
    public GetGlobalCD() { return this.GlobalCD }
    public GetCoolDown() { return this.CoolDown }
    public GetStackGroup() { return this.StackGroup }
    public GetSchoolMask() { return this.SchoolMask }
    public GetFacingCasterFlags() { return this.FacingCasterFlags }
    public GetStacks() { return this.Stacks }
}

export const INCURSION_OBJ = new INCURSION_INFO() //create object