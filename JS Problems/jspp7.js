var idInput = document.getElementById("id_input");
var buttonInput = document.getElementById('show_output');
var showFirstNameOutput = document.getElementById('output_para1')
var showLastNameOutput = document.getElementById('output_para2')
var showEmail=document.getElementById('emailOutput')
var createButton=document.getElementById('create');

var tableButton=document.getElementById('loadUserTable')
var userTable=document.getElementById('userTable')
var loadMoreButton=document.getElementById('loadMore');

var firstNameInput=document.getElementById('firstname_input');
var jobInput=document.getElementById('job');

//async await application
const getUser = async function (id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    console.log(data);
    return data.data;
}
async function display() {
    var outputValue = await getUser(idInput.value);
    var firstNameValue= outputValue.first_name;
    var lastNameValue=outputValue.last_name;
        
    showFirstNameOutput.innerHTML ="First Name: "+firstNameValue;
    showLastNameOutput.innerHTML="Last Name: "+lastNameValue;
    //showEmail.innerHTML="Email: "+emailValue;
    //addToTable();
    idInput.value = '';
}
const getUserList = async function () {
    const res = await fetch(`https://reqres.in/api/users/`);
    const data = await res.json();
    console.log(data);
    return data.data;
}
loadMoreButton.disabled=true;
async function addToTable(){
    loadMoreButton.disabled=false;
    var outputValue = await getUser(idInput.value);
    
    for(var i=0;i<=outputValue.length-1;i++){
        var row =`<tr><td>${outputValue[i].first_name}</td><td>${outputValue[i].last_name}</td></tr>`
        userTable.innerHTML+=row;
    }    
}
async function loadMoreTable(){
    
    loadMoreButton.disables=true;
    const res = await fetch(`https://reqres.in/api/users?page=2`);
    const data = await res.json();
    var newOutputValue=data.data;

    for(var i=0;i<=newOutputValue.length-1;i++){
        var row =`<tr><td>${newOutputValue[i].first_name}</td><td>${newOutputValue[i].last_name}</td></tr>`
        userTable.innerHTML+=row;
    } 
    loadMoreButton.disabled=true;
}

async function postUser(){
    var myHeaders=new Headers();
    myHeaders.append('Content-type','application/json')
    var postData=JSON.stringify({
        fname:`${firstNameInput.value}`,
        job:`${jobInput.value}`
    });
    var requestData={
        method: "POST",
        headers: myHeaders,
        body: postData
    }
    const res=await fetch('https://reqres.in/api/users',requestData)
    const data=await res.json();
    console.log(data);
    
    document.getElementById('createOutputPara').innerHTML= "Check Console for the JSON output";

}

tableButton.addEventListener('click',addToTable);
loadMoreButton.addEventListener('click',loadMoreTable);
createButton.addEventListener('click',postUser);


