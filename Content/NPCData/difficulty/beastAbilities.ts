import { std } from "wow/wotlk";
import { NEWRAGE } from "../../RaceClassData/CharClasses/blademaster/SpellVisuals/rage";
import { NEWBLOODRAGE_VISUAL } from "../../RaceClassData/CharClasses/Warrior/SpellVisuals/bloodRageVisual";




//Apply this to all beasts ingame

const NPCS = std.CreatureTemplates

const BEASTRAGE = std.Spells.create('shrek6', 'beastrage')
    .Name.enGB.set("Beastial Rage")
    .AuraDescription.enGB.set("Attack Power increased.")
    .Icon.setPath("ability_hunter_pet_wolf")
    .Range.setSimple(0, 5)
    .CastTime.setSimple(0)
    .Duration.setSimple(0)
    .Visual.set(NEWBLOODRAGE_VISUAL.ID)
    .Duration.setSimple(8000)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_ATTACK_POWER.set()
        .PointsBase.set(1) //2
        .PointsPerLevel.set(1) //1 per level
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_SCALE.set()
        .PercentBase.set(9) //10%
        .ImplicitTargetA.UNIT_CASTER.set()
    )

//console.log(BEASTRAGE.ID)

const GGT = std.CreatureTemplates.load(547)
GGT.InlineScripts.OnJustEnteredCombat((npc) => {
    npc.CastSpell(npc, 81540, true)
})

const COYOTEPCKLDR = std.CreatureTemplates.load(833)
COYOTEPCKLDR.InlineScripts.OnJustEnteredCombat((npc) => {
    npc.CastSpell(npc, 81540, true)
})

const COYOTE = std.CreatureTemplates.load(834)
COYOTE.InlineScripts.OnJustEnteredCombat((npc) => {
    npc.CastSpell(npc, 81540, true)
})
