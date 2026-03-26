import { std } from "wow/wotlk"

//*******************************************************************************************************************************
//*   Weird bug where night elves, Trolls, and undead couldn't accept any quests
//*******************************************************************************************************************************
const QUESTS = std.Quests

QUESTS.forEach((quest) => {
    if(quest.RaceMask.hasAny('HUMAN')){
        quest.RaceMask.add('NIGHTELF')
    }
    if(quest.RaceMask.hasAny('ORC')){
        quest.RaceMask.add('UNDEAD')
    }
    if(quest.RaceMask.hasAny('ORC')){
        quest.RaceMask.add('TROLL')
    }
})
