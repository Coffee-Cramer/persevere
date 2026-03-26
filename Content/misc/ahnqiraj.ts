/********************************************************************************
* Enable/Disable Ahn'Qiraj:
* - Note for future self: gate needs much better placement
*********************************************************************************/
import { std } from "wow/wotlk";
import { setAQ } from "../../serverSettings";

const OBJECTS = std.GameObjectTemplates.All

if(setAQ == false){
    OBJECTS.forEach((obj) => {
        if(obj.Name.enGB.get() == "Gate of Ahn'Qiraj"){
            obj.Spawns.add('shrek6', 'AQgate', {map:1,x:-8132,y:1525.409058,z:17.240615,o:6.265031}) //.309277
            obj.Flags.LOCKED.set(1)
            obj.Flags.NOT_SELECTABLE.set(1)
        }
    })
}