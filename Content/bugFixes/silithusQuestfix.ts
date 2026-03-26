import { std } from "wow/wotlk";
import { ALLRACES, HORDE_RACES } from "../../Enumerators&Arrays/allRacesAllClassesArrays";

const CENARION_CIRCLEREP = std.Factions.load(609)

const BUGGED_ITEM_IDS = [
    20941, 20942, 21248, 21249, 21250, 
    21251, 21252, 21253, 21254, 21255, 
    21256, 21749, 21750, 20943, 20944,
    20945, 20947, 20948, 21165, 21166,
    21167, 21245, 21751, 20807, 20939,
    20940, 21257, 21258, 21259, 21260,
    21261, 21262, 21263, 21264, 21265,
    21378, 21379, 21380, 21381, 21382,
    21383, 21384, 21385, 21514
]

BUGGED_ITEM_IDS.forEach((id) => {
    //console.log(std.Items.load(id).StartQuest.get())
})

const BUGGED_QUEST_IDS = [
    8501, 8502, 8773, 8539,
    8772, 8687, 8774, 8775,
    8776, 8777, 8770, 8771,
    8498, 8740, 8537, 8535, 
    8538, 8534, 8738, 8739, 
    8737, 8536, 8497, 8540,
    8541, 8778, 8785, 8779,
    8781, 8786, 8782, 8780,
    8787, 8783, 8804, 8805,
    8806, 8809, 8807, 8808,
    8810, 8829
]

BUGGED_QUEST_IDS.forEach((id) => {
    std.Quests.load(id).RaceMask.set(ALLRACES)
})