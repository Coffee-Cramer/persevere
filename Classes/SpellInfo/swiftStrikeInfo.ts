import { MaskCon } from "wow/data/cell/cells/MaskCell"
import { std } from "wow/wotlk"
import { AbilityCategory } from "../../Content/RaceClassData/CharClasses/blademaster/category"
import { SWIFTSTRIKE_VISUAL } from "../../Content/RaceClassData/CharClasses/blademaster/SpellVisuals/SwiftStrikeVisual"

export class SWIFTSTRIKE_INFO {
        private Family = 35
        private ClassMask = 35
        private Name = "Slice"
        private Icon = "Ability_rogue_feint"
        private Description = "An instant strike that deals weapon damage plus $s2 physical damage to the target and generates 9 rage."
        private AuraDescription = ""
        private Visual = SWIFTSTRIKE_VISUAL.ID
        private CostType = 0  //0 = Mana, 1 = Rage, 2 = Pet Focus, 3 = Energy, 4 = Happiness, 5 = Runes, 6 = Runic Power
        private Cost = 8
        private SkillLine = AbilityCategory.Ronin.getSkill()
        private Range = 2
        private DefenseType = 2
        private CastTime = 0
        private CoolDown = 7000
        private GlobalCD = 1500
        private Duration = 0
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
        public GetCoolDown() { return this.CoolDown }
        public GetGlobalCD() { return this.GlobalCD }
        public GetDuration() { return this.Duration }
        public GetStackGroup() { return this.StackGroup }
        public GetSchoolMask() { return this.SchoolMask }
        public GetFacingCasterFlags() { return this.FacingCasterFlags }
        public GetStacks() { return this.Stacks }
}

export const SWFITSTRIKE_OBJ = new SWIFTSTRIKE_INFO() //create object