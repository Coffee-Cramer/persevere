import { DBC, std } from "wow/wotlk";

const PROT_CAPSTONE = DBC.Talent.getRow(134)

PROT_CAPSTONE.SpellRank.setIndex(0, 23922)

//console.log(PROT_CAPSTONE.objectify())