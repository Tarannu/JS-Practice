//ACCESSING The DOM
var previousValue=document.getElementById('header').textContent;
console.log('Previous Value: ',previousValue);
//document.getElementById('hero').innerHTML="<ul><li>This is a paragraph</li></ul>";
var todoInput=document.getElementById('to_input');
var addButton=document.getElementById('todo_button');
var todoList=document.getElementById('todo_list');


//functions
function handleButtonClick(){
    // console.log('Button Click event fired!');
    // document.getElementById('header').textContent="Text Changed";
    changeText();
}

function changeText(){
    var inputText=document.getElementById('header_text').value;
    document.getElementById('header').textContent=inputText;
    console.log(inputText);
}

function addToDo(){
    console.log('add todo fired');
    
    if(!todoInput.value){
        return alert('Field cannot be blank');
    }

    var htmlContent=`<li>${todoInput.value}</li>`;
    todoList.insertAdjacentHTML('beforeend',htmlContent);

    // make the field blank again for better user experience
    todoInput.value='';
}



//event handler
document.getElementById('event_button').addEventListener('click',handleButtonClick);
addButton.addEventListener('click',addToDo);