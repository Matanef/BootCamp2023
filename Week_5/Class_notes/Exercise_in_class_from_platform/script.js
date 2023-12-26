//Exercise 1 from platform during class

let table = document.querySelector("table");
console.log(table);
let tr = document.querySelector("tr");
console.log(tr);

function insertRow(){
    let table = document.querySelector("table");
    console.log(table);
    const trNew = document.createElement("tr");
    table.appendChild(trNew);
    const newTd = document.createElement("td");
    const newTd2 = document.createElement("td");

    trNew.appendChild(newTd);
    trNew.appendChild(newTd2);

    let newTdData = document.createTextNode("New1 Row1")
    let newTd2Data = document.createTextNode("New2 Row2")
    
    newTd.appendChild(newTdData)
    newTd2.appendChild(newTd2Data)
        
}

document.getElementById('button').onclick = insertRow()