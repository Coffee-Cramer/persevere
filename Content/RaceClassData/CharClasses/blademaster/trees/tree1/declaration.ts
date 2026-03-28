import { std } from "wow/wotlk";
import { BLDMSTR } from "../blademaster";

export const TALENT_TREE1 = std.TalentTrees.create('shrek6', 'test-talenttree-1')
    .Name.enGB.set("Cyclone")
    .ClassMask.add(BLDMSTR.Mask)
    .BackgroundImage.set('ShamanEnhancement')
    .OrderIndex.set(0)