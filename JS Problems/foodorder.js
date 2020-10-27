//fetching from DOM
var nameInput=document.getElementById('name');
var selectionInput=document.getElementById('dropdown-menu').value;
var paidInput=document.getElementById('paid-ammount');
var index,pendingTable=document.getElementById('pending-order');
var orderedTable=document.getElementById('completed-order');
var dispatchButton=document.getElementById('dispatch-button');
var addToOderButton=document.getElementById('add-to-ordered');
var deleteRow=document.getElementById('delete-button');

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
    console.log(typeof(change));

   
    
    var htmlContent=`<tr><td>${nameInput.value}</td><td>${selectionInput}</td><td>${paidInput.value}</td><td>${change}</td><td><button id="delete-button">Delete</button></td></tr>`;

    //adding values to table pending
    pendingTable.insertAdjacentHTML('beforeend',htmlContent);
    
}
 //the delete button function
 function deleteFromList(){
    
    for(let i=0;i<pendingTable.rows.length;i++){
        var index=this.parentElement.rowIndex;
        pendingTable.deleteRow(index);    
        console.log(index);
    
    }
    
}
function addOrderTable(){
    
}


//Event Handlers
dispatchButton.addEventListener('click',addPendingTable);
deleteRow.addEventListener('click',deleteFromList);
//addToOderButton.addEventListener('click',addOrderTable);