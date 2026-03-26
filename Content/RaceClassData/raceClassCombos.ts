import { std } from "wow/wotlk";
import { spawnDwarfShamanTrainers } from "../NPCData/Trainers/dwarfShaman";
import { spawnBelfWarriorTrainers } from "../NPCData/Trainers/belfWarr";
import { spawnHumanHunterTrainers } from "../NPCData/Trainers/humanHunter";
import { spawnUndeadPaladinTrainers } from "../NPCData/Trainers/UndeadPaladin";
import { spawnUndeadHunterTrainers } from "../NPCData/Trainers/undeadHunt";
import { spawnGnomeDruidTrainers } from "../NPCData/Trainers/gnomeDruid";
import { dwarfShaman, belfWarrior, undeadPaladin, gnomeHunter, humanHunter, trollWarlock, undeadHunter, dwarfMage, gnomePriest, dwarfWarlock, orcMage, gnomeDruid, draeneiWarlock } from "../../serverSettings";


/********************************************************************************
* Set Data
*********************************************************************************/
class ClassCombos{
    private dwfShmn: bool
    private blfWar: bool
    private undPaly: bool
    private gnoHunt: bool
    private humHunt: bool
    private trlWrlk: bool
    private undHunt: bool
    private dwfMage: bool
    private gnoPrst: bool
    private dwfWrlk: bool
    private orcMge: bool
    private gnoDrud: bool
    private drnWrlk: bool

    private Enumerator = {
        warrior: 1,
        paladin: 2,
        hunter: 3,
        rogue: 4,
        priest: 5,
        DK: 6,
        shaman: 7,
        mage: 8,
        warlock: 9,
        druid: 11,
        blademaster: 12
    }

    constructor(
        dwarfShaman: bool, belfWarrior: bool, undeadPaladin: bool, gnomeHunter: bool, 
        humanHunter: bool, trollWarlock: bool, undeadHunter: bool,
        dwarfMage: bool, gnomePriest: bool,
        dwarfWarlock: bool, orcMage: bool, gnomeDruid: bool, draeneiWarlock: bool
    ){
        this.dwfShmn = dwarfShaman
        this.blfWar = belfWarrior
        this.undPaly = undeadPaladin
        this.gnoHunt = gnomeHunter
        this.humHunt = humanHunter
        this.trlWrlk = trollWarlock
        this.undHunt = undeadHunter
        this.dwfMage = dwarfMage
        this.gnoPrst = gnomePriest
        this.dwfWrlk = dwarfWarlock
        this.orcMge = orcMage
        this.gnoDrud = gnomeDruid
        this.drnWrlk = draeneiWarlock
    }
    
    public setClassCombos(){
        const SHAMAN = std.Classes.load(this.Enumerator.shaman)
        const WARRIOR = std.Classes.load(this.Enumerator.warrior)
        const PALADIN = std.Classes.load(this.Enumerator.paladin)
        const HUNTER = std.Classes.load(this.Enumerator.hunter)
        const WARLOCK = std.Classes.load(this.Enumerator.warlock)
        const DRUID = std.Classes.load(this.Enumerator.druid)
        const PRIEST = std.Classes.load(this.Enumerator.priest)
        const MAGE = std.Classes.load(this.Enumerator.mage)
        const ROGUE = std.Classes.load(this.Enumerator.rogue)

        if(this.dwfShmn == true){
            SHAMAN.Races.add(['DWARF'])

            spawnDwarfShamanTrainers()
        }

        if(this.blfWar == true){    
            WARRIOR.Races.add(['BLOODELF'])

            spawnBelfWarriorTrainers()
        }

        if(this.undPaly == true){
            PALADIN.Races.add(['UNDEAD'])

            spawnUndeadPaladinTrainers()

            this.enablePaladinQuests_Undead()
        }

        if(this.gnoHunt == true){
            HUNTER.Races.add(['GNOME'])

            this.enableHunterQuests_Gnome()
        }

        if(this.humHunt == true){
            HUNTER.Races.add(['HUMAN'])
            spawnHumanHunterTrainers()

            this.enableHunterQuests_Human()
        }

        if(this.trlWrlk == true){
            WARLOCK.Races.add(['TROLL'])
        }

        if(this.undHunt == true){
            HUNTER.Races.add(['UNDEAD'])
            
            spawnUndeadHunterTrainers()
            this.enableHunterQuests_Undead()
        }

        if(this.dwfMage == true){
            MAGE.Races.add(['DWARF'])
        }

        if(this.gnoPrst == true){
            PRIEST.Races.add(['GNOME'])
        }

        if(this.dwfWrlk == true){
            WARLOCK.Races.add(['DWARF'])
        }

        if(this.orcMge == true){
            MAGE.Races.add(['ORC'])
        }

        if(this.gnoDrud == true){
            DRUID.Races.add(['GNOME'])

            spawnGnomeDruidTrainers()
            this.enableDruidQuests_Gnome()
        }

        if(this.drnWrlk == true){
            WARLOCK.Races.add(['DRAENEI'])
        }
    }


    //PRIVATE FUNCTIONS******************************************************************************************************************

    private enableDruidQuests_Gnome(){
        /*******************************************************************************************************************************
        *   Allow Gnome Druids to accept and complete the standard Night Elf Druid quests.
        ********************************************************************************************************************************/
        const MOONGLADE_QUEST = std.Quests.load(5921)
        const GREATBEARSPIRIT_QUEST = std.Quests.load(5929)
        const BACKTODARNASSUS_QUEST = std.Quests.load(5931)
        const BODYANDHEART_QUEST = std.Quests.load(6001)

        const ALESSONTOLEARN_QUEST = std.Quests.load(26)
        const TRIALOFTHELAKE_QUEST = std.Quests.load(29)
        const TRIALOFTHESEALION_QUEST = std.Quests.load(272)
        const AQUATICFORM_QUEST = std.Quests.load(5061)

        MOONGLADE_QUEST.RaceMask.add('GNOME')
        GREATBEARSPIRIT_QUEST.RaceMask.add('GNOME')
        BACKTODARNASSUS_QUEST.RaceMask.add('GNOME')
        BODYANDHEART_QUEST.RaceMask.add('GNOME')

        ALESSONTOLEARN_QUEST.RaceMask.add('GNOME')
        TRIALOFTHELAKE_QUEST.RaceMask.add('GNOME')
        TRIALOFTHESEALION_QUEST.RaceMask.add('GNOME')
        AQUATICFORM_QUEST.RaceMask.add('GNOME')
    }

    private enableHunterQuests_Human(){
        /*******************************************************************************************************************************
        *   Allow Human Hunters to accept and complete the standard Dwarf Hunter quests.
        ********************************************************************************************************************************/
        const TAMINGTHEBEAST_QUEST = std.Quests.load(6064)
        const TAMINGTHEBEAST2_QUEST = std.Quests.load(6084)
        const TAMINGTHEBEAST3_QUEST = std.Quests.load(6085)
        const TRAININGTHEBEAST_QUEST = std.Quests.load(6086)
        
        TAMINGTHEBEAST_QUEST.RaceMask.add('HUMAN')
        TAMINGTHEBEAST2_QUEST.RaceMask.add('HUMAN')
        TAMINGTHEBEAST3_QUEST.RaceMask.add('HUMAN')
        TRAININGTHEBEAST_QUEST.RaceMask.add('HUMAN')
    }

    private enableHunterQuests_Gnome(){
        /*******************************************************************************************************************************
        *   Allow Gnome Hunters to accept and complete the standard Dwarf Hunter quests.
        ********************************************************************************************************************************/
        const TAMINGTHEBEAST_QUEST = std.Quests.load(6064)
        const TAMINGTHEBEAST2_QUEST = std.Quests.load(6084)
        const TAMINGTHEBEAST3_QUEST = std.Quests.load(6085)
        const TRAININGTHEBEAST_QUEST = std.Quests.load(6086)
        
        TAMINGTHEBEAST_QUEST.RaceMask.add('GNOME')
        TAMINGTHEBEAST2_QUEST.RaceMask.add('GNOME')
        TAMINGTHEBEAST3_QUEST.RaceMask.add('GNOME')
        TRAININGTHEBEAST_QUEST.RaceMask.add('GNOME')
    }

    private enableHunterQuests_Undead(){
        /*******************************************************************************************************************************
        *   Allow Undead Hunters to accept and complete the standard Orc Hunter quests.
        ********************************************************************************************************************************/
        const TAMINGTHEBEAST_QUEST = std.Quests.load(6062)
        const TAMINGTHEBEAST2_QUEST = std.Quests.load(6083)
        const TAMINGTHEBEAST3_QUEST = std.Quests.load(6082)
        const TRAININGTHEBEAST_QUEST = std.Quests.load(6081)
        
        TAMINGTHEBEAST_QUEST.RaceMask.add('UNDEAD')
        TAMINGTHEBEAST2_QUEST.RaceMask.add('UNDEAD')
        TAMINGTHEBEAST3_QUEST.RaceMask.add('UNDEAD')
        TRAININGTHEBEAST_QUEST.RaceMask.add('UNDEAD')
    }

    private enablePaladinQuests_Undead(){
        /*******************************************************************************************************************************
        *   Allow Undead Paladins to accept and complete the standard Blood Elf Paladin quests.
        ********************************************************************************************************************************/
        const THEFIRSTTRIAL_QUEST = std.Quests.load(9678)
        const ASTUDYINPOWER_QUEST = std.Quests.load(9681)
        const CLAIMINGTHELIGHT_QUEST = std.Quests.load(9684)
        const REDEEMINGTHEDEAD_QUEST = std.Quests.load(9685)
        
        THEFIRSTTRIAL_QUEST.RaceMask.add('UNDEAD')
        ASTUDYINPOWER_QUEST.RaceMask.add('UNDEAD')
        CLAIMINGTHELIGHT_QUEST.RaceMask.add('UNDEAD')
        REDEEMINGTHEDEAD_QUEST.RaceMask.add('UNDEAD')
    }
}

const raceClass = new ClassCombos(
    dwarfShaman, belfWarrior, undeadPaladin, gnomeHunter, 
    humanHunter, trollWarlock, undeadHunter, 
    dwarfMage, gnomePriest, dwarfWarlock, orcMage,  gnomeDruid, 
    draeneiWarlock
)

raceClass.setClassCombos()


//const CLASSNAME = std.Classes.load(10).Name.enGB.get() //10 seems to be no class at all
//console.log(CLASSNAME)