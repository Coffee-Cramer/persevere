import { std } from "wow/wotlk"
import { BLDMSTR } from "./CharClasses/blademaster/blademaster"
import { BLDWRPS } from "../items/bladeMasterStartGear/blademaster-wraps"
import { KATANA } from "../items/bladeMasterStartGear/blde-mstr-katana"
import { KILT } from "../items/bladeMasterStartGear/kilt"
import { ALLRACES_ENUM } from "../../Enumerators&Arrays/allRacesAllClassesArrays"
import { BELFWARR_BOOTS } from "../items/BelfWarriorStartGear/belfWarrBoots"
import { BELFWARR_LEGS } from "../items/BelfWarriorStartGear/belfWarrLegs"
import { BELFWARR_SHIRT } from "../items/BelfWarriorStartGear/belfWarrShirt"
import { NECRO } from "./CharClasses/Necromancer/necro"
import { NECROROBE } from "../items/NecroStartGear/necroRobe"

//*************************************************************************************************************************
//*  Revert some starter gear to vanilla version. (Some are personal preferences)
//*************************************************************************************************************************/
const WARLOCK = std.Classes.load('WARLOCK')
const PRIEST = std.Classes.load('PRIEST')
const WARRIOR = std.Classes.load('WARRIOR')
const HUNTER = std.Classes.load('HUNTER')
const ROGUE = std.Classes.load('ROGUE')
const MAGE = std.Classes.load('MAGE')
const SHAMAN = std.Classes.load('SHAMAN')
const PALADIN = std.Classes.load('PALADIN')
const DRUID = std.Classes.load('DRUID')

//*************************************************************************************************************************
//* Warlock
//*************************************************************************************************************************
for(let ClassRaceStartGear of WARLOCK.Races.get()){
        ClassRaceStartGear.Outfits.both(gear => {
            if(gear.Race.get() == ALLRACES_ENUM.HUMAN){
                gear.Items.clearAll()
                gear.Items.add(57) //robe
                gear.Items.add(6097) //shirt
                gear.Items.add(1396) //legs
                gear.Items.add(59) //feet
                gear.Items.add(2092) //dagger
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.GNOME){
                gear.Items.clearAll()
                gear.Items.add(57) //robe
                gear.Items.add(6097) //shirt
                gear.Items.add(1396) //legs
                gear.Items.add(59) //feet
                gear.Items.add(2092) //dagger
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.UNDEAD){
                gear.Items.clearAll()
                gear.Items.add(6129) //robe
                gear.Items.add(1396) //legs
                gear.Items.add(59) //feet
                gear.Items.add(2092) //dagger
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.ORC){
                gear.Items.clearAll()
                gear.Items.add(6129) //robe
                gear.Items.add(1396) //legs
                gear.Items.add(59) //feet
                gear.Items.add(2092) //dagger
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.TROLL){
                gear.Items.clearAll()
                gear.Items.add(6129) //robe
                gear.Items.add(1396) //legs
                gear.Items.add(59) //feet
                gear.Items.add(2092) //dagger
                gear.Items.add(6948) //hearthstone
            }
        })
    }


//*************************************************************************************************************************
//* Priest
//*************************************************************************************************************************
for(let ClassRaceStartGear of PRIEST.Races.get()){
        ClassRaceStartGear.Outfits.both(gear => {
            if(gear.Race.get() == ALLRACES_ENUM.UNDEAD){
                gear.Items.clearAll()
                gear.Items.add(6144) //robe
                gear.Items.add(53) //shirt
                gear.Items.add(52) //legs
                gear.Items.add(51) //feet
                gear.Items.add(36) //worn mace
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.TROLL){
                gear.Items.clearAll()
                gear.Items.add(6144) //robe
                gear.Items.add(53) //shirt
                gear.Items.add(52) //legs
                gear.Items.add(51) //feet
                gear.Items.add(36) //worn mace
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.HUMAN){
                gear.Items.clearAll()
                gear.Items.add(6098) //robe
                gear.Items.add(53) //shirt
                gear.Items.add(52) //legs
                gear.Items.add(51) //feet
                gear.Items.add(36) //worn mace
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.DWARF){
                gear.Items.clearAll()
                gear.Items.add(6098) //robe
                gear.Items.add(53) //shirt
                gear.Items.add(52) //legs
                gear.Items.add(51) //feet
                gear.Items.add(36) //worn mace
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.NIGHTELF){ //Night Elf 
                gear.Items.clearAll()
                gear.Items.add(2504) //bow
                gear.Items.add(2101) //quiver
                gear.Items.add(2512) //arrows
                gear.Items.add(6119) //chest
                gear.Items.add(36) //worn mace
                gear.Items.add(51) //boots
                gear.Items.add(52) //pants
                gear.Items.add(53) //shirt
                gear.Items.add(6948) //hearth stone
            }
        })
    }


//*************************************************************************************************************************
//* Warrior
//*************************************************************************************************************************
for(let ClassRaceStartGear of WARRIOR.Races.get()){
        ClassRaceStartGear.Outfits.both(gear => {
            if(gear.Race.get() == ALLRACES_ENUM.HUMAN){
                gear.Items.clearAll()
                gear.Items.add(38) //shirt
                gear.Items.add(39) //legs
                gear.Items.add(40) //feet
                gear.Items.add(2362) //worn wooden shield
                gear.Items.add(25) //worn short sword
                gear.Items.add(6948) //hearthstone
            }
            if(gear.Race.get() == ALLRACES_ENUM.GNOME){
                gear.Items.clearAll()
                gear.Items.add(38) //shirt
                gear.Items.add(39) //legs
                gear.Items.add(40) //feet
                gear.Items.add(2362) //worn wooden shield
                gear.Items.add(25) //worn short sword
                gear.Items.add(6948) //hearthstone
            }
            if(gear.Race.get() == ALLRACES_ENUM.NIGHTELF){
                gear.Items.clearAll()
                gear.Items.add(6120) //shirt
                gear.Items.add(6121) //legs
                gear.Items.add(6122) //feet
                gear.Items.add(2362) //worn wooden shield
                gear.Items.add(25) //worn short sword
                gear.Items.add(6948) //hearthstone
            }
            if(gear.Race.get() == ALLRACES_ENUM.UNDEAD){
                gear.Items.clearAll()
                gear.Items.add(6125) //shirt
                gear.Items.add(139) //legs
                gear.Items.add(140) //feet
                gear.Items.add(2362) //worn wooden shield
                gear.Items.add(25) //worn short sword
                gear.Items.add(6948) //hearthstone
            }
            if(gear.Race.get() == ALLRACES_ENUM.TROLL){
                gear.Items.clearAll()
                gear.Items.add(6125) //shirt
                gear.Items.add(139) //legs
                gear.Items.add(140) //feet
                gear.Items.add(2362) //worn wooden shield
                gear.Items.add(37) //worn axe
                gear.Items.add(6948) //hearthstone
            }
            
            if(gear.Race.get() == ALLRACES_ENUM.BLOODELF){
                gear.Items.clearAll()
                gear.Items.add(BELFWARR_SHIRT.ID) //shirt
                gear.Items.add(BELFWARR_LEGS.ID) //legs
                gear.Items.add(BELFWARR_BOOTS.ID) //feet
                gear.Items.add(20849) //sword
                gear.Items.add(20911) //shield
                gear.Items.add(6948) //hearthstone
            }
        })
    }


//*************************************************************************************************************************
//* Hunter
//*************************************************************************************************************************
for(let ClassRaceStartGear of HUNTER.Races.get()){
        ClassRaceStartGear.Outfits.both(gear => {
            if(gear.Race.get() == ALLRACES_ENUM.UNDEAD){
                gear.Items.clearAll()
                gear.Items.add(127) //shirt
                gear.Items.add(6126) //legs
                gear.Items.add(6127) //feet
                gear.Items.add(37) //worn axe
                gear.Items.add(6948) //hearthstone
                gear.Items.add(2504) //bow
                gear.Items.add(2101) //quiver
                gear.Items.add(2512) //arrows
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.ORC){
                gear.Items.clearAll()
                gear.Items.add(127) //shirt
                gear.Items.add(6126) //legs
                gear.Items.add(6127) //feet
                gear.Items.add(37) //worn axe
                gear.Items.add(6948) //hearthstone
                gear.Items.add(2504) //bow
                gear.Items.add(2101) //quiver
                gear.Items.add(2512) //arrows
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.TROLL){
                gear.Items.clearAll()
                gear.Items.add(127) //shirt
                gear.Items.add(6126) //legs
                gear.Items.add(6127) //feet
                gear.Items.add(37) //worn axe
                gear.Items.add(6948) //hearthstone
                gear.Items.add(2504) //bow
                gear.Items.add(2101) //quiver
                gear.Items.add(2512) //arrows
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.HUMAN){
                gear.Items.clearAll()
                gear.Items.add(148) //shirt
                gear.Items.add(147) //legs
                gear.Items.add(129) //feet
                gear.Items.add(37) //worn axe
                gear.Items.add(6948) //hearthstone
                gear.Items.add(2504) //bow
                gear.Items.add(2101) //quiver
                gear.Items.add(2512) //arrows
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.GNOME){
                gear.Items.clearAll()
                gear.Items.add(148) //shirt
                gear.Items.add(147) //legs
                gear.Items.add(129) //feet
                gear.Items.add(37) //worn axe
                gear.Items.add(6948) //hearthstone
                gear.Items.add(2508) //gun
                gear.Items.add(2516) //bullets
                gear.Items.add(2102) //ammo pouch
                gear.Items.add(6948) //hearthstone
            }
        })
    }



//*************************************************************************************************************************
//* Rogue
//*************************************************************************************************************************
for(let ClassRaceStartGear of ROGUE.Races.get()){
        ClassRaceStartGear.Outfits.both(gear => {
            if(gear.Race.get() == ALLRACES_ENUM.HUMAN || gear.Race.get() == ALLRACES_ENUM.DWARF || gear.Race.get() == ALLRACES_ENUM.NIGHTELF){
                gear.Items.clearAll()
                gear.Items.add(49) //shirt
                gear.Items.add(48) //legs
                gear.Items.add(47) //feet
                gear.Items.add(2092) //dagger
                gear.Items.add(6948) //hearthstone
                gear.Items.add(28979) //thrown
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.GNOME){
                gear.Items.clearAll()
                gear.Items.add(49) //shirt
                gear.Items.add(48) //legs
                gear.Items.add(47) //feet
                gear.Items.add(2092) //dagger
                gear.Items.add(6948) //hearthstone
                gear.Items.add(28979) //thrown
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.ORC || gear.Race.get() == ALLRACES_ENUM.UNDEAD){
                gear.Items.clearAll()
                gear.Items.add(2105) //shirt
                gear.Items.add(120) //legs
                gear.Items.add(121) //feet
                gear.Items.add(2092) //dagger
                gear.Items.add(6948) //hearthstone
                gear.Items.add(28979) //thrown
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.TROLL){
                gear.Items.clearAll()
                gear.Items.add(6136) //shirt
                gear.Items.add(6137) //legs
                gear.Items.add(6138) //feet
                gear.Items.add(2092) //dagger
                gear.Items.add(6948) //hearthstone
                gear.Items.add(28979) //thrown
                gear.Items.add(6948) //hearthstone
            }
            else if(gear.Race.get() == ALLRACES_ENUM.BLOODELF){
                gear.Items.clearAll()
                gear.Items.add(20897) //shirt
                gear.Items.add(20896) //legs
                gear.Items.add(20898) //feet
                gear.Items.add(20982) //dagger
                gear.Items.add(6948) //hearthstone
                gear.Items.add(28979) //thrown
                gear.Items.add(6948) //hearthstone
            }
        })
    }



//*************************************************************************************************************************
//* Blademaster
//*************************************************************************************************************************
for(let ClassRaceStartGear of BLDMSTR.Races.get()){
    ClassRaceStartGear.Outfits.both(gear => {
            gear.Items.clearAll()
            gear.Items.add(KILT.ID) //leggings
            gear.Items.add(BLDWRPS.ID) //shirt
            gear.Items.add(KATANA.ID) //weapon
            gear.Items.add(6948) //hearthstone
    })
}

//*************************************************************************************************************************
//* Necromancer
//*************************************************************************************************************************
for(let ClassRaceStartGear of NECRO.Races.get()){
    ClassRaceStartGear.Outfits.both(gear => {
            gear.Items.clearAll()
            gear.Items.add(NECROROBE.ID) //chest 
            gear.Items.add(1395) //pants
            gear.Items.add(55) //boots
            gear.Items.add(2092) //dagger

            if(gear.Race.get() == 1){
                gear.Items.add(53) //shirt
            }
    })
}