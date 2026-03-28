import { std } from "wow/wotlk";
import { SHOCKB } from "../spells/shockBlade/shock-blade";

//*************************************************************************
//* Level 40 Spell Talent - Shock Blade
// ************************************************************************/
const SHCKBLD = TALENT_TREE1.Talents
    .addSpellsGet('shrek6', 'SHCKBLD-talent', 1)
    .Position.set(2, 1)
    .Spells.set(0, SHOCKB.ID)