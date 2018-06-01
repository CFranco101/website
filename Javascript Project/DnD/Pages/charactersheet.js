function updateStrength() {
    update("strength-number","saving-boxS","saving-strength","strength-text");
    skillAth();
    }

function updateDexterity() {
    update("dexterity-number","saving-boxD","saving-dexterity","dexterity-text");
    skillAcr();
    skillSle();
    skillSte();
    }

function updateConstitution() {
    update("constitution-number","saving-boxC","saving-constitution","constitution-text");
    }

function updateIntelligence() {
    update("intelligence-number","saving-boxI","saving-intelligence","intelligence-text");
    skillArc();
    skillHis();
    skillInv();
    skillNat();
    skillRel();
    }

function updateWisdom() {
    update("wisdom-number","saving-boxW","saving-wisdom","wisdom-text");
    skillAni();
    skillIns();
    skillMed();
    skillPer();
    skillSur();
    }

function updateCharisma() {
    update("charisma-number","saving-boxCH","saving-charisma","charisma-text"); 
    skillDec();
    skillInt();
    skillPerf();
    skillPers();
    }

function skillAcr() {
    update ("dexterity-number","skill-acr","skillsnum-acr","dexterity-text");
}

function skillAni() {
    update ("wisdom-number","skill-ani","skillsnum-ani","wisdom-text");
}

function skillArc() {
    update ("intelligence-number","skill-arc","skillsnum-arc","intelligence-text");
}

function skillAth() {
    update ("strength-number","skill-ath","skillsnum-ath","strength-text");
}

function skillDec() {
    update ("charisma-number","skill-dec","skillsnum-dec","charisma-text");
}

function skillHis() {
    update ("intelligence-number","skill-his","skillsnum-his","intelligence-text");
}

function skillIns() {
    update ("wisdom-number","skill-ins","skillsnum-ins","wisdom-text");
}

function skillInt() {
    update ("charisma-number","skill-int","skillsnum-int","charisma-text");
}

function skillInv() {
    update ("intelligence-number","skill-inv","skillsnum-inv","intelligence-text");
}

function skillMed() {
    update ("wisdom-number","skill-med","skillsnum-med","wisdom-text");
}

function skillNat() {
    update ("intelligence-number","skill-nat","skillsnum-nat","intelligence-text");
}

function skillPer() {
    update ("wisdom-number","skill-per","skillsnum-per","wisdom-text");
}

function skillPerf() {
    update ("charisma-number","skill-perf","skillsnum-perf","charisma-text");
}

function skillPers() {
    update ("charisma-number","skill-pers","skillsnum-pers","charisma-text");
}

function skillRel() {
    update ("intelligence-number","skill-rel","skillsnum-rel","intelligence-text");
}

function skillSle() {
    update ("dexterity-number","skill-sle","skillsnum-sle","dexterity-text");
}

function skillSte() {
    update ("dexterity-number","skill-ste","skillsnum-ste","dexterity-text");
}

function skillSur() {
    update ("wisdom-number","skill-sur","skillsnum-sur","wisdom-text");
}

function giveModifer(val) {
    if (val <= 0|| val >= 31)
            return 0;
    if (val == 1) {
            return -5;
            }
    else if (val == 2||val == 3) {
            return -4;
            }
     else if (val == 4||val == 5) {
                return -3;
            }
     else if (val == 6||val == 7) {
                return -2;
            }
    else if (val == 8||val == 9) {
                return -1;
            }
    else if (val == 10||val == 11) {
                return "+" + 0;
            }
    else if (val == 12||val == 13) {
                return "+" + 1;
            }
    else if (val == 14||val == 15) {
                return "+" + 2;
            }
    else if (val == 16||val == 17) {
                return "+" + 3;
            }
        else if (val == 18||val == 19) {
                return "+" + 4;
            }
        else if (val == 20||val == 21) {
                return "+" + 5;
            }
        else if (val == 22||val == 23) {
                return "+" + 6;
            }
        else if (val == 24||val == 25) {
                return "+" + 7;
            }
        else if (val ==26||val == 27) {
                return "+" + 8;
            }
        else if (val ==28||val == 29) {
                return "+" + 9;
            }
        else if (val ==30) {
                return "+" + 10;
            }
}

function addProfiecent() {
    return document.getElementById('bonus-num').value;
}

function update(abilityNum,box,skill,main) {
    var ability = document.getElementById(abilityNum).value;
    if (document.getElementById(box).checked == true)
        {
            document.getElementById(skill).innerHTML = parseInt(giveModifer(ability)) + parseInt(addProfiecent(ability));
         }
    else 
        {
            document.getElementById(skill).innerHTML = giveModifer(ability);
        }
    
        document.getElementById(main).innerHTML = giveModifer(ability);
}

function prof() {
    updateWisdom();
    updateCharisma();
    updateConstitution();
    updateDexterity();
    updateIntelligence();
    updateWisdom();
    
}