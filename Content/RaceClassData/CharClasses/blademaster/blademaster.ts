import { std } from "wow/wotlk";
import { setBladeMaster } from "../../../../serverSettings";


export const BLDMSTR = 
    std.Classes.create(
        //mod id
        'shrek6',
        //entity id 
        'blademaster',
        //parent name of class
        'HUNTER'
    );

//Races
if(setBladeMaster == true){
    BLDMSTR.Races.add(['ORC']);
}

//Name
BLDMSTR.Name.enGB.set('Blademaster');

//Icon
BLDMSTR.UI.ButtonTCoords.set(0.5, 0.75, 0.5, 0.75)
BLDMSTR.UI.ButtonPos.setPoint('TOP')
BLDMSTR.UI.ButtonPos.setRelativeTo('CharacterCreateClassButton1')
BLDMSTR.UI.ButtonPos.setRelativePoint('BOTTOM')
BLDMSTR.UI.ButtonPos.setPos(0, -6)


//UI Color
BLDMSTR.UI.Color.set(0xcc0077)

//Character Creation Description
BLDMSTR.UI.Info.add('- Role: Damage')
BLDMSTR.UI.Info.add('- Medium Armor (Leather / Mail)')
BLDMSTR.UI.Info.add('- Can become unseen with Windwalk, create Mirror Images, and unleash a Bladestorm of destructive force.')
BLDMSTR.UI.Info.add('- Uses Rage and Mana as resources.')
BLDMSTR.UI.Info.add('- Build up rage to unleash your most devastating abilities.')
BLDMSTR.UI.Description.set("Elusive warriors who trade heavy armor for absolute mastery of the blade. They confound their enemies with deceptive illusions and blinding swiftness. Their main stats are Agility and Attack Power.")

//stats
BLDMSTR.Stats.MeleePowerType.SHAMAN.set()
BLDMSTR.Stats.RangedPowerType.WARRIOR.set()
BLDMSTR.DisplayPower.set(1) //0 = Mana, 1 = Rage, 2 = Pet Focus, 3 = Energy, 4 = Happiness, 5 = Runes, 6 = Runic Power

//Roles
BLDMSTR.Roles.Damage.set(true)

//Racials
std.Spells.load(33697).AutoLearn.add(1, BLDMSTR.Mask, 'ORC') //Blood Fury
std.Spells.load(65222).AutoLearn.add(1, BLDMSTR.Mask, 'ORC') //Command