import { MaskCon } from "wow/data/cell/cells/MaskCell"
import { std } from "wow/wotlk"
import { RaceMask } from "wow/wotlk/std/Race/RaceType"
import { CNBLZ_COPY } from "./cannibalize"
import { learnSpell } from "../../../../../Functions/learnSpell"
import { setTrollCannibalize } from "../../../../../serverSettings"
import { ALLCLASSES } from "../../../../../Enumerators&Arrays/allRacesAllClassesArrays"

if(setTrollCannibalize == true){
    learnSpell(CNBLZ_COPY.ID, 1, ALLCLASSES, 'TROLL') //Cannibalize copy (animation didn't work for the normal cannibalize)
}