import { std } from "wow/wotlk";

//why? Goblin patch messes up their hoods
std.CreatureTemplates.load(36224).delete()
std.CreatureTemplates.load(36225).delete()
std.CreatureTemplates.load(36226).delete()