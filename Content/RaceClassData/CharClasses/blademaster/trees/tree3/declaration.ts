import { std } from "wow/wotlk";
import { BLDMSTR } from "../blademaster";

export const TALENT_TREE3 = std.TalentTrees.create('shrek6', 'test-talenttree-3')
    .Name.enGB.set("Mayhem")
    .ClassMask.add(BLDMSTR.Mask)
    .BackgroundImage.set('RogueCombat')
    .OrderIndex.set(2)