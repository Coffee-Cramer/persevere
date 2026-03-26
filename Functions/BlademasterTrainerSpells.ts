import { TrainerPlain } from "wow/wotlk/std/Trainer/Trainer";
import { BLDMSTR } from "../Content/RaceClassData/CharClasses/blademaster/blademaster";
import { BLDESTORM } from "../Content/RaceClassData/CharClasses/blademaster/spells/BladeStorm/blade-storm";
import { BLET } from "../Content/RaceClassData/CharClasses/blademaster/spells/bloodLet/bloodLet";
import { BLET2 } from "../Content/RaceClassData/CharClasses/blademaster/spells/bloodLet/bloodLet2";
import { BLET3 } from "../Content/RaceClassData/CharClasses/blademaster/spells/bloodLet/bloodLet3";
import { BLET4 } from "../Content/RaceClassData/CharClasses/blademaster/spells/bloodLet/bloodLet4";
import { BLET5 } from "../Content/RaceClassData/CharClasses/blademaster/spells/bloodLet/bloodLet5";
import { BLET6 } from "../Content/RaceClassData/CharClasses/blademaster/spells/bloodLet/bloodLet6";
import { BLET7 } from "../Content/RaceClassData/CharClasses/blademaster/spells/bloodLet/bloodLet7";
import { BLET8 } from "../Content/RaceClassData/CharClasses/blademaster/spells/bloodLet/bloodLet8";
import { INCURSION } from "../Content/RaceClassData/CharClasses/blademaster/spells/incursion/Incursion";
import { INCURSION2 } from "../Content/RaceClassData/CharClasses/blademaster/spells/incursion/incursion2";
import { INCURSION3 } from "../Content/RaceClassData/CharClasses/blademaster/spells/incursion/incursion3";
import { MRRIMG } from "../Content/RaceClassData/CharClasses/blademaster/spells/MirrorImage/mirrorImage";
import { PIERCE } from "../Content/RaceClassData/CharClasses/blademaster/spells/Pierce/Pierce";
import { REPEL } from "../Content/RaceClassData/CharClasses/blademaster/spells/Repel/Repel";
import { SCTRY2 } from "../Content/RaceClassData/CharClasses/blademaster/spells/SanctuaryOfWind/sanctuaryOfWind";
import { SWFTSTK } from "../Content/RaceClassData/CharClasses/blademaster/spells/swiftStrike/swiftStrike";
import { SWFTSTK2 } from "../Content/RaceClassData/CharClasses/blademaster/spells/swiftStrike/swiftStrike2";
import { SWFTSTK3 } from "../Content/RaceClassData/CharClasses/blademaster/spells/swiftStrike/swiftStrike3";
import { SWFTSTK4 } from "../Content/RaceClassData/CharClasses/blademaster/spells/swiftStrike/swiftStrike4";
import { SWFTSTK5 } from "../Content/RaceClassData/CharClasses/blademaster/spells/swiftStrike/swiftStrike5";
import { SWFTSTK6 } from "../Content/RaceClassData/CharClasses/blademaster/spells/swiftStrike/swiftStrike6";
import { SWFTSTK7 } from "../Content/RaceClassData/CharClasses/blademaster/spells/swiftStrike/swiftStrike7";
import { SWFTSTK8 } from "../Content/RaceClassData/CharClasses/blademaster/spells/swiftStrike/swiftStrike8";
import { SWFTSTK9 } from "../Content/RaceClassData/CharClasses/blademaster/spells/swiftStrike/swiftStrike9";
import { QUELLING_PALM } from "../Content/RaceClassData/CharClasses/blademaster/spells/QuellingPalm/quellingPalm";
import { VITIATE } from "../Content/RaceClassData/CharClasses/blademaster/spells/vitiate/vitiate";
import { CRPPL } from "../Content/RaceClassData/CharClasses/blademaster/spells/WindBlade/windBlade";
import { WINDWLK } from "../Content/RaceClassData/CharClasses/blademaster/spells/windWalk/windWalk";
import { WINDWLK2 } from "../Content/RaceClassData/CharClasses/blademaster/spells/windWalk/windWalk2";
import { WINDWLK3 } from "../Content/RaceClassData/CharClasses/blademaster/spells/windWalk/windWalk3";
import { WINDWLK4 } from "../Content/RaceClassData/CharClasses/blademaster/spells/windWalk/windWalk4";
import { UNLSH } from "../Content/RaceClassData/CharClasses/blademaster/spells/Unleash/Unleash";
import { VITIATE2 } from "../Content/RaceClassData/CharClasses/blademaster/spells/vitiate/vitiate2";
import { VITIATE3 } from "../Content/RaceClassData/CharClasses/blademaster/spells/vitiate/vitiate3";
import { VITIATE4 } from "../Content/RaceClassData/CharClasses/blademaster/spells/vitiate/vitiate4";
import { VITIATE5 } from "../Content/RaceClassData/CharClasses/blademaster/spells/vitiate/vitiate5";
import { VITIATE6 } from "../Content/RaceClassData/CharClasses/blademaster/spells/vitiate/vitiate6";
import { VITIATE7 } from "../Content/RaceClassData/CharClasses/blademaster/spells/vitiate/vitiate7";
import { std } from "wow/wotlk";

//Thrash spell id: 3417
//Parry spell id: 3124

export function trainerSpellList(Trainer: TrainerPlain){
    Trainer.ClassMask.add(BLDMSTR.Mask)

    //level 1
    Trainer.Spells.addGet(WINDWLK.ID).RequiredLevel.set(1).row.MoneyCost.set(10)

    //level 4 
    Trainer.Spells.addGet(INCURSION.ID).RequiredLevel.set(4).row.MoneyCost.set(100)
    
    //level 6
    Trainer.Spells.addGet(3124).RequiredLevel.set(6).row.MoneyCost.set(200) //parry
    Trainer.Spells.addGet(CRPPL.ID).RequiredLevel.set(6).row.MoneyCost.set(200)
    Trainer.Spells.addGet(BLET.ID).RequiredLevel.set(6).row.MoneyCost.set(200)

    //level 8 
    Trainer.Spells.addGet(REPEL.ID).RequiredLevel.set(8).row.MoneyCost.set(400)
    Trainer.Spells.addGet(QUELLING_PALM.ID).RequiredLevel.set(8).row.MoneyCost.set(400)

    //level 10
    Trainer.Spells.addGet(SWFTSTK2.ID).RequiredLevel.set(10).row.MoneyCost.set(600).ReqAbility1.set(SWFTSTK.ID)
    //Trainer.Spells.addGet(VITIATE.ID).RequiredLevel.set(10).row.MoneyCost.set(600)

    //level 12
    Trainer.Spells.addGet(BLET2.ID).RequiredLevel.set(12).row.MoneyCost.set(800).ReqAbility1.set(BLET.ID)

    //level 14
    Trainer.Spells.addGet(PIERCE.ID).RequiredLevel.set(14).row.MoneyCost.set(1000)

    //level 16
    Trainer.Spells.addGet(SWFTSTK3.ID).RequiredLevel.set(16).row.MoneyCost.set(1200).ReqAbility1.set(SWFTSTK2.ID)
    Trainer.Spells.addGet(UNLSH.ID).RequiredLevel.set(16).row.MoneyCost.set(1200)
    //Trainer.Spells.addGet(VITIATE2.ID).RequiredLevel.set(16).row.MoneyCost.set(1200).ReqAbility1.set(VITIATE.ID)

    //level 18
    Trainer.Spells.addGet(BLET3.ID).RequiredLevel.set(18).row.MoneyCost.set(1400).ReqAbility1.set(BLET2.ID)

    //level 20
    Trainer.Spells.addGet(WINDWLK2.ID).RequiredLevel.set(20).row.MoneyCost.set(1600).ReqAbility1.set(WINDWLK.ID)

    //level 22
    Trainer.Spells.addGet(SWFTSTK4.ID).RequiredLevel.set(22).row.MoneyCost.set(1800).ReqAbility1.set(SWFTSTK3.ID)

    //level 24
    Trainer.Spells.addGet(BLET4.ID).RequiredLevel.set(24).row.MoneyCost.set(2200).ReqAbility1.set(BLET3.ID)
    //Trainer.Spells.addGet(VITIATE3.ID).RequiredLevel.set(24).row.MoneyCost.set(2200).ReqAbility1.set(VITIATE2.ID)

    //level 26
    Trainer.Spells.addGet(INCURSION2.ID).RequiredLevel.set(26).row.MoneyCost.set(2400).ReqAbility1.set(INCURSION.ID)

    //level 28
    Trainer.Spells.addGet(SWFTSTK5.ID).RequiredLevel.set(28).row.MoneyCost.set(2600).ReqAbility1.set(SWFTSTK4.ID)

    //level 30
    Trainer.Spells.addGet(BLET5.ID).RequiredLevel.set(30).row.MoneyCost.set(10000).ReqAbility1.set(BLET4.ID)
    Trainer.Spells.addGet(MRRIMG.ID).RequiredLevel.set(30).row.MoneyCost.set(10000)

    //level 32
    Trainer.Spells.addGet(WINDWLK3.ID).RequiredLevel.set(32).row.MoneyCost.set(12000).ReqAbility1.set(WINDWLK2.ID)
    //Trainer.Spells.addGet(VITIATE4.ID).RequiredLevel.set(32).row.MoneyCost.set(12000).ReqAbility1.set(VITIATE3.ID)

    //level 34
    Trainer.Spells.addGet(SWFTSTK6.ID).RequiredLevel.set(34).row.MoneyCost.set(14000).ReqAbility1.set(SWFTSTK5.ID)
    Trainer.Spells.addGet(BLDESTORM.ID).RequiredLevel.set(34).row.MoneyCost.set(14000)

    //level 36
    Trainer.Spells.addGet(BLET6.ID).RequiredLevel.set(36).row.MoneyCost.set(16000).ReqAbility1.set(BLET5.ID)

    //level 38
    Trainer.Spells.addGet(SCTRY2.ID).RequiredLevel.set(38).row.MoneyCost.set(18000)

    //level 40
    Trainer.Spells.addGet(SWFTSTK7.ID).RequiredLevel.set(40).row.MoneyCost.set(20000).ReqAbility1.set(SWFTSTK6.ID)
    //Trainer.Spells.addGet(VITIATE5.ID).RequiredLevel.set(40).row.MoneyCost.set(20000).ReqAbility1.set(VITIATE4.ID)
    std.Spells.load(8737).SkillLines.getIndex(0).ClassMask.add(BLDMSTR.Mask)
    Trainer.Spells.addGet(8737).RequiredLevel.set(40).row.MoneyCost.set(20000) //mail

    //level 42
    Trainer.Spells.addGet(BLET7.ID).RequiredLevel.set(42).row.MoneyCost.set(22000).ReqAbility1.set(BLET6.ID)

    //level 44 
    Trainer.Spells.addGet(WINDWLK4.ID).RequiredLevel.set(44).row.MoneyCost.set(24000).ReqAbility1.set(WINDWLK3.ID)

    //level 46
    Trainer.Spells.addGet(SWFTSTK8.ID).RequiredLevel.set(46).row.MoneyCost.set(26000).ReqAbility1.set(SWFTSTK7.ID)

    //levle 48
    Trainer.Spells.addGet(BLET8.ID).RequiredLevel.set(48).row.MoneyCost.set(28000).ReqAbility1.set(BLET7.ID)
    //Trainer.Spells.addGet(VITIATE6.ID).RequiredLevel.set(48).row.MoneyCost.set(28000).ReqAbility1.set(VITIATE5.ID)

    //level 50

    //level 52
    Trainer.Spells.addGet(SWFTSTK9.ID).RequiredLevel.set(52).row.MoneyCost.set(32000).ReqAbility1.set(SWFTSTK8.ID)

    //level 54
    Trainer.Spells.addGet(INCURSION3.ID).RequiredLevel.set(54).row.MoneyCost.set(34000).ReqAbility1.set(INCURSION2.ID)

    //level 56
    //Trainer.Spells.addGet(VITIATE7.ID).RequiredLevel.set(56).row.MoneyCost.set(36000).ReqAbility1.set(VITIATE6.ID)

    //level 58

    //level 60

}