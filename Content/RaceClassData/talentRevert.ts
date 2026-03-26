import { std } from "wow/wotlk";
import { talents60 } from "../../serverSettings";

if(talents60 == true){
    /******************************************************************************************************* 
    * Warrior
    ********************************************************************************************************/
    deleteArmsTalents()
    deleteFuryTalents()
    deleteProtTalents()

    /******************************************************************************************************* 
    * Paladin
    ********************************************************************************************************/
    deleteHolyTalents_Paladin()
    deleteProtTalents_Paladin()
    deleteRetTalents_Paladin()

    /*******************************************************************************************************
    * Hunter
    ********************************************************************************************************/
    deleteBMtalents()
    deleteMarksmanTalents()
    deleteSurvivalTalents()
    
    /******************************************************************************************************* 
    * Rogue
    ********************************************************************************************************/
    deleteAssassinationTalents()
    deleteCombatTalents()
    deleteSubtletyTalents()

    /******************************************************************************************************* 
    * Priest
    ********************************************************************************************************/
    deleteDiscTalents_Priest()
    deleteHolyTalents_Priest()
    deleteShadowTalents_Priest()

    /******************************************************************************************************* 
    * Shaman
    ********************************************************************************************************/
    deleteElementalTalents()
    deleteEnhancementTalents()
    deleteRestorationTalents_Shaman()

    /******************************************************************************************************* 
    * Mage
    ********************************************************************************************************/
    deleteArcaneTalents()
    deleteFireTalents()
    deleteFrostTalents()

    /******************************************************************************************************* 
    * Warlock
    ********************************************************************************************************/
    deleteAffliTalents()
    deleteDemoTalents()
    deleteDestroTalents()

    /******************************************************************************************************* 
    * Druid
    ********************************************************************************************************/
    deleteBlnceTalents()
    deleteFeralTalents()
    deleteRestoTalents_Druid()
}




function deleteArmsTalents(){
    //imp b stance
    std.Spells.load(46865).delete()
    std.Spells.load(46866).delete()

    //imp slam
    std.Spells.load(12862).delete() 
    std.Spells.load(12330).delete()
    
    //second wind
    std.Spells.load(29834).delete() 
    std.Spells.load(29838).delete() 

    //imp mortal strike
    std.Spells.load(35446).delete() 
    std.Spells.load(35448).delete()
    std.Spells.load(35449).delete()

    //juggernaut
    std.Spells.load(64976).delete() 

    //unrelenting assault
    std.Spells.load(46859).delete() 
    std.Spells.load(46860).delete()

    //endless rage
    std.Spells.load(29623).delete() 
    
    //blood frenzy
    std.Spells.load(29836).delete() 
    std.Spells.load(29859).delete()

    //Sudden death
    std.Spells.load(29723).delete() 
    std.Spells.load(29725).delete()
    std.Spells.load(29724).delete()

    //wrecking crew
    std.Spells.load(46867).delete() 
    std.Spells.load(56611).delete()
    std.Spells.load(56612).delete()
    std.Spells.load(56613).delete()
    std.Spells.load(56614).delete()

    //bladestorm
    std.Spells.load(46924).delete()
}

function deleteFuryTalents(){
    //Intensify Rage
    std.Spells.load(46908).delete() 
    std.Spells.load(46909).delete()
    std.Spells.load(56924).delete()
    
    //imp whirlwind
    std.Spells.load(29721).delete() 
    std.Spells.load(29776).delete()

    //imp berserker stance
    std.Spells.load(29759).delete() 
    std.Spells.load(29760).delete()
    std.Spells.load(29761).delete()
    std.Spells.load(29762).delete()
    std.Spells.load(29763).delete()

    //Furious Attacks
    std.Spells.load(46910).delete()
    std.Spells.load(46911).delete()

    //heroic Fury
    std.Spells.load(60970).delete()

    //Rampage
    std.Spells.load(29801).delete()

    //Blood Surge
    std.Spells.load(46913).delete()
    std.Spells.load(46914).delete()
    std.Spells.load(46915).delete()

    //Unending Fury
    std.Spells.load(56927).delete()
    std.Spells.load(56929).delete()
    std.Spells.load(56930).delete()
    std.Spells.load(56931).delete()
    std.Spells.load(56932).delete()

    //Titan's Grip
    std.Spells.load(46917).delete()
}

function deleteProtTalents(){
    //Focused rage
    std.Spells.load(29787).delete()
    std.Spells.load(29790).delete()
    std.Spells.load(29792).delete()

    //Imp d stance
    std.Spells.load(29593).delete()
    std.Spells.load(29594).delete()

    //Vitality
    std.Spells.load(29140).delete()
    std.Spells.load(29143).delete()
    std.Spells.load(29144).delete()

    //Safeguard
    std.Spells.load(46945).delete()
    std.Spells.load(46949).delete()

    //Devastate
    std.Spells.load(20243).delete()

    //Critical block
    std.Spells.load(47294).delete()
    std.Spells.load(47295).delete()
    std.Spells.load(47296).delete()

    //Warbringer
    std.Spells.load(57499).delete()

    //Sword and Board
    std.Spells.load(46951).delete()
    std.Spells.load(46952).delete()
    std.Spells.load(46953).delete()

    //Damage Shield
    std.Spells.load(58872).delete()
    std.Spells.load(58874).delete()

    //Shockwave
    std.Spells.load(46968).delete()
}




function deleteHolyTalents_Paladin(){
    //Blessed Life
    std.Spells.load(31828).delete()
    std.Spells.load(31829).delete()
    std.Spells.load(31830).delete()

    //Light's Grace
    std.Spells.load(31833).delete()
    std.Spells.load(31835).delete()
    std.Spells.load(31836).delete()

    //Light's Grace
    std.Spells.load(31837).delete()
    std.Spells.load(31838).delete()
    std.Spells.load(31839).delete()
    std.Spells.load(31840).delete()
    std.Spells.load(31841).delete()

    //Sacred Cleansing
    std.Spells.load(53551).delete()
    std.Spells.load(53552).delete()
    std.Spells.load(53553).delete()

    //Judgements of the Pure
    std.Spells.load(53671).delete()
    std.Spells.load(53673).delete()
    std.Spells.load(54151).delete()
    std.Spells.load(54154).delete()
    std.Spells.load(54155).delete()

    //Divine Illumination
    std.Spells.load(31842).delete()

    //Enlightened Judgements
    std.Spells.load(53556).delete()
    std.Spells.load(53557).delete()

    //Infusion of Light
    std.Spells.load(53569).delete()
    std.Spells.load(53576).delete()

    //Beacon of Light
    std.Spells.load(53563).delete()
}

function deleteProtTalents_Paladin(){
    //Ardent Defender
    std.Spells.load(31850).delete()
    std.Spells.load(31851).delete()
    std.Spells.load(31852).delete()

    //Spiritual Amendment
    std.Spells.load(31785).delete()
    std.Spells.load(33776).delete()

    //Combat Expertise
    std.Spells.load(31858).delete()
    std.Spells.load(31859).delete()
    std.Spells.load(31860).delete()

    //Redoubt  
    std.Spells.load(20127).delete()
    std.Spells.load(20130).delete()
    std.Spells.load(20135).delete()

    //touched by the Light
    std.Spells.load(53590).delete()
    std.Spells.load(53591).delete()
    std.Spells.load(53592).delete()

    //Avenger's Shield
    std.Spells.load(31935).delete()

    //Guarded by the Light
    std.Spells.load(53583).delete()
    std.Spells.load(53585).delete()

    //Shield of the Templar
    std.Spells.load(53709).delete()
    std.Spells.load(53710).delete()
    std.Spells.load(53711).delete()

    //Judgements of the Just
    std.Spells.load(53695).delete()
    std.Spells.load(53696).delete()
    
    //Hammer of the Righteous
    std.Spells.load(53595).delete()
}

function deleteRetTalents_Paladin(){
    //Judegements of the Wise
    std.Spells.load(31876).delete()
    std.Spells.load(31877).delete()
    std.Spells.load(31878).delete()

    //The Art of War
    std.Spells.load(53486).delete()
    std.Spells.load(53488).delete()

    //The Art of War
    std.Spells.load(53486).delete()
    std.Spells.load(53488).delete()

    //Fanaticism
    std.Spells.load(31879).delete()
    std.Spells.load(31880).delete()
    std.Spells.load(31881).delete()

    //Fanaticism
    std.Spells.load(53375).delete()
    std.Spells.load(53376).delete()

    //Crusader Strike
    std.Spells.load(35395).delete()

    //Crusader Strike
    std.Spells.load(53501).delete()
    std.Spells.load(53502).delete()
    std.Spells.load(53503).delete()

    //Swift retribution
    std.Spells.load(53379).delete()
    std.Spells.load(53484).delete()
    std.Spells.load(53648).delete()

    //Righteous Vengeance
    std.Spells.load(53380).delete()
    std.Spells.load(53381).delete()
    std.Spells.load(53382).delete()

    //Divine Storm 
    std.Spells.load(53385).delete()
}




function deleteBMtalents(){
    //Ferocious Inspiration
    std.Spells.load(34455).delete()
    std.Spells.load(34459).delete()
    std.Spells.load(34460).delete()

    //Catlike Reflexes
    std.Spells.load(34462).delete()
    std.Spells.load(34464).delete()
    std.Spells.load(34465).delete()

    //invigoration
    std.Spells.load(53252).delete()
    std.Spells.load(53253).delete()

    //The Beast Within
    std.Spells.load(34692).delete()

    //Longevity
    std.Spells.load(53262).delete()
    std.Spells.load(53263).delete()
    std.Spells.load(53264).delete()

    //Serpent's Swiftness
    std.Spells.load(34466).delete()
    std.Spells.load(34467).delete()
    std.Spells.load(34468).delete()
    std.Spells.load(34469).delete()
    std.Spells.load(34470).delete()

    //Cobra Strikes
    std.Spells.load(53256).delete()
    std.Spells.load(53259).delete()
    std.Spells.load(53260).delete()

    //Kindred Spirits
    std.Spells.load(56314).delete()
    std.Spells.load(56315).delete()
    std.Spells.load(56316).delete()
    std.Spells.load(56317).delete()
    std.Spells.load(56318).delete()

    //Beast Master
    std.Spells.load(53270).delete()
}

function deleteMarksmanTalents(){
    //Improved barrage
    std.Spells.load(35104).delete()
    std.Spells.load(35110).delete()
    std.Spells.load(35111).delete()

    //Piercing Shots
    std.Spells.load(53234).delete()
    std.Spells.load(53237).delete()
    std.Spells.load(53238).delete()

    //Master Marksman
    std.Spells.load(34485).delete()
    std.Spells.load(34486).delete()
    std.Spells.load(34487).delete()
    std.Spells.load(34488).delete()
    std.Spells.load(34489).delete()

    //Rapid Recuperation
    std.Spells.load(53228).delete()
    std.Spells.load(53232).delete()

    //Silencing Shot
    std.Spells.load(34490).delete()

    //Improved Steady Shot
    std.Spells.load(53221).delete()
    std.Spells.load(53222).delete()
    std.Spells.load(53224).delete()

    //Wild Quiver
    std.Spells.load(53215).delete()
    std.Spells.load(53216).delete()
    std.Spells.load(53217).delete()

    //Marked for Death
    std.Spells.load(53241).delete()
    std.Spells.load(53243).delete()
    std.Spells.load(53244).delete()
    std.Spells.load(53245).delete()
    std.Spells.load(53246).delete()

    //Chimera Shot
    std.Spells.load(53209).delete()
}

function deleteSurvivalTalents(){
    //Thrill of the Hunt
    std.Spells.load(34497).delete()
    std.Spells.load(34498).delete()
    std.Spells.load(34499).delete()

    //Expose Weakness
    std.Spells.load(34500).delete()
    std.Spells.load(34502).delete()
    std.Spells.load(34503).delete()

    //Noxious Stings
    std.Spells.load(53295).delete()
    std.Spells.load(53296).delete()
    std.Spells.load(53297).delete()

    //Master Tactician
    std.Spells.load(34506).delete()
    std.Spells.load(34507).delete()
    std.Spells.load(34508).delete()
    std.Spells.load(34838).delete()
    std.Spells.load(34839).delete()

    //Point of No Escape
    std.Spells.load(53298).delete()
    std.Spells.load(53299).delete()

    //Black Arrow
    std.Spells.load(3674).delete()

    //Sniper Training
    std.Spells.load(53302).delete()
    std.Spells.load(53303).delete()
    std.Spells.load(53304).delete()

    //Hunting Party
    std.Spells.load(53290).delete()
    std.Spells.load(53291).delete()
    std.Spells.load(53292).delete()

    //Explosive Shot
    std.Spells.load(53301).delete()
}




function deleteAssassinationTalents(){
    //Deadened Nerves
    std.Spells.load(31380).delete()
    std.Spells.load(31382).delete()
    std.Spells.load(31383).delete()

    //Deadly Brew
    std.Spells.load(51625).delete()
    std.Spells.load(51626).delete()

    //Focused Attacks 
    std.Spells.load(51634).delete()
    std.Spells.load(51635).delete()
    std.Spells.load(51636).delete()

    //Find Weakness
    std.Spells.load(31234).delete()
    std.Spells.load(31235).delete()
    std.Spells.load(31236).delete()

    //Turn the Tables
    std.Spells.load(51627).delete()
    std.Spells.load(51628).delete()
    std.Spells.load(51629).delete()

    //Master Poisoner
    std.Spells.load(31226).delete()
    std.Spells.load(31227).delete()
    std.Spells.load(58410).delete()

    //Mutilate
    std.Spells.load(1329).delete()

    //Cut to the Chase
    std.Spells.load(51664).delete()
    std.Spells.load(51665).delete()
    std.Spells.load(51667).delete()
    std.Spells.load(51668).delete()
    std.Spells.load(51669).delete()

    //Hunger For Blood
    std.Spells.load(51662).delete()
}

function deleteCombatTalents(){
    //Nerves of Steel
    std.Spells.load(31130).delete()
    std.Spells.load(31131).delete()

    //Vitality
    std.Spells.load(31122).delete()
    std.Spells.load(31123).delete()
    std.Spells.load(61329).delete()

    //Throwing Spec
    std.Spells.load(5952).delete()
    std.Spells.load(51679).delete()

    //Combat Potency
    std.Spells.load(35541).delete()
    std.Spells.load(35550).delete()
    std.Spells.load(35551).delete()
    std.Spells.load(35552).delete()
    std.Spells.load(35553).delete()

    //Savage Combat
    std.Spells.load(51682).delete()
    std.Spells.load(58413).delete()

    //Unfair Advantage
    std.Spells.load(51672).delete()
    std.Spells.load(51674).delete()

    //Surprise Attacks
    std.Spells.load(32601).delete()

    //Prey on the Weak
    std.Spells.load(51685).delete()
    std.Spells.load(51686).delete()
    std.Spells.load(51687).delete()
    std.Spells.load(51688).delete()
    std.Spells.load(51689).delete()

    //Killing Spree
    std.Spells.load(51690).delete()
}

function deleteSubtletyTalents(){
    //Cheat Death
    std.Spells.load(31228).delete()
    std.Spells.load(31229).delete()
    std.Spells.load(31230).delete()

    //Enveloping Shadows
    std.Spells.load(31211).delete()
    std.Spells.load(31212).delete()
    std.Spells.load(31213).delete()

    //Waylay
    std.Spells.load(51692).delete()
    std.Spells.load(51696).delete()

    //Sinister Calling 
    std.Spells.load(31216).delete()
    std.Spells.load(31217).delete()
    std.Spells.load(31218).delete()
    std.Spells.load(31219).delete()
    std.Spells.load(31220).delete()

    //Filthy Tricks
    std.Spells.load(58414).delete()
    std.Spells.load(58415).delete()

    //Shadowstep
    std.Spells.load(36554).delete()

    //Honor Among Thieves
    std.Spells.load(51698).delete()
    std.Spells.load(51700).delete()
    std.Spells.load(51701).delete()

    //Slaughter from the Shadows
    std.Spells.load(51708).delete()
    std.Spells.load(51709).delete()
    std.Spells.load(51710).delete()
    std.Spells.load(51711).delete()
    std.Spells.load(51712).delete()

    //Shadow Dance 
    std.Spells.load(51713).delete()
}




function deleteDiscTalents_Priest(){
    //Improved Flash Heal
    std.Spells.load(63504).delete()
    std.Spells.load(63505).delete()
    std.Spells.load(63506).delete()

    //Focused Will
    std.Spells.load(45234).delete()
    std.Spells.load(45243).delete()
    std.Spells.load(45244).delete()

    //Rapture
    std.Spells.load(47535).delete()
    std.Spells.load(47536).delete()
    std.Spells.load(47537).delete()

    //Renewed Hope
    std.Spells.load(57470).delete()
    std.Spells.load(57472).delete()

    //Aspiration
    std.Spells.load(47507).delete()
    std.Spells.load(47508).delete()

    //Divine Aegis
    std.Spells.load(47509).delete()
    std.Spells.load(47511).delete()
    std.Spells.load(47515).delete()

    //Pain Suppression
    std.Spells.load(33206).delete()

    //Grace
    std.Spells.load(47516).delete()
    std.Spells.load(47517).delete()

    //Borrowed Time
    std.Spells.load(52795).delete()
    std.Spells.load(52797).delete()
    std.Spells.load(52798).delete()
    std.Spells.load(52799).delete()
    std.Spells.load(52800).delete()

    //Penance
    std.Spells.load(47540).delete()
}

function deleteHolyTalents_Priest(){
     //Blessed Resilience
     std.Spells.load(33142).delete()
     std.Spells.load(33145).delete()
     std.Spells.load(33146).delete()

     //Holy Concentration
     std.Spells.load(34753).delete()
     std.Spells.load(34859).delete()
     std.Spells.load(34860).delete()

     //Body and Soul
     std.Spells.load(64127).delete()
     std.Spells.load(64129).delete()

     //Empowered Healing
     std.Spells.load(33158).delete()
     std.Spells.load(33159).delete()
     std.Spells.load(33160).delete()
     std.Spells.load(33161).delete()
     std.Spells.load(33162).delete()

     //Serendipity
     std.Spells.load(63730).delete()
     std.Spells.load(63733).delete()
     std.Spells.load(63737).delete()

     //Test of Faith
     std.Spells.load(47558).delete()
     std.Spells.load(47559).delete()
     std.Spells.load(47560).delete()

     //Circle of Healing
     std.Spells.load(34861).delete()

     //Empowered Renew
     std.Spells.load(63534).delete()
     std.Spells.load(63542).delete()
     std.Spells.load(63543).delete()

     //Divine Providence
     std.Spells.load(47562).delete()
     std.Spells.load(47564).delete()
     std.Spells.load(47565).delete()
     std.Spells.load(47566).delete()
     std.Spells.load(47567).delete()

     //Guardian Spirit
     std.Spells.load(47788).delete()
}

function deleteShadowTalents_Priest(){
    //Shadow Power
    std.Spells.load(33221).delete()
    std.Spells.load(33222).delete()
    std.Spells.load(33223).delete()
    std.Spells.load(33224).delete()
    std.Spells.load(33225).delete()

    //Misery
    std.Spells.load(33191).delete()
    std.Spells.load(33192).delete()
    std.Spells.load(33193).delete()

    //Improved Shadow Form
    std.Spells.load(47569).delete()
    std.Spells.load(47570).delete()

    //Pain and Suffering
    std.Spells.load(47580).delete()
    std.Spells.load(47581).delete()
    std.Spells.load(47582).delete()

    //Vampiric Touch
    std.Spells.load(34914).delete()

    //Psychic Horror
    std.Spells.load(64044).delete()

    //Twisted Faith
    std.Spells.load(47573).delete()
    std.Spells.load(47577).delete()
    std.Spells.load(47578).delete()
    std.Spells.load(51166).delete()
    std.Spells.load(51167).delete()

    //Dispersion
    std.Spells.load(47585).delete()
}




function deleteElementalTalents(){
    //Storm, Earth and Fire
    std.Spells.load(51483).delete()
    std.Spells.load(51485).delete()
    std.Spells.load(51486).delete()

    //Lightning Overload
    std.Spells.load(30675).delete()
    std.Spells.load(30678).delete()
    std.Spells.load(30679).delete()

    //Elemental Oath
    std.Spells.load(51466).delete()
    std.Spells.load(51470).delete()

    //Booming Echoes
    std.Spells.load(63370).delete()
    std.Spells.load(63372).delete()

    //Astral Shift
    std.Spells.load(51474).delete()
    std.Spells.load(51478).delete()
    std.Spells.load(51479).delete()

    //Totem of Wrath
    std.Spells.load(30706).delete()
    
    //Lava Flows
    std.Spells.load(51480).delete()
    std.Spells.load(51481).delete()
    std.Spells.load(51482).delete()

    //Shamanism
    std.Spells.load(62097).delete()
    std.Spells.load(62098).delete()
    std.Spells.load(62099).delete()
    std.Spells.load(62100).delete()
    std.Spells.load(62101).delete()

    //Thunderstorm
    std.Spells.load(51490).delete()
}

function deleteEnhancementTalents(){
    //Dual Wield Spec
    std.Spells.load(30816).delete()
    std.Spells.load(30818).delete()
    std.Spells.load(30819).delete()

    //Lava Lash
    std.Spells.load(60103).delete()

    //Improved Stormstrike
    std.Spells.load(51521).delete()
    std.Spells.load(51522).delete()

    //Static Shock
    std.Spells.load(51525).delete()
    std.Spells.load(51526).delete()
    std.Spells.load(51527).delete()

    //Mental Quickness
    std.Spells.load(30812).delete()
    std.Spells.load(30813).delete()
    std.Spells.load(30814).delete()

    //Shamanistic Rage
    std.Spells.load(30823).delete()

    //Earthen Power
    std.Spells.load(51523).delete()
    std.Spells.load(51524).delete()

    //Maelstrom Weapon
    std.Spells.load(51528).delete()
    std.Spells.load(51529).delete()
    std.Spells.load(51530).delete()
    std.Spells.load(51531).delete()
    std.Spells.load(51532).delete()

    //Feral Spirit
    std.Spells.load(51533).delete()

    //Dual Wield
    std.Spells.load(30798).delete()
}

function deleteRestorationTalents_Shaman(){
    //Cleanse Spirit
    std.Spells.load(51886).delete()

    //Nature's Guardian
    std.Spells.load(30881).delete()
    std.Spells.load(30883).delete()
    std.Spells.load(30884).delete()
    std.Spells.load(30885).delete()
    std.Spells.load(30886).delete()

    //Blessing of the Eternals
    std.Spells.load(51554).delete()
    std.Spells.load(51555).delete()

    //Improved Chain Heal
    std.Spells.load(30872).delete()
    std.Spells.load(30873).delete()

    //Nature's Blessing
    std.Spells.load(30867).delete()
    std.Spells.load(30868).delete()
    std.Spells.load(30869).delete()

    //Ancestral Awakening
    std.Spells.load(51556).delete()
    std.Spells.load(51557).delete()
    std.Spells.load(51558).delete()

    //Earth Shield
    std.Spells.load(974).delete()

    //Improved Earth Shield
    std.Spells.load(51560).delete()
    std.Spells.load(51561).delete()
    
    //Tidal Waves
    std.Spells.load(51562).delete()
    std.Spells.load(51563).delete()
    std.Spells.load(51564).delete()
    std.Spells.load(51565).delete()
    std.Spells.load(51566).delete()

    //Riptide
    std.Spells.load(61295).delete()
}




function deleteArcaneTalents(){
    //Incanter's Absorption
    std.Spells.load(44394).delete()
    std.Spells.load(44395).delete()
    std.Spells.load(44396).delete()

    //Arcane Empowerment
    std.Spells.load(31579).delete()
    std.Spells.load(31582).delete()
    std.Spells.load(31583).delete()

    //Arcane Flows
    std.Spells.load(44378).delete()
    std.Spells.load(44379).delete()

    //Mind Mastery
    std.Spells.load(31584).delete()
    std.Spells.load(31585).delete()
    std.Spells.load(31586).delete()
    std.Spells.load(31587).delete()
    std.Spells.load(31588).delete()

    //Slow
    std.Spells.load(31589).delete()

    //Missile Barrage
    std.Spells.load(44404).delete()
    std.Spells.load(54486).delete()
    std.Spells.load(54488).delete()
    std.Spells.load(54489).delete()
    std.Spells.load(54490).delete()

    //Spell Power
    std.Spells.load(35578).delete()
    std.Spells.load(35581).delete()

    //Netherwind Presence
    std.Spells.load(44400).delete()
    std.Spells.load(44402).delete()
    std.Spells.load(44403).delete()

    //Arcane Barrage
    std.Spells.load(44425).delete()
}

function deleteFireTalents(){
    //Molten Fury
    std.Spells.load(31679).delete()
    std.Spells.load(31680).delete()

    //Pyromaniac
    std.Spells.load(34293).delete()
    std.Spells.load(34295).delete()
    std.Spells.load(34296).delete()

    //Empowered Fire
    std.Spells.load(31656).delete()
    std.Spells.load(31657).delete()
    std.Spells.load(31658).delete()

    //Fiery Payback
    std.Spells.load(64353).delete()
    std.Spells.load(64357).delete()

    //Hot Streak
    std.Spells.load(44445).delete()
    std.Spells.load(44446).delete()
    std.Spells.load(44448).delete()

    //Dragon's Breath
    std.Spells.load(31661).delete()

    //Firestarter
    std.Spells.load(44442).delete()
    std.Spells.load(44443).delete()

    //Burnout
    std.Spells.load(44449).delete()
    std.Spells.load(44469).delete()
    std.Spells.load(44470).delete()
    std.Spells.load(44471).delete()
    std.Spells.load(44472).delete()

    //Living Bomb
    std.Spells.load(44457).delete()
}

function deleteFrostTalents(){
    //Arctic Winds
    std.Spells.load(31674).delete()
    std.Spells.load(31675).delete()
    std.Spells.load(31676).delete()
    std.Spells.load(31677).delete()
    std.Spells.load(31678).delete()

    //Shattered Barrier
    std.Spells.load(44745).delete()
    std.Spells.load(54787).delete()

    //Empowered Frostbolt
    std.Spells.load(31682).delete()
    std.Spells.load(31683).delete()

    //Fingers of Frost
    std.Spells.load(44543).delete()
    std.Spells.load(44545).delete()

    //Summon Water Elemental
    std.Spells.load(31687).delete()

    //Enduring Water
    std.Spells.load(44557).delete()
    std.Spells.load(44560).delete()
    std.Spells.load(44561).delete()

    //Brain Freeze
    std.Spells.load(44546).delete()
    std.Spells.load(44548).delete()
    std.Spells.load(44549).delete()

    //Chilled to the Bone
    std.Spells.load(44566).delete()
    std.Spells.load(44567).delete()
    std.Spells.load(44568).delete()
    std.Spells.load(44569).delete()
    std.Spells.load(44570).delete()

    //Deep Freeze
    std.Spells.load(44572).delete()
}




function deleteAffliTalents(){
    //Contagion
    std.Spells.load(30060).delete()
    std.Spells.load(30061).delete()
    std.Spells.load(30062).delete()
    std.Spells.load(30063).delete()
    std.Spells.load(30064).delete()

    //Eradication
    std.Spells.load(47195).delete()
    std.Spells.load(47196).delete()
    std.Spells.load(47197).delete()

    //Malediction
    std.Spells.load(32477).delete()
    std.Spells.load(32483).delete()
    std.Spells.load(32484).delete()

    //Improved Howl of Terror
    std.Spells.load(30054).delete()
    std.Spells.load(30057).delete()

    //Death's Embrace
    std.Spells.load(47198).delete()
    std.Spells.load(47199).delete()
    std.Spells.load(47200).delete()

    //Unstable Affli
    std.Spells.load(30108).delete()

    //Pandemic
    std.Spells.load(58435).delete()

    //Everlasting Affli
    std.Spells.load(47201).delete()
    std.Spells.load(47202).delete()
    std.Spells.load(47203).delete()
    std.Spells.load(47204).delete()
    std.Spells.load(47205).delete()

    //Haunt
    std.Spells.load(48181).delete()
}

function deleteDemoTalents(){
    //Demonology
    std.Spells.load(35691).delete()
    std.Spells.load(35692).delete()
    std.Spells.load(35693).delete()

    //Demonic Resilience
    std.Spells.load(30319).delete()
    std.Spells.load(30320).delete()
    std.Spells.load(30321).delete()

    //Demonic Tactics
    std.Spells.load(30242).delete()
    std.Spells.load(30245).delete()
    std.Spells.load(30246).delete()
    std.Spells.load(30247).delete()
    std.Spells.load(30248).delete()

    //Decimation
    std.Spells.load(63156).delete()
    std.Spells.load(63158).delete()

    //Summon Felguard
    std.Spells.load(30146).delete()

    //Nemesis
    std.Spells.load(63117).delete()
    std.Spells.load(63121).delete()
    std.Spells.load(63123).delete()

    //Improved Demonic Tactics
    std.Spells.load(54347).delete()
    std.Spells.load(54348).delete()
    std.Spells.load(54349).delete()

    //Demonic Pact
    std.Spells.load(47236).delete()
    std.Spells.load(47237).delete()
    std.Spells.load(47238).delete()
    std.Spells.load(47239).delete()
    std.Spells.load(47240).delete()

    //Metamorphosis
    std.Spells.load(59672).delete()
}

function deleteDestroTalents(){
    //Soul Leech
    std.Spells.load(30293).delete()
    std.Spells.load(30295).delete()
    std.Spells.load(30296).delete()

    //Pyroclasm
    std.Spells.load(18096).delete()
    std.Spells.load(18073).delete()
    std.Spells.load(63245).delete()

    //Improved Soul Leech
    std.Spells.load(54117).delete()
    std.Spells.load(54118).delete()

    //Shadow and Flame
    std.Spells.load(30288).delete()
    std.Spells.load(30289).delete()
    std.Spells.load(30290).delete()
    std.Spells.load(30291).delete()
    std.Spells.load(30292).delete()

    //Shadowfury
    std.Spells.load(30283).delete()

    //Backdraft
    std.Spells.load(47258).delete()
    std.Spells.load(47259).delete()
    std.Spells.load(47260).delete()

    //Empowered Imp
    std.Spells.load(47220).delete()
    std.Spells.load(47221).delete()
    std.Spells.load(47223).delete()

    //Fire and Brimstone
    std.Spells.load(47266).delete()
    std.Spells.load(47267).delete()
    std.Spells.load(47268).delete()
    std.Spells.load(47269).delete()
    std.Spells.load(47270).delete()

    //Chaos Bolt
    std.Spells.load(50796).delete()
}




function deleteBlnceTalents(){
    //Improved Moonkin Form
    std.Spells.load(48384).delete()
    std.Spells.load(48395).delete()
    std.Spells.load(48396).delete()

    //Improved Faerie Fire
    std.Spells.load(33600).delete()
    std.Spells.load(33601).delete()
    std.Spells.load(33602).delete()

    //Owlkin Frenzy
    std.Spells.load(48389).delete()
    std.Spells.load(48392).delete()
    std.Spells.load(48393).delete()

    //Wrath of Cenarius
    std.Spells.load(33603).delete()
    std.Spells.load(33604).delete()
    std.Spells.load(33605).delete()
    std.Spells.load(33606).delete()
    std.Spells.load(33607).delete()

    //Typhoon
    std.Spells.load(50516).delete()

    //Force of Nature
    std.Spells.load(33831).delete()

    //Gale Winds
    std.Spells.load(48488).delete()
    std.Spells.load(48514).delete()

    //Eclipse
    std.Spells.load(48516).delete()
    std.Spells.load(48521).delete()
    std.Spells.load(48525).delete()

    //Earth and Moon
    std.Spells.load(48506).delete()
    std.Spells.load(48510).delete()
    std.Spells.load(48511).delete()

    //Starfall
    std.Spells.load(48505).delete()
}

function deleteFeralTalents(){
    //Improved Leader of the Pack
    std.Spells.load(34297).delete()
    std.Spells.load(34300).delete()

    //Primal Tenacity
    std.Spells.load(33851).delete()
    std.Spells.load(33852).delete()
    std.Spells.load(33957).delete()

    //Protector of the Pack
    std.Spells.load(57873).delete()
    std.Spells.load(57876).delete()
    std.Spells.load(57877).delete()

    //Predetory Instincts
    std.Spells.load(33859).delete()
    std.Spells.load(33866).delete()
    std.Spells.load(33867).delete()

    //Infected Wounds
    std.Spells.load(48483).delete()
    std.Spells.load(48484).delete()
    std.Spells.load(48485).delete()

    //King of the Jungle
    std.Spells.load(48492).delete()
    std.Spells.load(48494).delete()
    std.Spells.load(48495).delete()

    //Mangle
    std.Spells.load(33917).delete()

    //Improved Mangle
    std.Spells.load(48532).delete()
    std.Spells.load(48489).delete()
    std.Spells.load(48491).delete()

    //Rend and Tear
    std.Spells.load(48432).delete()
    std.Spells.load(48433).delete()
    std.Spells.load(48434).delete()
    std.Spells.load(51268).delete()
    std.Spells.load(51269).delete()

    //Primal Gore
    std.Spells.load(63503).delete()

    //Berserk
    std.Spells.load(50334).delete()
    
}

function deleteRestoTalents_Druid(){
    //Living Spirit
    std.Spells.load(34151).delete()
    std.Spells.load(34152).delete()
    std.Spells.load(34153).delete()

    //Natural Perfection
    std.Spells.load(33881).delete()
    std.Spells.load(33882).delete()
    std.Spells.load(33883).delete()

    //Empowered Rejuv
    std.Spells.load(33886).delete()
    std.Spells.load(33887).delete()
    std.Spells.load(33888).delete()
    std.Spells.load(33889).delete()
    std.Spells.load(33890).delete()

    //Living Seed
    std.Spells.load(48496).delete()
    std.Spells.load(48499).delete()
    std.Spells.load(48500).delete()

    //Tree of Life
    std.Spells.load(65139).delete()

    //Improved Tree of Life
    std.Spells.load(48535).delete()
    std.Spells.load(48536).delete()
    std.Spells.load(48537).delete()

    //Revitalize
    std.Spells.load(48539).delete()
    std.Spells.load(48544).delete()
    std.Spells.load(48545).delete()

    //Improved
    std.Spells.load(63410).delete()
    std.Spells.load(63411).delete()

    //Gift of the Earthmother
    std.Spells.load(51179).delete()
    std.Spells.load(51180).delete()
    std.Spells.load(51181).delete()
    std.Spells.load(51182).delete()
    std.Spells.load(51183).delete()

    //Wild Growth
    std.Spells.load(48438).delete()
}