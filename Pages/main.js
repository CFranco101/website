
    document.getElementById("d20button").addEventListener("click", function () {
        var diceAmount = document.getElementById('d20amount').value;
        var endTotal = document.getElementById('d20total');
        var allDiceRolls = document.getElementById('d20dice');
        var arrayDiceRolls = [];
        var total = 0;
        var counter = 0;

        while(counter < diceAmount)
            {
                var randomNum = parseInt(((Math.random() * (21 - 1) +1)));
                total = total + randomNum;
                arrayDiceRolls[counter] = randomNum;

                counter = ++counter;
            }
        var modifer = document.getElementById('d20modifer').value;
        modifer = parseInt(modifer);
        total = modifer + total;

        allDiceRolls.innerHTML = arrayDiceRolls;
        endTotal.innerHTML = total;
    });

    document.getElementById("d6button").addEventListener("click", function () {
        var diceAmount = document.getElementById('d6amount').value;
        var endTotal = document.getElementById('d6total');
        var allDiceRolls = document.getElementById('d6dice');
        var arrayDiceRolls = [];
        var total = 0;
        var counter = 0;

        while(counter < diceAmount)
            {
                var randomNum = parseInt(((Math.random() * (7 - 1) +1)));
                total = total + randomNum;
                arrayDiceRolls[counter] = randomNum;

                counter = ++counter;
            }
        var modifer = document.getElementById('d6modifer').value;
        modifer = parseInt(modifer);
        total = modifer + total;

        allDiceRolls.innerHTML = arrayDiceRolls;
        endTotal.innerHTML = total;
    });

    document.getElementById("d4button").addEventListener("click", function () {
        var diceAmount = document.getElementById('d4amount').value;
        var endTotal = document.getElementById('d4total');
        var allDiceRolls = document.getElementById('d4dice');
        var arrayDiceRolls = [];
        var total = 0;
        var counter = 0;

        while(counter < diceAmount)
            {
                var randomNum = parseInt(((Math.random() * (5 - 1) +1)));
                total = total + randomNum;
                arrayDiceRolls[counter] = randomNum;

                counter = ++counter;
            }
        var modifer = document.getElementById('d4modifer').value;
        modifer = parseInt(modifer);
        total = modifer + total;

        allDiceRolls.innerHTML = arrayDiceRolls;
        endTotal.innerHTML = total;
    });

    document.getElementById("d8button").addEventListener("click", function () {
        var diceAmount = document.getElementById('d8amount').value;
        var endTotal = document.getElementById('d8total');
        var allDiceRolls = document.getElementById('d8dice');
        var arrayDiceRolls = [];
        var total = 0;
        var counter = 0;

        while(counter < diceAmount)
            {
                var randomNum = parseInt(((Math.random() * (9 - 1) +1)));
                total = total + randomNum;
                arrayDiceRolls[counter] = randomNum;

                counter = ++counter;
            }
        var modifer = document.getElementById('d8modifer').value;
        modifer = parseInt(modifer);
        total = modifer + total;

        allDiceRolls.innerHTML = arrayDiceRolls;
        endTotal.innerHTML = total;
    });

    document.getElementById("d10button").addEventListener("click", function () {
        var diceAmount = document.getElementById('d10amount').value;
        var endTotal = document.getElementById('d10total');
        var allDiceRolls = document.getElementById('d10dice');
        var arrayDiceRolls = [];
        var total = 0;
        var counter = 0;

        while(counter < diceAmount)
            {
                var randomNum = parseInt(((Math.random() * (11 - 1) +1)));
                total = total + randomNum;
                arrayDiceRolls[counter] = randomNum;

                counter = ++counter;
            }
        var modifer = document.getElementById('d10modifer').value;
        modifer = parseInt(modifer);
        total = modifer + total;

        allDiceRolls.innerHTML = arrayDiceRolls;
        endTotal.innerHTML = total;
    });

    document.getElementById("d100button").addEventListener("click", function () {
        var diceAmount = document.getElementById('d100amount').value;
        var endTotal = document.getElementById('d100total');
        var allDiceRolls = document.getElementById('d100dice');
        var arrayDiceRolls = [];
        var total = 0;
        var counter = 0;

        while(counter < diceAmount)
            {
                var randomNum = parseInt(((Math.random() * (101 - 1) +1)));
                total = total + randomNum;
                arrayDiceRolls[counter] = randomNum;

                counter = ++counter;
            }
        var modifer = document.getElementById('d100modifer').value;
        modifer = parseInt(modifer);
        total = modifer + total;

        allDiceRolls.innerHTML = arrayDiceRolls;
        endTotal.innerHTML = total;
    });

    document.getElementById("d12button").addEventListener("click", function () {
        var diceAmount = document.getElementById('d12amount').value;
        var endTotal = document.getElementById('d12total');
        var allDiceRolls = document.getElementById('d12dice');
        var arrayDiceRolls = [];
        var counter = 0;
        var total = 0;

        while(counter < diceAmount)
            {
                var randomNum = parseInt(((Math.random() * (13 - 1) + 1)));
                total = total + randomNum;
                arrayDiceRolls[counter] = randomNum;

                counter = ++counter;
            }
        var modifer = document.getElementById('d12modifer').value;
        modifer = parseInt(modifer);
        total = modifer + total;

        allDiceRolls.innerHTML = arrayDiceRolls;
        endTotal.innerHTML = total;
    });




