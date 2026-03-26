import { std } from "wow/wotlk";

export const NECRO = 
    std.Classes.create(
        //mod id
        'shrek6',
        //entity id 
        'necromancer',
        //parent name of class
        'MAGE'
    );

NECRO.Races.add(['HUMAN', 'UNDEAD'])

NECRO.Name.enGB.set('Necromancer');

NECRO.UI.Color.set(0xcc0077)

NECRO.UI.Info.add('- Role: Damage')
NECRO.UI.Info.add('- Light Armor (Cloth)')
NECRO.UI.Info.add('- Can create undead minions and command them to do their bidding.')
NECRO.UI.Info.add('- Uses Mana as a resource.')
NECRO.UI.Info.add('- Raise your own army of the damned.')
NECRO.UI.Description.set("Their main stats are stamina and intellect.")

NECRO.Stats.MeleePowerType.MAGE.set()
NECRO.Stats.RangedPowerType.DEFAULT.set()
NECRO.DisplayPower.set(0) //0 = Mana, 1 = Rage, 2 = Pet Focus, 3 = Energy, 4 = Happiness, 5 = Runes, 6 = Runic Power

NECRO.Roles.Damage.set(true)

//missing racial fix
std.Spells.load(20600).AutoLearn.add(1, NECRO.Mask, 'HUMAN') //perception