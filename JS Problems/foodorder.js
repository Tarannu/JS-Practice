//fetching from DOM
var nameInput=document.getElementById('name');
var selectionInput=document.getElementById('dropdown-menu').value;
var paidInput=document.getElementById('paid-ammount');
var pendingTable=document.getElementById('pending-order');
var orderedTable=document.getElementById('completed-order');
var dispatchButton=document.getElementById('dispatch-button');
var addToOderButton=document.getElementById('add-to-ordered');


//functions

function addPendingTable(){
    console.log("Pending table started");
    
    //adding change function inside closure
    function changeCalculation(){
        //var price=[10,10,5,15];
        var selectPrice=0;
        
        if(selectionInput=='Burger'){
            selectPrice=10;
        }
        else if(selectionInput=='Sandwich'){
            selectPrice=10;
        }
        else if(selectionInput=='Tuna Sandwich'){
            selectPrice=5;
        }
        else if(selectionInput=='Salad'){
            selectPrice=15;
        }
    
        
        var change=paidInput.value-selectPrice;
        return change;
    }
    let change=changeCalculation();
    
    //creating elements for pennding table
    //var deleteButton=`<td><button id="delete-button"> Complete </button></td>`;
    // var newPendingTableRow=pendingTable.insertRow(pendingTable.length);
    // cell1=newPendingTableRow.insertCell(0);
    // cell2=newPendingTableRow.insertCell(1);
    // cell3=newPendingTableRow.insertCell(2);
    // cell4=newPendingTableRow.insertCell(3);
    // cell5=newPendingTableRow.insertCell(4);
    // //adding elements in the cells of the table
    // cell1.innerHTML=nameInput.value;
    // cell2.innerHTML=selectionInput;
    // cell3.innerHTML=paidInput.value;
    // cell4.innerHTML=change;
    // cell5.innerHTML=deleteButton;
    
    var htmlContent=`<tr><td>${nameInput.value}</td><td>${selectionInput}</td><td>${paidInput.value}</td><td>${change}</td><td><button class="delete-button">Delete</button></td></tr>`;    //adding values to table pending
    pendingTable.insertAdjacentHTML('beforeend',htmlContent); 
    nameInput.value='';
    paidInput.value='';
       
}

var deleteButton=document.getElementById('pending-order');
function deleteRow(e){
if(e.target.className==='delete-button'){
    var row=e.target.parentElement.parentElement;
    e.target.parentElement.parentElement.remove(row);
}
addOrderTable(e);
}
 
function addOrderTable(e){
    // if(e.target.className==='delete-button'){
    //     var row=e.target.parentElement.parentElement;
    //     orderedTable.insertRow(row);
    // }
    var newRow=orderedTable.insertRow(orderedTable.length);
    cell1=newRow.insertCell(0);
    cell2=newRow.insertCell(1);
    cell3=newRow.insertCell(2);
    //add value to the cells
    if(e.target.className==='delete-button'){
        for(let i=0;i<=newRow.length;i++){
        newRow.innerCell(i).innerHTML=e.target.parentElement.parentElement;
        }
    }   


}


//Event Handlers
dispatchButton.addEventListener('click',addPendingTable);
deleteButton.addEventListener('click',deleteRow);
//addToOderButton.addEventListener('click',addOrderTable);