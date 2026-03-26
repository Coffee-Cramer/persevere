import { MaskCon } from "wow/data/cell/cells/MaskCell";
import { std } from "wow/wotlk";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { spell_areaRow } from "wow/wotlk/sql/spell_area";
import { SCOUTING_BIRD_NPC } from "../../../NPCData/Summons/SpectralScout";

export const SCOUTING_BIRD = std.Spells.create("shrek6", "SCOUTING_BIRD", 126)
    .Name.enGB.set("Spectral Scout")
    .Description.enGB.set("Summon a Spectral Scout to control for $d1. The beast cannot enter combat. This effect ends if you cast, are hit by any spell or attack, or move.")
    .AuraDescription.enGB.set("Controlling a Spectral Scout.")
    .Subtext.enGB.set("Racial")
    .Icon.setPath("spell_nature_sentinal")
    .ActiveIcon.set(49)
    .Visual.set(6039)
    .CastTime.set(0)
    .AuraInterruptFlags.TAKE_DAMAGE.set(1)
    .AuraInterruptFlags.CAST.set(1)
    .AuraInterruptFlags.HIT_BY_SPELL.set(1)
    .AuraInterruptFlags.MOVE.set(1)
    .Attributes.CHANNEL_DISPLAY_SPELL_NAME.set(1)
SCOUTING_BIRD.Effects.get(0).clear()
        .Type.SUMMON.set()
        .SummonedCreature.set(SCOUTING_BIRD_NPC.ID)
        .SummonProperties.set(65)
        .ImplicitTargetA.DEST_CASTER_SUMMON.set()
        .Radius.set(12)
        .ChainAmplitude.set(1)


SCOUTING_BIRD.AutoLearn.add(1, 'PRIEST', 'NIGHTELF') //teach to Night Elf Priest

//console.log(SCOUTING_BIRD.objectify())
//console.log(SCOUTING_BIRD_NPC.ID)
//console.log(std.CreatureTemplates.load(4277).objectify())
//console.log(std.Spells.load(SCOUTING_BIRD.ID).objectify())
//console.log(std.Spells.load(1002).Visual.get())