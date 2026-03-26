import { TrainerPlain } from "wow/wotlk/std/Trainer/Trainer"

export function setRidingSkills4060(Trainer: TrainerPlain){
    Trainer.Spells.getIndex(0).Cost.set(1000000).RequiredLevel.set(40) //Apprentice
    Trainer.Spells.getIndex(1).Cost.set(10000000).RequiredLevel.set(60) //Journeyman
}