document.getElementById("d20button").addEventListener("click", function () {
    var diceAmount = document.getElementById('d20amount').value;
    var endTotal = document.getElementById('d20total');
    
    var total = 0;
    var counter = 0;
    
    while(counter < diceAmount)
        {
            total = total +((Math.random() * (21 - 1) + 1))
            
            total = parseInt(total);

            
            counter = ++counter;
        }

    
    endTotal.innerHTML = total;
});

document.getElementById("d6button").addEventListener("click", function () {
    var diceAmount = document.getElementById('d6amount').value;
    var endTotal = document.getElementById('d6total');
    
    var total = 0;
    var counter = 0;
    
    while(counter < diceAmount)
        {
            total = total +((Math.random() * (7 - 1) + 1))
            
            total = parseInt(total);

            
            counter = ++counter;
        }

    
    endTotal.innerHTML = total;
});

document.getElementById("d4button").addEventListener("click", function () {
    var diceAmount = document.getElementById('d4amount').value;
    var endTotal = document.getElementById('d4total');
    
    var total = 0;
    var counter = 0;
    
    while(counter < diceAmount)
        {
            total = total +((Math.random() * (5 - 1) + 1))
            
            total = parseInt(total);

            
            counter = ++counter;
        }

    
    endTotal.innerHTML = total;
});

document.getElementById("d8button").addEventListener("click", function () {
    var diceAmount = document.getElementById('d8amount').value;
    var endTotal = document.getElementById('d8total');
    
    var total = 0;
    var counter = 0;
    
    while(counter < diceAmount)
        {
            total = total +((Math.random() * (9 - 1) + 1))
            
            total = parseInt(total);

            
            counter = ++counter;
        }

    
    endTotal.innerHTML = total;
});

document.getElementById("d10button").addEventListener("click", function () {
    var diceAmount = document.getElementById('d10amount').value;
    var endTotal = document.getElementById('d10total');
    
    var total = 0;
    var counter = 0;
    
    while(counter < diceAmount)
        {
            total = total +((Math.random() * (11 - 1) + 1))
            
            total = parseInt(total);

            
            counter = ++counter;
        }

    
    endTotal.innerHTML = total;
});

document.getElementById("d100button").addEventListener("click", function () {
    var diceAmount = document.getElementById('d100amount').value;
    var endTotal = document.getElementById('d100total');
    
    var total = 0;
    var counter = 0;
    
    while(counter < diceAmount)
        {
            total = total +((Math.random() * (101 - 1) + 1))
            
            total = parseInt(total);

            
            counter = ++counter;
        }

    
    endTotal.innerHTML = total;
});

document.getElementById("d12button").addEventListener("click", function () {
    var diceAmount = document.getElementById('d12amount').value;
    var endTotal = document.getElementById('d12total');
    
    var total = 0;
    var counter = 0;
    
    while(counter < diceAmount)
        {
            total = total +((Math.random() * (13 - 1) + 1))
            
            total = parseInt(total);

            
            counter = ++counter;
        }

    
    endTotal.innerHTML = total;
});