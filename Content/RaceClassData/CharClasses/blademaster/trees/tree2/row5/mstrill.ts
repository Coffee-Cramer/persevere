import { MSTRILN } from "../spells/MasterOfIllusion/masterofillusion";

//*************************************************************************
// * MASTER OF ILLUSION
// ************************************************************************/
const MSTRILN_TALENT = TALENT_TREE2.Talents
    .addSpellsGet('shrek6', 'MSTRILN_TALENT', 1)
    .Position.set(4, 1)
    .Spells.set(0, MSTRILN.ID)