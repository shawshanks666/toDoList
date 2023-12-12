//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//event listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)
document.addEventListener('DOMContentLoaded', getTodos
)


//functions
function addTodo(event){
    //prevents form from submitting/refreshing the whole page
    event.preventDefault();  

    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create LI
    const todoLI= document.createElement('li');
    todoLI.innerText= todoInput.value;
    todoLI.classList.add('todo-item')
    saveLocalTodos(todoInput.value)
    //create buttons

    //delete button
    const todoDelete= document.createElement('button');
    todoDelete.innerHTML=`<i class='fas fa fa-trash'></i>`;
    todoDelete.classList.add('delete-button')
    //checked button
    const todoChecked= document.createElement('button');  
    todoChecked.innerHTML=`<i class='fas fa fa-check'></i>`
    todoChecked.classList.add('check-button')

    //add everything to the div
    todoDiv.appendChild(todoLI);
    todoDiv.appendChild(todoDelete);
    todoDiv.appendChild(todoChecked);
    //append the div to the todolist
    todoList.appendChild(todoDiv);
    

}

function deleteCheck(e){
    const item = e.target;
    if(item.classList[0]==='delete-button'){
        const todo= item.parentElement;
        //animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', ()=>{
            todo.remove();} )
        // todo.remove();
    }
    if(item.classList[0]==='check-button'){
        const todo= item.parentElement
        todo.classList.toggle('completed');
        console.log(todo);
    }
}

function filterTodo(e){
    const todos= todoList.childNodes;   
    console.log(todos);
    todos.forEach(function(todo){

        switch(e.target.value){
            case 'all':
                todo.style.display= 'flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display= 'flex'
                }else{
                    todo.style.display= 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                  } else {
                    todo.style.display = "none";
                  }
        }
    })
}

function saveLocalTodos(todo){
    //check if we already have things in there
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
function getTodos(){

    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'));

    }
    todos.forEach((todo)=>{
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create LI
    const todoLI= document.createElement('li');
    todoLI.innerText= todo;
    todoLI.classList.add('todo-item')
    //create buttons

    //delete button
    const todoDelete= document.createElement('button');
    todoDelete.innerHTML=`<i class='fas fa fa-trash'></i>`;
    todoDelete.classList.add('delete-button')
    //checked button
    const todoChecked= document.createElement('button');  
    todoChecked.innerHTML=`<i class='fas fa fa-check'></i>`
    todoChecked.classList.add('check-button')

    //add everything to the div
    todoDiv.appendChild(todoLI);
    todoDiv.appendChild(todoDelete);
    todoDiv.appendChild(todoChecked);
    //append the div to the todolist
    todoList.appendChild(todoDiv);
    })
}

function removeLocalTodos(todo){
    console.log(todo);

    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'));

    }
    const todoIndex= todo.children[0].innerText;
    console.log(todo);
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

let prtcl = document.getElementById('particle')
function setParticles(num) {
  for (let i = 0; i<num; i++) {
    let prt = document.createElement('div')
    prt.setAttribute('class', 'particles')
    prt.style.left = 100 * Math.random() + "%"
    prt.animate([{
      transform: 'translate(-200px, 0) scale(' + Math.random() * 10 + ')'
    },{
      transform: 'translate(' + Math.random() * 700 + 'px, 112vh) scale(' + Math.random() * 9 + ')',
      background: '#26CDBC',
      boxShadow: '0 0 4px #00bf86, 0 0 8px #82edc1',
      opacity: Math.random() * 1.5
    }],{
      duration: Math.random() * 400 + 60000,
      delay: -i * 1000,
      iterations: Infinity
    })
    prtcl.appendChild(prt)
  }
}
setParticles(100)