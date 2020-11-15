//fetching from DOM
var nameInput=document.getElementById('name');
var selectionInput=document.getElementById('dropdown-menu').value;
var paidInput=document.getElementById('paid-ammount');
var pendingTable=document.getElementById('pending-order');
var orderedTable=document.getElementById('Completed-order');
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
    var htmlContent=`<tr><td>${nameInput.value}</td><td>${selectionInput}</td><td>${paidInput.value}</td><td>${change}</td><td><button class="delete-button">Delete</button></td></tr>`;    //adding values to table pending
    pendingTable.insertAdjacentHTML('beforeend',htmlContent); 
    nameInput.value='';
    paidInput.value='';
       
}

var deleteButton=document.getElementById('pending-order');
function deleteRow(e){
if(e.target.className==='delete-button'){
    var row=e.target.parentElement.parentElement;
    console.log(row);
    e.target.parentElement.parentElement.remove(row);
    
};
addOrderTable(row);
}
 
function addOrderTable(row){
    orderedTable.insertAdjacentElement('beforeend',row);
   
}


//Event Handlers
dispatchButton.addEventListener('click',addPendingTable);
deleteButton.addEventListener('click',deleteRow);
//addToOderButton.addEventListener('click',addOrderTable);