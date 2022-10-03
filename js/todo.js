const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos"


let toDos = [];

function savedTodos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    savedTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    button.className = "todo-delete-btn"
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newToDoOj = {
        text: newTodo,
        id:Date.now(),
    };
    toDos.push(newToDoOj);
    paintTodo(newToDoOj);
    savedTodos();
}
todoForm.addEventListener("submit", handleTodoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);}