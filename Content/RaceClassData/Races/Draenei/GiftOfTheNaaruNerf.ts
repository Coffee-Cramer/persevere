import { std } from "wow/wotlk"

/*******************************************************************************************************************************
*   Gift of the Naaru Nerf
********************************************************************************************************************************/
std.Spells.forEach((spl) => {
    if(spl.Name.enGB.get() == "Gift of the Naaru"){
        spl.Effects.get(0).PointsPerLevel.set(1)
        //console.log(spl.Name.enGB.get(), spl.objectify())
    }
})