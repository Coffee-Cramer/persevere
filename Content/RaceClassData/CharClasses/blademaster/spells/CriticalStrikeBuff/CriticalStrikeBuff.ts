import { std } from "wow/wotlk";

export const CRITICALSTRIKE = std.Spells.create('shrek6', 'chakra')
    .Name.enGB.set("Critical Strike")
    .Description.enGB.set("Increases your chance to Critical Strike by $s1%.")
    .AuraDescription.enGB.set("Increases your chance to Critical Strike by $s1%.")
    .Icon.setPath("ability_criticalstrike")
    .Range.setSimple(0, 5)
    .Duration.setSimple(15000)
    .Effects.addMod(x => x
        .Type.APPLY_AURA.set()
        .Aura.MOD_CRIT_PCT.set()
        .PercentBase.set(0) //1 hopefully
        .ImplicitTargetA.UNIT_CASTER.set()
    )
    .Stacks.set(5)

//console.log(std.Spells.load(CHAKRA.ID).objectify())
