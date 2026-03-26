import { std } from "wow/wotlk";
import { setRidingSkills4060 } from "../../Functions/setRidingSkills40-60";

//HUMAN
const HUMAN_RIDING_NPC = std.CreatureTemplates.load(4732) 
const HUMANTRAINER = HUMAN_RIDING_NPC.Trainer.getRef()

//NELF
const NELF_RIDING_NPC = std.CreatureTemplates.load(4753) 
const NELFTRAINER = NELF_RIDING_NPC.Trainer.getRef()

//DWARF
const DWARF_RIDING_NPC = std.CreatureTemplates.load(4772) 
const DWARFTRAINER = DWARF_RIDING_NPC.Trainer.getRef()

//GNOME
const GNOME_RIDING_NPC = std.CreatureTemplates.load(7954) 
const GNOMETRAINER = GNOME_RIDING_NPC.Trainer.getRef()

//ORC
const ORC_RIDING_NPC = std.CreatureTemplates.load(4752) 
const ORCTRAINER = ORC_RIDING_NPC.Trainer.getRef()

//UNDEAD
const UNDEAD_RIDING_NPC = std.CreatureTemplates.load(4773) 
const UNDEADTRAINER = UNDEAD_RIDING_NPC.Trainer.getRef()

//TAUREN
const TAUREN_RIDING_NPC = std.CreatureTemplates.load(3690) 
const TAURENTRAINER = TAUREN_RIDING_NPC.Trainer.getRef()

//TROLL
const TROLL_RIDING_NPC = std.CreatureTemplates.load(7953) 
const TROLLTRAINER = TROLL_RIDING_NPC.Trainer.getRef()

//BELF
const BELF_RIDING_NPC = std.CreatureTemplates.load(16280) 
const BELFTRAINER = BELF_RIDING_NPC.Trainer.getRef()

//DRAENEI
const DRAENEI_RIDING_NPC = std.CreatureTemplates.load(20914) 
const DRAENEITRAINER = DRAENEI_RIDING_NPC.Trainer.getRef()




setRidingSkills4060(HUMANTRAINER)
setRidingSkills4060(NELFTRAINER)
setRidingSkills4060(DWARFTRAINER)
setRidingSkills4060(GNOMETRAINER)
setRidingSkills4060(ORCTRAINER)
setRidingSkills4060(UNDEADTRAINER)
setRidingSkills4060(TAURENTRAINER)
setRidingSkills4060(TROLLTRAINER)
setRidingSkills4060(BELFTRAINER)
setRidingSkills4060(DRAENEITRAINER)
