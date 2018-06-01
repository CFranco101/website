function addNew() {
    if(checkValues("tracker-name","tracker-ac","tracker-int") == 1)
        {
            if(firstRow() == 1)//checks if first row has somthing in it.
               {
                    var total = document.getElementById("tracker-table").rows.length;
                    var newInt = document.getElementById("tracker-int").value;
                    var counter = 1;
                    while(counter <= total) 
                        {
                          if(parseInt(newInt) >= parseInt(testInt(counter))) 
                             {
                                moveRows(counter,total);
                                insertRow(counter);
                                break;
                             }
                             else
                             {
                                counter = ++counter;
                                if(counter == total) 
                                   {
                                        insertRow(counter);
                                        break;
                                   }
                             }
                        }
               }
               else 
               { 
                writeRow(1);
                clear();
               }
        }
    else 
        {
            alert("Please, enter valid values!");
        }
}

function checkValues(name,armorClass,inti) {
    var cName = document.getElementById(name).value;
    var aC = document.getElementById(armorClass).value;
    var int = document.getElementById(inti).value;
    if((cName.length > 0 && cName.length < 40) && (aC > 0 && aC <= 30) && (int > 0 && int <= 40))
        {
            return 1;
        }
    else
        {
            return 0;
        }
}

function firstRow() {
    var firstValue = document.getElementById("tracker-table").rows[1].cells[2].innerHTML;
    if(parseInt(firstValue) > 0 && parseInt(firstValue) <=40)
        {
            return 1;
        }
    else
        {
            return 0;
        }
}

function writeRow(row) {
    var cName = document.getElementById("tracker-name").value;
    var aC = document.getElementById("tracker-ac").value;
    var int = document.getElementById("tracker-int").value;
    var rowOne = document.getElementById('tracker-table').rows[row];
    rowOne.cells[0].innerHTML = row;
    rowOne.cells[1].innerHTML = cName;
    rowOne.cells[2].innerHTML = int;
    rowOne.cells[3].innerHTML = aC;
}

function testInt(row) {
    return document.getElementById('tracker-table').rows[row].cells[2].innerHTML;
}

function insertRow(row) {
    var cName = document.getElementById("tracker-name").value;
    var aC = document.getElementById("tracker-ac").value;
    var int = document.getElementById("tracker-int").value;
    var rowOne = document.getElementById('tracker-table').insertRow[row];
    rowOne.insertCell(0).innerHTML = row + ".";
    document.getElementById('tracker-table').rows[row].insertCell(1).innerHTML = cName;
    document.getElementById('tracker-table').rows[row].insertCell(2).innerHTML = int;
    document.getElementById('tracker-table').rows[row].insertCell(3).innerHTML = aC;
}

function moveRows(startPoint,list) {
    var table = document.getElementById("tracker-table");
    while(startPoint <= list)
        {
            var lastCell1 = table.rows[parseInt(list-1)].cells[1].innerHTML;
            var lastCell2 = table.rows[parseInt(list-1)].cells[2].innerHTML;
            var lastCell3 = table.rows[parseInt(list-1)].cells[3].innerHTML;
            
            table.insertRow(list).insertCell(0).innerHTML = list + ".";
            table.insertRow(list).insertCell(1).innerHTML = lastCell1;
            table.insertRow(list).insertCell(2).innerHTML = lastCell2;
            table.insertRow(list).insertCell(3).innerHTML = lastCell3;
            
            list = list - 1;   
        }  
}

function clear() {
    document.getElementById("tracker-name").value = "";
    document.getElementById("tracker-ac").value = 0;
    document.getElementById("tracker-int").value = 0;
    
    
}
    