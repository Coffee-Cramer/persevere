import { MaskCon } from "wow/data/cell/cells/MaskCell"
import { AbilityCategory } from "../../Content/RaceClassData/CharClasses/blademaster/category"
import { SWIFTSTRIKE_VISUAL } from "../../Content/RaceClassData/CharClasses/blademaster/SpellVisuals/SwiftStrikeVisual"

export class VITIATE_INFO {
    private Family = null
    private ClassMask = null
    private Name = "Vitiate"
    private Icon = "Ability_rogue_slicedice" //Inv_spear_01  Ability_rogue_slicedice
    private Description = "A focused attack that deals weapon damage plus $s2 physical damage on your next swing."
    private AuraDescription = ""
    private Visual = SWIFTSTRIKE_VISUAL.ID
    private CostType = 0  //0 = Mana, 1 = Rage, 2 = Pet Focus, 3 = Energy, 4 = Happiness, 5 = Runes, 6 = Runic Power
    private Cost = 9
    private SkillLine = AbilityCategory.Ronin.getSkill()
    private Range = 2
    private DefenseType = 2
    private CastTime = 0
    private CoolDown = 5000
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

export const VTT = new VITIATE_INFO() //create object