import { TrainerPlain } from "wow/wotlk/std/Trainer/Trainer";
import { UNHLYFRZY } from "../Content/RaceClassData/CharClasses/Necromancer/spells/unholyFrenzy";
import { DRKSUMM } from "../Content/RaceClassData/CharClasses/Necromancer/spells/darkSummoning";
import { BONEARMOR } from "../Content/RaceClassData/CharClasses/Necromancer/spells/bonearmor";
import { PLGBLT2 } from "../Content/RaceClassData/CharClasses/Necromancer/spells/plagueBolt2";
import { PLGBLT } from "../Content/RaceClassData/CharClasses/Necromancer/spells/plagueBolt";
import { CRPPL } from "../Content/RaceClassData/CharClasses/Necromancer/spells/cripple";
import { RSGHL } from "../Content/RaceClassData/CharClasses/Necromancer/spells/Ghoul";
import { RAISEDEAD } from "../Content/RaceClassData/CharClasses/Necromancer/spells/raiseDead";
import { PLGBLT3 } from "../Content/RaceClassData/CharClasses/Necromancer/spells/plagueBolt3";
import { BONEARMOR2 } from "../Content/RaceClassData/CharClasses/Necromancer/spells/bonearmor2";
import { RTTG } from "../Content/RaceClassData/CharClasses/Necromancer/spells/returnToTheGrave";
import { LNCH } from "../Content/RaceClassData/CharClasses/Necromancer/spells/deathCharge";
import { DTHPACT } from "../Content/RaceClassData/CharClasses/Necromancer/spells/deathPact";
import { AMS } from "../Content/RaceClassData/CharClasses/Necromancer/spells/antiMagic";
import { CHNSDRK } from "../Content/RaceClassData/CharClasses/Necromancer/spells/chainsOfDarkness";


export function trainerSpellListNecro(Trainer: TrainerPlain){
    //level 1    10 copper
    Trainer.Spells.addGet(RTTG.ID).RequiredLevel.set(1).row.MoneyCost.set(10)

    //level 4    1 silver
    Trainer.Spells.addGet(CRPPL.ID).RequiredLevel.set(4).row.MoneyCost.set(100)
    Trainer.Spells.addGet(DRKSUMM.ID).RequiredLevel.set(4).row.MoneyCost.set(100)

    //level 6    1 silver
    Trainer.Spells.addGet(PLGBLT2.ID).RequiredLevel.set(6).row.MoneyCost.set(100).ReqAbility1.set(PLGBLT.ID)
    Trainer.Spells.addGet(BONEARMOR.ID).RequiredLevel.set(6).row.MoneyCost.set(100)

    //level 8    2 silver
    Trainer.Spells.addGet(UNHLYFRZY.ID).RequiredLevel.set(8).row.MoneyCost.set(200)

    //level 10   4 silver
    //Explode Minions at level 10... not here due to bug, see explodeMinions.ts
    Trainer.Spells.addGet(RSGHL.ID).RequiredLevel.set(10).row.MoneyCost.set(400).ReqAbility1.set(RAISEDEAD.ID)

    //level 12   6 silver
    Trainer.Spells.addGet(PLGBLT3.ID).RequiredLevel.set(12).row.MoneyCost.set(600).ReqAbility1.set(PLGBLT3.ID)
    Trainer.Spells.addGet(BONEARMOR2.ID).RequiredLevel.set(12).row.MoneyCost.set(600).ReqAbility1.set(BONEARMOR.ID)

    //level 14   9 silver
    Trainer.Spells.addGet(CHNSDRK.ID).RequiredLevel.set(14).row.MoneyCost.set(900)

    //level 16   15 silver
    Trainer.Spells.addGet(DTHPACT.ID).RequiredLevel.set(16).row.MoneyCost.set(1500)

    //Level 18
    Trainer.Spells.addGet(LNCH.ID).RequiredLevel.set(18).row.MoneyCost.set(1500)

    //level 20 
    Trainer.Spells.addGet(AMS.ID).RequiredLevel.set(20).row.MoneyCost.set(1500)
}