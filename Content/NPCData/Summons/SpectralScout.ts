import { std } from "wow/wotlk";

export const SCOUTING_BIRD_NPC = std.CreatureTemplates.create("shrek6", "SCOUTING_BIRD_NPC", 4277) 
    .Name.enGB.set("Spectral Scout")
    .Level.set(1, 1)
    .Models.clearAll()
    .Models.addIds(16428) //model id: 3441
    .AttackTime.set(0)
    .PetSpells.set(42347)
    .FlagsExtra.CANNOT_ENTER_COMBAT.set(1)
    .Type.BEAST.set()
    .FlagsExtra.GHOST_VISIBILITY.set(1)
    .UnitFlags.CAN_SWIM.set(1)
    .UnitFlags.PACIFIED.set(1)
    .AIName.SmartAI()
    