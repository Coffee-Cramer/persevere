import { std } from "wow/wotlk";

export const CRPPL = std.Spells.create('shrek6', 'CRPPLNECRO', 52498)
    .Name.enGB.set("Cripple")
    .Duration.setSimple(15000)
    .Cooldown.GlobalTime.set(1500)
    .Cooldown.Time.set(30000)
    .Power.Type.MANA.set()
    .Power.CostPercent.set(15)
    .SchoolMask.SHADOW.set(1)
    .CastTime.setSimple(2000)
    
CRPPL.Effects.get(0).PointsBase.set(-51) //movement slow
CRPPL.Effects.get(1).PointsBase.set(-51) //attack slow
CRPPL.Effects.get(2).PointsBase.set(-51) //strength reduction

//console.log(CRPPL.objectify())