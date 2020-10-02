//selectors
const todoInput=document.querySelector('.todo-input')
const todoButton=document.querySelector('.todo-button')
const todoList=document.querySelector('.todo-list')
const filterOption=document.querySelector('.filter-todo');
//event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

//functions
function addTodo(event){
  //prevent form from submitting
  event.preventDefault();
  //Todo Div
  const todoDiv=document.createElement('div');
  todoDiv.classList.add('todo');
  //create LI
  const newTodo=document.createElement('li');
  newTodo.innerText=todoInput.value; //adding input to your list
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //check button
  const completedButton=document.createElement('button');
  completedButton.innerHTML='<i class="fas fa-check></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //trash button
  //check button
  const trashButton=document.createElement('button');
  trashButton.innerHTML='<i class="fas fa-trash></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);
  //append to list
  todoList.appendChild(todoDiv);
  //clear to do input value
  todoInput.value="";

}
function deleteCheck(e){
  const item=e.target;
  //delete todo
  if(item.classList[0]==="trash-btn"){
    const todo=item.parentElement;
    todo.remove();
  }

}
function filterTodo(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        break;
      case "completed":
        if(todo.classList.contains('completed')){
          todo.style.display='flex';
        }
        else{
          todo.style.display="none";
        }
    }
  });

}