import { MaskCon } from "wow/data/cell/cells/MaskCell"
import { std } from "wow/wotlk"
import { RaceMask } from "wow/wotlk/std/Race/RaceType"
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry"

export function learnSpell(spell: uint32, level: number, specifiedClass?: MaskCon<keyof typeof ClassMask>, race?: MaskCon<keyof typeof RaceMask>)
    {
        if(race){
            std.Spells.load(spell).AutoLearn.add(level, specifiedClass, race)
        }
        else if(!race){
            std.Spells.load(spell).AutoLearn.add(level, specifiedClass)
        }
    }