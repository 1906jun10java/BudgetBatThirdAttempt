window.onload = function() {
    document.getElementById('viewBudgetActual').addEventListener('click', getBudgetActuals);
}
function getBudgetActuals() {
    fetch("http://localhost:8080/myBudgetBat/user/allUsers").then(function(response){
        let baList = response.json();
        return baList;
}).then(function(baList){
    console.log(baList);
    baTableGen(baList);
    })
}
function baTableGen(baList){
    let table = document.createElement("TABLE");
    table.border = "1";
    
    let row = table.insertRow(-1);
    let headerCell = document.createElement("TH");
    
    headerCell = row.insertCell(-1);
    headerCell.innerHTML = "BudgetID";
    
    headerCell = row.insertCell(-1);
    headerCell.innerHTML = "UserID";
    
    headerCell = row.insertCell(-1);
    headerCell.innerHTML = "Credit Card Interest";
    
    headerCell = row.insertCell(-1);
    headerCell.innerHTML = "Transportation";
    
    headerCell = row.insertCell(-1);
    headerCell.innerHTML = "Housing";
    
    headerCell = row.insertCell(-1);
    headerCell.innerHTML = "Grocery";
    
    headerCell = row.insertCell(-1);
    headerCell.innerHTML = "Entertainment";
    
    headerCell = row.insertCell(-1);
    headerCell.innerHTML = "Luxury";
    
    headerCell = row.insertCell(-1);
    headerCell.innerHTML = "Other";
    
    for (let i = 0; i < Data.length; i++){
        row = table.insertRow(-1);
        
        let cell = row.insertCell(-1);
        cell.innetHTML = data[i].budgetAId;
        
        cell = row.insertCell(-1);
        cell.innerHTML = data[i].userId;
        
        cell = row.insertCell(-1);
        cell.innerHTML = data[i].ccInterest;
        
        cell = row.insertCell(-1);
        cell.innerHTML = data[i].transportation;
        
        cell = row.insertCell(-1);
        cell.innerHTML = data[i].housing;
        
        cell = row.insertCell(-1);
        cell.innerHTML = data[i].grocery;
        
        cell = row.insertCell(-1);
        cell.innerHTML = data[i].entertainment;
        
        cell = row.insertCell(-1);
        cell.innerHTML = data[i].luxury;
        
        cell = row.insertCell(-1);
        cell.innerHTML = data[i].others;
    }
    let newTable = document.getElementById("BudgetActualList");
    newTable.innerHTML = "";
    newTable.appendChild(table);
}