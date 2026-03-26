import { std } from "wow/wotlk";

const FIRSTAID = std.SkillLines.load(129)

FIRSTAID.Spells.forEach((spell) => {
    spell.ClassMask.clearAll()
}) 

FIRSTAID.Spells.getIndex(25).delete()
FIRSTAID.Spells.getIndex(26).delete()
FIRSTAID.Spells.getIndex(24).delete()
FIRSTAID.Spells.getIndex(23).delete()

const HBYRNCLTH = std.Spells.load(18630) //for some reason this was acquired by learning firstaid
    .SkillLines.getIndex(1).AcquireMethod.TRAINER.set()


//console.log(std.Spells.load(1515).objectify())
//console.log(std.Spells.load(13481).objectify())
//console.log(std.SkillLines.load(129).objectify())
//console.log(std.CreatureTemplates.load(4211).Trainer.get())
