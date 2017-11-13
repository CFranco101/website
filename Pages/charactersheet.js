
function updateStrength() {
        var strength = document.getElementById("strength-number").value;
        if (document.getElementById('saving-boxS').checked == true)
            {
               document.getElementById('saving-strength').innerHTML = parseInt(giveModifer(strength)) + parseInt(addProfiecent(strength));
                
            }
        else 
            {
            document.getElementById('saving-strength').innerHTML = giveModifer(strength);
            }
    
        document.getElementById('strength-text').innerHTML = giveModifer(strength);
        
    }

function updateDexterity() {
        var dexterity = document.getElementById("dexterity-number").value;
        if (document.getElementById('saving-boxD').checked == true)
            {
               document.getElementById('saving-dexterity').innerHTML = parseInt(giveModifer(dexterity)) + parseInt(addProfiecent(dexterity));
                
            }
        else 
            {
            document.getElementById('saving-dexterity').innerHTML = giveModifer(dexterity);
            }
    
        document.getElementById('dexterity-text').innerHTML = giveModifer(dexterity);
    }

function updateConstitution() {
        var constitution = document.getElementById("constitution-number").value;
        if (document.getElementById('saving-boxC').checked == true)
            {
               document.getElementById('saving-constitution').innerHTML = parseInt(giveModifer(constitution)) + parseInt(addProfiecent(constitution));
                
            }
        else 
            {
            document.getElementById('saving-constitution').innerHTML = giveModifer(constitution);
            }
    
        document.getElementById('constitution-text').innerHTML = giveModifer(constitution);
    }

function updateIntelligence() {
        var intelligence = document.getElementById("intelligence-number").value;
        if (document.getElementById('saving-boxI').checked == true)
            {
               document.getElementById('saving-intelligence').innerHTML = parseInt(giveModifer(intelligence)) + parseInt(addProfiecent(intelligence));
                
            }
        else 
            {
            document.getElementById('saving-intelligence').innerHTML = giveModifer(intelligence);
            }
    
        document.getElementById('intelligence-text').innerHTML = giveModifer(intelligence);
        
    }

function updateWisdom() {
        var wisdom = document.getElementById("wisdom-number").value;
        if (document.getElementById('saving-boxW').checked == true)
            {
               document.getElementById('saving-wisdom').innerHTML = parseInt(giveModifer(wisdom)) + parseInt(addProfiecent(wisdom));
                
            }
        else 
            {
            document.getElementById('saving-wisdom').innerHTML = giveModifer(wisdom);
            }
    
        document.getElementById('wisdom-text').innerHTML = giveModifer(wisdom);
    }

function updateCharisma() {
        var charisma = document.getElementById("charisma-number").value;
        if (document.getElementById('saving-boxC').checked == true)
            {
               document.getElementById('saving-charisma').innerHTML = parseInt(giveModifer(charisma)) + parseInt(addProfiecent(charisma));
                
            }
        else 
            {
            document.getElementById('saving-charisma').innerHTML = giveModifer(charisma);
            }
    
        document.getElementById('charisma-text').innerHTML = giveModifer(charisma);  
    }

function giveModifer(val) {
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
                return 10;
            }
}

function addProfiecent() {
    return document.getElementById('bonus-num').value;
}

function savingStrength() {
    var strength = document.getElementById("strength-number").value;
    if (document.getElementById('saving-boxS').checked == true) {
        document.getElementById('saving-strength').innerHTML = parseInt(giveModifer(strength)) + parseInt(addProfiecent(strength));
    }
    else {
        document.getElementById('saving-strength').innerHTML = giveModifer(strength);
    }
    
}

function savingDexterity() {
    var dexterity = document.getElementById("dexterity-number").value;
    if (document.getElementById('saving-boxD').checked == true) {
        document.getElementById('saving-dexterity').innerHTML = parseInt(giveModifer(dexterity)) + parseInt(addProfiecent(dexterity));
    }
    else {
        document.getElementById('saving-strength').innerHTML = giveModifer(dexterity);
    }
}

function savingConstitution() {
    var constitution = document.getElementById("constitution-number").value;
    if (document.getElementById('saving-boxC').checked == true) {
        document.getElementById('saving-constitution').innerHTML = parseInt(giveModifer(constitution)) + parseInt(addProfiecent(constitution));
    }
    else {
        document.getElementById('saving-constitution').innerHTML = giveModifer(constitution);
    }
}

function savingIntelligence() {
    var intelligence = document.getElementById("intelligence-number").value;
        if (document.getElementById('saving-boxI').checked == true)
            {
               document.getElementById('saving-intelligence').innerHTML = parseInt(giveModifer(intelligence)) + parseInt(addProfiecent(intelligence));
                
            }
        else 
            {
            document.getElementById('saving-intelligence').innerHTML = giveModifer(intelligence);
            }
}

function savingWisdom() {
   var wisdom = document.getElementById("wisdom-number").value;
        if (document.getElementById('saving-boxW').checked == true)
            {
               document.getElementById('saving-wisdom').innerHTML = parseInt(giveModifer(wisdom)) + parseInt(addProfiecent(wisdom));
                
            }
        else 
            {
            document.getElementById('saving-wisdom').innerHTML = giveModifer(wisdom);
            }
}

function savingCharisma() {
    var charisma = document.getElementById("charisma-number").value;
        if (document.getElementById('saving-boxC').checked == true)
            {
               document.getElementById('saving-charisma').innerHTML = parseInt(giveModifer(charisma)) + parseInt(addProfiecent(charisma));
                
            }
        else 
            {
            document.getElementById('saving-charisma').innerHTML = giveModifer(charisma);
            }
}