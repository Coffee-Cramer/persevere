import { std } from "wow/wotlk";
import { BLDMSTR } from "../blademaster";

export const TALENT_TREE2 = std.TalentTrees.create('shrek6', 'test-talenttree-2')
    .Name.enGB.set("Mirage")
    .ClassMask.add(BLDMSTR.Mask)
    .BackgroundImage.set('RogueAssassination')
    .OrderIndex.set(1)