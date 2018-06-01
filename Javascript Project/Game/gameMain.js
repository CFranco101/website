$(document).ready(function() {
    //player class values

    var wizard = {
        name: "Wizard",
        maxHealth: 45,
        currentHealth: 45,

        basicAttackName:"Staff Blast",
        basicAttackInfo:"Standard attack with Staff",
        basicAttackChance: 80,
        basicAttackDamageMin: 3,
        basicAttackDamageMax: 6,

        specialAttackName:"Fire Bolt",
        specialAttackInfo:"Heavy Damage from Fire!",
        specialAttackChance: 50,
        specialAttackDamageMin: 10,
        specialAttackDamageMax: 15,

        specialOneName:"Lighting Bolt",
        specialOneInfo:"Lighting struck!",
        specialOneChance: 25,
        specialOneDamageMin: 25,
        specialOneDamageMax:30,

        specialTwoName: "Lucky",
        specialTwoInfo: "Increase your Chance of hitting something!",
        specialTwoChance: 100,
        specialTwoValue: 10,
    };

    var knight = {
        name:"Knight",
        maxHealth: 60,
        currentHealth: 60,

        basicAttackName:"Sword Attack",
        basicAttackInfo:"Standard attack with Sword",
        basicAttackChance: 90,
        basicAttackDamageMin: 1,
        basicAttackDamageMax: 10,

        specialAttackName:"Rage Smash",
        specialAttackInfo:"With Rage do heavy damage!",
        specialAttackChance: 25,
        specialAttackDamageMin: 15,
        specialAttackDamageMax: 20,

        specialOneName:"Drink Potion",
        specialOneInfo:"Gain some Health back",
        specialOneChance: 100,
        specialOneValueMin: 5,
        specialOneValueMax: 15,

        specialTwoName: "Rally",
        specialTwoInfo: "Influence enemy to attack themselves",
        specialTwoChance: 15,

    };

    var rogue = {
        name:"Rogue",
        maxHealth: 30,
        currentHealth: 30,

        basicAttackName:"Dagger Attack",
        basicAttackInfo:"Standard attack with dagger",
        basicAttackChance: 70,
        basicAttackDamageMin: 10,
        basicAttackDamageMax: 16,

        specialAttackName:"Swift Strike",
        specialAttackInfo:"In the Shadows, the rogue strikes",
        specialAttackChance: 20,
        specialAttackDamageMin: 20,
        specialAttackDamageMax: 22,

        specialOneName:"Dodge",
        specialOneInfo:"In the Shadows, rogue can dodge the next attack",
        specialOneChance: 50,

        specialTwoName: "Piercing Cut",
        specialTwoInfo: "The Rogue can cause the target to bleed",
        specialTwoChance: 30,
        specialTwoValue: 10,

    };

    //Monster Values

    var ghost = {
        name: "Ghost",
        maxHealth: 35,
        currentHealth: 35,

        pickNum: 0,
        currentAttack: "",

        normalAttackChance: 60,
        normalAttackDamageMin: 5,
        normalAttackDamageMax: 8,

        heavyAttackChance: 35,
        heavyAttackDamageMin: 12,
        heavyAttackDamageMax: 16,

        pickAttack: function() {
            this.pickNum = parseInt(Math.random()* (2 -1)+1);
            if(this.pickNum === 1)
            {
                this.currentAttack = "Normal Attack";
            }

            if(this.pickNum === 2)
            {
                this.currentAttack = "Heavy Attack";
            }
        }
    };

    var wolf = {
        name: "Wolf",
        maxHealth: 50,
        currentHealth: 50,

        pickNum: 0,
        currentAttack: "",

        normalAttackChance: 80,
        normalAttackDamageMin: 4,
        normalAttackDamageMax: 12,

        heavyAttackChance: 10,
        heavyAttackDamageMin: 20,
        heavyAttackDamageMax: 25,

        pickAttack: function() {
            this.pickNum = parseInt(Math.random()* (2 -1)+1);
            if(this.pickNum === 1)
            {
                this.currentAttack = "Normal Attack";
            }

            if(this.pickNum === 2)
            {
                this.currentAttack = "Heavy Attack";
            }
        }
    };

    var zombie = {
        name: "Zombie",
        maxHealth: 100,
        currentHealth: 100,

        pickNum: 0,
        currentAttack: "",

        normalAttackChance: 50,
        normalAttackDamageMin: 10,
        normalAttackDamageMax: 12,

        heavyAttackChance: 35,
        heavyAttackDamageMin: 15,
        heavyAttackDamageMax: 25,

        pickAttack: function() {
            this.pickNum = parseInt(Math.random()* (2 -1)+1);
            if(this.pickNum === 1)
            {
                this.currentAttack = "Normal Attack";
            }

            if(this.pickNum === 2)
            {
                this.currentAttack = "Heavy Attack";
            }
        }
    };

    var cyclops = {
        name: "Cyclops",
        maxHealth: 75,
        currentHealth: 75,

        pickNum: 0,
        currentAttack: "",

        normalAttackChance: 90,
        normalAttackDamageMin: 10,
        normalAttackDamageMax: 16,

        heavyAttackChance: 50,
        heavyAttackDamageMin: 17,
        heavyAttackDamageMax: 22,

        pickAttack: function() {
            this.pickNum = parseInt(Math.random()* (2 -1)+1);
            if(this.pickNum === 1)
            {
                this.currentAttack = "Normal Attack";
            }

            if(this.pickNum === 2)
            {
                this.currentAttack = "Heavy Attack";
            }
        }
    };

    var troll = {
        name: "Troll",
        maxHealth: 80,
        currentHealth: 80,

        pickNum: 0,
        currentAttack: "",

        normalAttackChance: 60,
        normalAttackDamageMin: 10,
        normalAttackDamageMax: 12,

        heavyAttackChance: 5,
        heavyAttackDamageMin: 30,
        heavyAttackDamageMax: 35,

        pickAttack: function() {
            this.pickNum = parseInt(Math.random()* (2 -1)+1);
            if(this.pickNum === 1)
            {
                this.currentAttack = "Normal Attack";
            }

            if(this.pickNum === 2)
            {
                this.currentAttack = "Heavy Attack";
            }
        }
    };

    var dragon = {
        name: "Dragon",
        maxHealth: 140,
        currentHealth: 140,

        pickNum: 0,
        currentAttack: "",

        normalAttackChance: 80,
        normalAttackDamageMin: 12,
        normalAttackDamageMax: 20,

        heavyAttackChance: 35,
        heavyAttackDamageMin: 21,
        heavyAttackDamageMax: 26,

        pickAttack: function() {
            this.pickNum = parseInt(Math.random()* (2 -1)+1);
            if(this.pickNum === 1)
            {
                this.currentAttack = "Normal Attack";
            }

            if(this.pickNum === 2)
            {
                this.currentAttack = "Heavy Attack";
            }
        }
    };


    //constant variables
    var playerClass;
    var battleNum = 1;
    var currentMonster;
    var monster = "";
    var damage = 0;
    var healAmount = 0;
    var overHeal = 0;
    var dodge = false;
    var lucky = false;
    var rally = false;
    var bleed = false;
    var bleedTurn = 2;


    //functions to run Game
    function checkHit(chance){
        if(chance >= (Math.random() * (100 - 1 ) + 1))
            return true;
        else
            return false;
    }

    function damageAmount(min,max){
            return ((Math.random() * (max - min) + min));
    }

    function playerRound(name){
        $("#option-basicAttack").hide();
        $("#option-specialAttack").hide();
        $("#option-SpecialOne").hide();
        $("#option-SpecialTwo").hide();
        $("#battle-class-fight").hide();
        clearTimeout();
        displayAttack(name);
        setTimeout(function () {
            if(checkMonsterDeath() === false)
                monsterTurn();
            else
                levelUp();
        }, 6500);
    }

    function checkMonsterDeath(){
        if(currentMonster.currentHealth <= 0)
            return true;
        else
            return false
    }

    function displayAttack(name){
        switch (name){
            case "BasicAttack":
                document.getElementById("battle-info-status").innerHTML = playerClass.name + " used " +
                    playerClass.basicAttackName;
                    if(checkHit(playerClass.basicAttackChance) === true) {
                        setTimeout(function () {
                            document.getElementById("battle-info-status").innerHTML = playerClass.basicAttackName
                                + " hits! ";
                        }, 3000);
                        damage = parseInt(damageAmount(playerClass.basicAttackDamageMin, playerClass.basicAttackDamageMax));
                        if(lucky === true) {
                            damage += playerClass.specialTwoValue;
                            lucky = false;
                        }
                        setTimeout(function () {
                            document.getElementById("battle-info-status").innerHTML = playerClass.basicAttackName
                                + " dealt " + damage.toString() + " damage!";
                            currentMonster.currentHealth -= damage;
                            document.getElementById("battle-image-enemy-health").innerHTML = currentMonster.currentHealth;
                        }, 5500);

                    }else{
                        setTimeout(function () {
                            document.getElementById("battle-info-status").innerHTML = playerClass.basicAttackName
                                + " misses  ";
                        }, 3000);
                    }

                break;
            case "SpecialAttack":
                document.getElementById("battle-info-status").innerHTML = playerClass.name + " used " +
                    playerClass.specialAttackName;
                    if(checkHit(playerClass.specialAttackChance) === true) {
                        setTimeout(function () {
                            document.getElementById("battle-info-status").innerHTML = playerClass.specialAttackName
                                + " hits! ";
                        }, 3000);
                        damage = parseInt(damageAmount(playerClass.specialAttackDamageMin, playerClass.specialAttackDamageMax));
                        if(lucky === true) {
                            damage += playerClass.specialTwoValue;
                            lucky = false;
                        }
                        setTimeout(function () {
                            document.getElementById("battle-info-status").innerHTML = playerClass.specialAttackName
                                + " dealt " + damage.toString() + " damage!";
                            currentMonster.currentHealth -= damage;
                            document.getElementById("battle-image-enemy-health").innerHTML = currentMonster.currentHealth;
                        }, 5500);
                    } else{
                        setTimeout(function () {
                        document.getElementById("battle-info-status").innerHTML = playerClass.specialAttackName
                            + " misses  ";
                    }, 3000);
                }

                break;
            case "SpecialOne":
                document.getElementById("battle-info-status").innerHTML = playerClass.name + " used " +
                    playerClass.specialOneName;
                    if(checkHit(playerClass.specialOneChance) === true) {
                        setTimeout(function () {
                            document.getElementById("battle-info-status").innerHTML = playerClass.specialOneName
                                + " hits! ";
                        }, 3000);
                        switch (playerClass.name) {
                            case "Wizard":
                                damage = parseInt(damageAmount(playerClass.specialOneDamageMin, playerClass.specialOneDamageMax));
                                if(lucky === true) {
                                    damage += playerClass.specialTwoValue;
                                    lucky = false;
                                }
                                setTimeout(function () {
                                    document.getElementById("battle-info-status").innerHTML = playerClass.specialOneName
                                        + " deals " + damage.toString() + " damage!";
                                    currentMonster.currentHealth -= damage;
                                    document.getElementById("battle-image-enemy-health").innerHTML = currentMonster.currentHealth;
                                }, 5500);
                                break;
                            case "Knight":
                                healAmount = parseInt(damageAmount(playerClass.specialOneValueMin,playerClass.specialOneValueMax));
                                overHeal = 0;
                                playerClass.currentHealth += healAmount;
                                if(playerClass.currentHealth > playerClass.maxHealth) {
                                    overHeal = playerClass.currentHealth - playerClass.maxHealth;
                                    playerClass.maxHealth -= overHeal;
                                }
                                healAmount -= overHeal;
                                setTimeout(function () {
                                    document.getElementById("battle-info-status").innerHTML = playerClass.specialOneName
                                        + " heals " + healAmount.toString() + " damage!";
                                    document.getElementById("battle-image-player-health").innerHTML = playerClass.currentHealth;
                                }, 5500);
                                break;
                            case "Rogue":
                                dodge = true;
                                setTimeout(function () {
                                    document.getElementById("battle-info-status").innerHTML = playerClass.name
                                        + " will dodge " + currentMonster.name + "'s next attack!";
                                }, 5500);
                                break;
                        }
                    }else {
                        setTimeout(function () {
                            document.getElementById("battle-info-status").innerHTML = playerClass.specialOneName
                                + " misses  ";
                        }, 3000);
                    }
                break;
            case "SpecialTwo":
                document.getElementById("battle-info-status").innerHTML = playerClass.name + " used " +
                    playerClass.specialTwoName;
                    if(checkHit(playerClass.specialTwoChance) === true) {
                        setTimeout(function () {
                            document.getElementById("battle-info-status").innerHTML = playerClass.specialTwoName
                                + " hits! ";
                        }, 3000);
                        switch (playerClass.name) {
                            case "Wizard":
                                lucky = true;
                                setTimeout(function () {
                                    document.getElementById("battle-info-status").innerHTML = playerClass.name
                                        + " next attack has " + playerClass.specialTwoValue.toString() + "% to hit now!";
                                }, 5500);
                                break;
                            case "Knight":
                                rally = true;
                                setTimeout(function () {
                                    document.getElementById("battle-info-status").innerHTML = currentMonster.name
                                        + " will now attack themselves!";
                                }, 5500);
                                break;
                            case "Rogue":
                                bleed = true;
                                setTimeout(function () {
                                    document.getElementById("battle-info-status").innerHTML = currentMonster.name
                                        + " will now bleed for " + playerClass.specialTwoValue + " damage for two turns!";
                                }, 5500);
                                break;
                        }
                    }else {
                        setTimeout(function () {
                        document.getElementById("battle-info-status").innerHTML = playerClass.specialTwoName
                            + " misses  ";
                    }, 3000);
                }
                break;
        }
    }

    function monsterTurn(){
        document.getElementById("battle-info-main").innerHTML = currentMonster.name + "'s Turn";
        if(dodge === true)
        {
            document.getElementById("battle-info-status").innerHTML = currentMonster.normalAttackChance + " can't hit " +
                "the rogue this turn!";
            dodge = false;
            resetRound();
        }else {
            if (rally === true) {
                switch (currentMonster.currentAttack) {
                    case "Normal Attack":
                        rally = false;
                        if (checkHit(currentMonster.normalAttackChance) === true) {
                            clearTimeout();
                            damage = parseInt(damageAmount(currentMonster.normalAttackDamageMin,currentMonster.normalAttackDamageMax));
                            currentMonster.currentHealth -= damage;
                            setTimeout(function(){
                                document.getElementById("battle-info-status").innerHTML = currentMonster.name +
                                    " hits themselves!";
                            },0);
                            setTimeout(function(){
                                document.getElementById("battle-info-status").innerHTML = currentMonster.name +
                                    " deals " + damage + " damage!";
                            },2500);
                        }else {
                            document.getElementById("battle-info-status").innerHTML = currentMonster.name +
                                " didn't attack! Rally was ineffective.";
                        }

                        setTimeout(function() {
                            if(checkMonsterDeath() === false)
                                resetRound();
                            else
                                levelUp();
                        },3200);
                        break;
                    case "Heavy Attack":
                        rally = false;
                        if (checkHit(currentMonster.normalAttackChance) === true) {
                            clearTimeout();
                            damage = parseInt(damageAmount(currentMonster.heavyAttackDamageMin,currentMonster.heavyAttackDamageMax));
                            currentMonster.currentHealth -= damage;
                            setTimeout(function(){
                                document.getElementById("battle-info-status").innerHTML = currentMonster.name +
                                    " hits themselves!";
                            },0);
                            setTimeout(function(){
                                document.getElementById("battle-info-status").innerHTML = currentMonster.name +
                                    " deals " + damage + " damage!";
                            },2500);
                        }else {
                            document.getElementById("battle-info-status").innerHTML = currentMonster.name +
                                " didn't attack! Rally was ineffective.";
                        }
                        setTimeout(function() {
                            if(checkMonsterDeath() === false)
                                resetRound();
                            else
                                levelUp();
                        },3200);
                        break;
                }
            }else {
                switch (currentMonster.currentAttack) {
                    case "Normal Attack":
                        if (checkHit(currentMonster.normalAttackChance) === true) {
                            clearTimeout();
                            damage = parseInt(damageAmount(currentMonster.normalAttackDamageMin,currentMonster.normalAttackDamageMax));
                            playerClass.currentHealth -= damage;
                            setTimeout(function(){
                                document.getElementById("battle-info-status").innerHTML = currentMonster.name +
                                    " attack hits you.";
                            },0);
                            setTimeout(function(){
                                document.getElementById("battle-info-status").innerHTML = currentMonster.name +
                                    " deals " + damage + " to you.";
                                document.getElementById("battle-image-player-health").innerHTML = playerClass.currentHealth;
                            },2500);
                        }else {
                            document.getElementById("battle-info-status").innerHTML = currentMonster.name +
                                " misses their attack!";
                        }
                        setTimeout(function() {
                            if(checkPlayerDeath() === false)
                                resetRound();
                            else
                                gameOver();
                        },3500);
                        break;
                    case "Heavy Attack":
                        if (checkHit(currentMonster.heavyAttackChance) === true) {
                            clearTimeout();
                            damage = parseInt(damageAmount(currentMonster.heavyAttackDamageMin,currentMonster.heavyAttackDamageMax));
                            playerClass.currentHealth -= damage;
                            setTimeout(function(){
                                document.getElementById("battle-info-status").innerHTML = currentMonster.name +
                                    " heavy attack hits you.";
                            },0);
                            setTimeout(function(){
                                document.getElementById("battle-info-status").innerHTML = currentMonster.name +
                                    " deals " + damage + " damage to you.";
                                document.getElementById("battle-image-player-health").innerHTML = playerClass.currentHealth;
                            },2500);
                        }else {
                            document.getElementById("battle-info-status").innerHTML = currentMonster.name +
                                " missed their heavy attack!";
                        }
                        setTimeout(function() {
                            if(checkPlayerDeath() === false)
                                resetRound();
                            else
                                gameOver();
                        },3200);
                        break;
                }
            }
        }
    }

    function setBattle(num){
        document.getElementById("map-info").innerHTML = "Battle " + num;
        switch(num){
            case 1:
                document.getElementById("map-info-details").innerHTML = "First Steps";
                $("#map-info").show();
                $("#map-info-details").show();
                $("#map-battleGo").show();
                $("#map-battle1").hide();
                $("#map-battle2").hide();
                $("#map").show();
                break;
            case 2:
                document.getElementById("map-info-details").innerHTML = "Your First Choice";
                $("#map-info").show();
                $("#map-info-details").show();
                $("#map-battleGo").show();
                $("#map-battle1").show();
                $("#map-battle2").show();
                $("#map").show();
                break;

        }

    }

    function fillAbilities(){
        document.getElementById("battle-class-basicAttack-name").innerHTML = playerClass.basicAttackName;
        document.getElementById("battle-class-basicAttack-info").innerHTML = playerClass.basicAttackInfo;
        document.getElementById("battle-class-basicAttack-chance").innerHTML = playerClass.basicAttackChance.toString();
        document.getElementById("battle-class-basicAttack-values").innerHTML = playerClass.basicAttackDamageMin.toString()
        + " - " + playerClass.basicAttackDamageMax.toString() + " damage";

        document.getElementById("battle-class-specialAttack-name").innerHTML = playerClass.specialAttackName;
        document.getElementById("battle-class-specialAttack-info").innerHTML = playerClass.specialAttackInfo;
        document.getElementById("battle-class-specialAttack-chance").innerHTML = playerClass.specialAttackChance.toString();
        document.getElementById("battle-class-specialAttack-values").innerHTML = playerClass.specialAttackDamageMin.toString()
        + " - " + playerClass.specialAttackDamageMax.toString() + " damage";

        if(playerClass.name === "Wizard") {
            document.getElementById("battle-class-special-name").innerHTML = playerClass.specialOneName;
            document.getElementById("battle-class-special-info").innerHTML = playerClass.specialOneInfo;
            document.getElementById("battle-class-special-chance").innerHTML = playerClass.specialOneChance.toString();
            document.getElementById("battle-class-special-values").innerHTML = playerClass.specialOneDamageMin.toString() +
            " - " + playerClass.specialOneDamageMax.toString() + " Damage";

            document.getElementById("battle-class-special2-name").innerHTML = playerClass.specialTwoName;
            document.getElementById("battle-class-special2-info").innerHTML = playerClass.specialTwoInfo;
            document.getElementById("battle-class-special2-chance").innerHTML = playerClass.specialTwoChance.toString();
            document.getElementById("battle-class-special2-values").innerHTML = " + " + playerClass.specialTwoValue.toString()
            + " chance";
        }

        if(playerClass.name === "Knight") {
            document.getElementById("battle-class-special-name").innerHTML = playerClass.specialOneName;
            document.getElementById("battle-class-special-info").innerHTML = playerClass.specialOneInfo;
            document.getElementById("battle-class-special-chance").innerHTML = playerClass.specialOneChance.toString();
            document.getElementById("battle-class-special-values").innerHTML = playerClass.specialOneValueMin.toString() +
                " - " + playerClass.specialOneValueMax.toString() + " Heal Amount";

            document.getElementById("battle-class-special2-name").innerHTML = playerClass.specialTwoName;
            document.getElementById("battle-class-special2-info").innerHTML = playerClass.specialTwoInfo;
            document.getElementById("battle-class-special2-chance").innerHTML = playerClass.specialTwoChance.toString();

        }

        if(playerClass.name === "Rogue") {
            document.getElementById("battle-class-special-name").innerHTML = playerClass.specialOneName;
            document.getElementById("battle-class-special-info").innerHTML = playerClass.specialOneInfo;
            document.getElementById("battle-class-special-chance").innerHTML = playerClass.specialOneChance.toString();

            document.getElementById("battle-class-special2-name").innerHTML = playerClass.specialTwoName;
            document.getElementById("battle-class-special2-info").innerHTML = playerClass.specialTwoName;
            document.getElementById("battle-class-special2-chance").innerHTML = playerClass.specialTwoChance.toString();
            document.getElementById("battle-class-special2-values").innerHTML = playerClass.specialTwoValue.toString()
            + " damage per round";
        }

    }

    function setRPG(classPicked){
        setClass(classPicked);
        $("#pickClass").hide();
        setBattle(battleNum);
    }

    function getMonster(num) {
        switch(num){
            case 1:
                currentMonster = Object.assign({},ghost);
                $("#battle-image-enemy-img").attr("src","images/Monsters/ghost.png");
                return "Ghost";
            case 2:
                currentMonster = Object.assign({},wolf);
                $("#battle-image-enemy-img").attr("src","images/Monsters/wolf.png");
                return "Wolf";
            case 3:
                currentMonster = Object.assign({},zombie);
                $("#battle-image-enemy-img").attr("src","images/Monsters/zombie.png");
                return "Zombie";
            case 4:
                currentMonster = Object.assign({},cyclops);
                $("#battle-image-enemy-img").attr("src","images/Monsters/cyclops.png");
                return "Cyclops";
            case 5:
                currentMonster = Object.assign({},troll);
                $("#battle-image-enemy-img").attr("src","images/Monsters/troll.png");
                return "Troll";
            case 6:
                currentMonster = Object.assign({},dragon);
                $("#battle-image-enemy-img").attr("src","images/Monsters/dragon.png");
                return "Dragon";
        }
    }

    function startRound(num){
        $("#levelUp").hide();
        playerClass.currentHealth = playerClass.maxHealth;
        monster = getMonster(num);
        document.getElementById("battle-info-main").innerHTML = "Your Turn";

        document.getElementById("battle-image-player-health").innerHTML = playerClass.maxHealth.toString();
        document.getElementById("battle-image-enemy-health").innerHTML = currentMonster.maxHealth.toString();

        currentMonster.pickAttack();
        document.getElementById("battle-info-status").innerHTML = currentMonster.name + "'s next attack will be a "
            + currentMonster.currentAttack;

        $("#option-basicAttack").show();
        $("#option-specialAttack").show();
        $("#option-SpecialOne").show();
        $("#option-SpecialTwo").show();
        $("#battle-class-fight").show();
    }

    function setClass(setClass){
        if(setClass === "wizard"){
            playerClass = Object.assign({},wizard);
            $("#battle-image-player-img").attr("src","images/wizard.png");
            fillAbilities();
        }

        if(setClass === "rogue"){
            playerClass = Object.assign({},rogue);
            $("#battle-image-player-img").attr("src","images/rogue.png");
            fillAbilities();
        }

        if(setClass === "knight"){
            playerClass = Object.assign({},knight);
            $("#battle-image-player-img").attr("src","images/knight.png");
            fillAbilities();
        }


    }

    function levelUp(){
        if(battleNum >= 6) {
            winner();
        } else {
            $("#battle").hide();
            switch (playerClass.name) {
                case "Wizard":
                    document.getElementById("levelUp-option1").innerHTML = "+20 Health";
                    document.getElementById("levelUp-option2").innerHTML = "+10 damage on Lighting Bolt";
                    document.getElementById("levelUp-option3").innerHTML = "+10 extra Chance on Lucky";
                    break;
                case "Knight":
                    document.getElementById("levelUp-option1").innerHTML = "+30 Health";
                    document.getElementById("levelUp-option2").innerHTML = "+10 health gain on Healing Potion";
                    document.getElementById("levelUp-option3").innerHTML = "+10 chance on Rally";
                    break;
                case "Rogue":
                    document.getElementById("levelUp-option1").innerHTML = "+10 Health";
                    document.getElementById("levelUp-option2").innerHTML = "+10 chance on dodge";
                    document.getElementById("levelUp-option3").innerHTML = "+10 damage on piercing cut";
                    break;
            }
            battleNum += 1;
            $("#levelUp").show();
        }

    }

    function resetRound(){
        if(bleed === true && bleedTurn !== 0)
        {
            clearTimeout();
            setTimeout(function() {
                document.getElementById("battle-info-status").innerHTML = currentMonster.name + " is bleeding! " +
                    currentMonster.name + " took " + playerClass.specialTwoValue + " damage!";
                bleedTurn -= 1;
            },0);
            if(currentMonster.currentHealth <= 0){
                setTimeout(function(){
                    levelUp();
                },3000);
            } else {
                setTimeout(function() {
                document.getElementById("battle-info-main").innerHTML = "Your Turn";
                $("#option-basicAttack").show();
                $("#option-specialAttack").show();
                $("#option-SpecialOne").show();
                $("#option-SpecialTwo").show();
                $("#battle-class-fight").show();

                currentMonster.pickAttack();
                document.getElementById("battle-info-status").innerHTML = currentMonster.name + "'s next attack will be a "
                    + currentMonster.currentAttack;

            },3000);}
        }else{
            bleedTurn = 2;
            document.getElementById("battle-info-main").innerHTML = "Your Turn";
            $("#option-basicAttack").show();
            $("#option-specialAttack").show();
            $("#option-SpecialOne").show();
            $("#option-SpecialTwo").show();
            $("#battle-class-fight").show();

            currentMonster.pickAttack();
            document.getElementById("battle-info-status").innerHTML = currentMonster.name + "'s next attack will be a "
                + currentMonster.currentAttack;
        }
    }

    function checkPlayerDeath(){
        if(playerClass.currentHealth <= 0)
            return true;
        else
            return false;
    }

    function gameOver(){
        $("#battle").hide();
        $("#levelUp").hide();
        $("#gameOver").show();
    }

    function winner(){
        $("#battle").hide();
        $("#levelUp").hide();
        $("#winner").show();
    }

    //jquery clicks to run the functions

    $("#class-picked").click(function() {
        if ($("input[type=radio]:checked").length > 0) {
            if ($("#class-wizard").is(":checked") === true) {
                setRPG("wizard");
            } else if($("#class-knight").is(":checked") === true){
                setRPG("knight");
            }
            else if($("#class-rogue").is(":checked") === true){
                setRPG("rogue");
            }
        }else {
            alert("Please select a class to move on!");
        }
    });

    $("#map-battleGo").click(function () {
        if(battleNum === 1){
            $("#battle-image-enemy-img").attr("src","images/Monsters/ghost.png");
            $("#map").hide();
            startRound(battleNum);
            $("#battle").show();
        }
    });

    $("#battle-class-fight").click(function () {
        if ($("input:radio[name='choice']").is(":checked") === true) {
            if ($("#battle-class-basicAttack").is(":checked") === true) {
                playerRound("BasicAttack");
            } else if($("#battle-class-specialAttack").is(":checked") === true){
                playerRound("SpecialAttack");
            }
            else if($("#battle-class-specialOne").is(":checked") === true){
                playerRound("SpecialOne");
            }
            else if($("#battle-class-specialTwo").is(":checked") === true){
                playerRound("SpecialTwo");
            }
        }else {
            alert("Please select a move to fight!");
        }

    })

    $("#levelUp-submit").click(function (){
        if($("input:radio[name='class-levelUp']").is(":checked") === true) {
            if($("#levelUp1").is(":checked") === true) {
                switch(playerClass.name){
                    case "Wizard":
                        playerClass.maxHealth +=  20;
                        playerClass.basicAttackDamageMin += 6;
                        playerClass.basicAttackDamageMax += 6;
                        playerClass.currentHealth = playerClass.maxHealth;
                        startRound(battleNum);
                        break;
                    case "Knight":
                        playerClass.maxHealth +=  30;
                        playerClass.basicAttackDamageMin += 2;
                        playerClass.basicAttackDamageMax += 2;
                        break;
                    case "Rogue":
                        playerClass.maxHealth +=  10;
                        playerClass.basicAttackDamageMin += 4;
                        playerClass.basicAttackDamageMax += 4;
                        break;
                }
            } else if ($("#levelUp2").is(":checked") === true) {
                switch(playerClass.name){
                    case "Wizard":
                        playerClass.specialOneDamageMin +=  10;
                        playerClass.basicAttackDamageMin += 4;
                        playerClass.basicAttackDamageMax += 4;
                        break;
                    case "Knight":
                        playerClass.specialOneValueMin +=  10;
                        playerClass.basicAttackDamageMin += 2;
                        playerClass.basicAttackDamageMax += 2;
                        break;
                    case "Rogue":
                        playerClass.specialOneChance +=  10;
                        playerClass.basicAttackDamageMin += 6;
                        playerClass.basicAttackDamageMax += 6;
                        break;
                }

            } else if ($("#levelUp3").is(":checked") === true){
                switch(playerClass.name){
                    case "Wizard":
                        playerClass.specialTwoValue +=  10;
                        playerClass.basicAttackDamageMin += 4;
                        playerClass.basicAttackDamageMax += 4;
                        break;
                    case "Knight":
                        playerClass.specialTwoChance +=  10;
                        playerClass.basicAttackDamageMin += 2;
                        playerClass.basicAttackDamageMax += 2;
                        break;
                    case "Rogue":
                        playerClass.specialTwoValue +=  10;
                        playerClass.basicAttackDamageMin += 6;
                        playerClass.basicAttackDamageMax += 6;
                        break;
                }
            }
            fillAbilities();
            startRound(battleNum);
            $("#battle").show();
        }else{
            alert("Get your free upgrade! Pls you will need it!");
        }
    });

});