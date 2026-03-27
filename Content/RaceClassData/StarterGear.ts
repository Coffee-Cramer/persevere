import { std } from "wow/wotlk"
import { BLDMSTR } from "./CharClasses/blademaster/blademaster"
import { BLDWRPS } from "../items/bladeMasterStartGear/blademaster-wraps"
import { KATANA } from "../items/bladeMasterStartGear/blde-mstr-katana"
import { KILT } from "../items/bladeMasterStartGear/kilt"
import { ALLRACES_ENUM } from "../../Enumerators&Arrays/allRacesAllClassesArrays"
import { NECRO } from "./CharClasses/Necromancer/necro"
import { NECROROBE } from "../items/NecroStartGear/necroRobe"

//*************************************************************************************************************************
//*  Revert some starter gear to vanilla version. (Some are personal preferences)
//*************************************************************************************************************************/
const HUNTER = std.Classes.load('HUNTER')
const ROGUE = std.Classes.load('ROGUE')




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
//* Rogue (gives one dagger instead of 2, closer to vanilla's style)
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
            gear.Items.add(53) //shirt
    })
}
