
// document variables
var studentNameInput=document.getElementById('name-input');
var studentAgeInput=document.getElementById('age-input');
var studentPhoneInput=document.getElementById('phone-input');
var studentAddressInput=document.getElementById('address-input');
var addButton=document.getElementById('add-to-form');
var tableInput=document.getElementById('student-table');

//functions
function addTable(){
    console.log("Adding to table");

    //making sure table is not empty
    if(!studentNameInput.value||!studentAgeInput.value||!studentPhoneInput.value||!studentPhoneInput.value){
        studentAddressInput.value='';
        studentNameInput.value='';
        studentAgeInput.value='';
        studentPhoneInput.value='';
        return alert("No Field can be empty");
        
    }

    //creating table values
    var htmlContent=`<tr><td>${studentNameInput.value}</td> <td>${studentAgeInput.value}</td> <td>${studentPhoneInput.value}</td><td>${studentAddressInput.value}</td><td><button class="delete-button">Delete</button></td></tr>`
    
    //Adding values to table
    
    tableInput.insertAdjacentHTML('beforeend', htmlContent);

    //clearing the form after the table has been created
    studentAddressInput.value='';
    studentNameInput.value='';
    studentAgeInput.value='';
    studentPhoneInput.value='';
       
}
var deleteButton=document.getElementById('student-table');
function deleteRow(e){
if(e.target.className==='delete-button'){
    var row=e.target.parentElement.parentElement;
    e.target.parentElement.parentElement.remove(row);
}
}
// function addTHead(){
//     var thead=`<tr><th> Name </th><th> Age </th><th> Phone Number </th><th> Address </th></tr>`
//     tableInput.insertAdjacentHTML('afterbegin',thead);
// }

//event handlers

addButton.addEventListener('click',addTable);
deleteButton.addEventListener('click',deleteRow);