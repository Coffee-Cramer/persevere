import { std } from "wow/wotlk";

// *************************************************************************
// * Flurry
// ************************************************************************/
//RANK 1
const CRASHOUTEFFECT = std.Spells.create("shrek6", "crashout-effect", 12966)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 1")
CRASHOUTEFFECT.Effects.get(0).PointsBase.set(4)//5

const CRASHOUT = std.Spells.create("shrek6", "crashout", 12319)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 1")
    .Description.enGB.set("When you critical strike, you gain 5% increased attack speed for your next 3 attacks.")
CRASHOUT.Effects.get(0).TriggerSpell.set(CRASHOUTEFFECT.ID)

//RANK 2
const CRASHOUTEFFECT2 = std.Spells.create("shrek6", "crashout-effect2", 12966)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 2")
CRASHOUTEFFECT2.Effects.get(0).PointsBase.set(9)//10

const CRASHOUT2 = std.Spells.create("shrek6", "crashout2", 12319)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 2")
    .Description.enGB.set("When you critical strike, you gain 10% increased attack speed for your next 3 attacks.")
CRASHOUT2.Effects.get(0).TriggerSpell.set(CRASHOUTEFFECT2.ID)

//RANK 3
const CRASHOUTEFFECT3 = std.Spells.create("shrek6", "crashout-effect3", 12966)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 3")
CRASHOUTEFFECT3.Effects.get(0).PointsBase.set(14)//15

const CRASHOUT3 = std.Spells.create("shrek6", "crashout3", 12319)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 3")
    .Description.enGB.set("When you critical strike, you gain 15% increased attack speed for your next 3 attacks.")
CRASHOUT3.Effects.get(0).TriggerSpell.set(CRASHOUTEFFECT3.ID)


//RANK 4
const CRASHOUTEFFECT4 = std.Spells.create("shrek6", "crashout-effect4", 12966)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 4")
CRASHOUTEFFECT4.Effects.get(0).PointsBase.set(19)//20

const CRASHOUT4 = std.Spells.create("shrek6", "crashout4", 12319)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 4")
    .Description.enGB.set("When you critical strike, you gain 20% increased attack speed for your next 3 attacks.")
CRASHOUT4.Effects.get(0).TriggerSpell.set(CRASHOUTEFFECT4.ID)

//RANK 5
const CRASHOUTEFFECT5 = std.Spells.create("shrek6", "crashout-effect5", 12966)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 5")
CRASHOUTEFFECT5.Effects.get(0).PointsBase.set(24)//25

const CRASHOUT5 = std.Spells.create("shrek6", "crashout5", 12319)
    .Name.enGB.set("Flurry")
    .Icon.setPath("Ability_warrior_innerrage")
    .Subtext.enGB.set("Rank 5")
    .Description.enGB.set("When you critical strike, you gain 25% increased attack speed for your next 3 attacks.")
CRASHOUT5.Effects.get(0).TriggerSpell.set(CRASHOUTEFFECT5.ID)

const CRSHOUT_TALENT = TALENT_TREE3.Talents
    .addSpellsGet('shrek6', 'crashout-talent', 5)
    .Position.set(3, 0)
    .Spells.set(0, CRASHOUT.ID)
    .Spells.set(1, CRASHOUT2.ID)
    .Spells.set(2, CRASHOUT3.ID)
    .Spells.set(3, CRASHOUT4.ID)
    .Spells.set(4, CRASHOUT5.ID)