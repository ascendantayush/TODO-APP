const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');


let allTodos = [];

todoForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTodo();
})

function addTodo(){
    const todoText = todoInput.value.trim();
    
    if(todoText.length > 0){
        allTodos.push(todoText);
        updateTodoList();
        todoInput.value ="";
    }
}


function updateTodoList(){
    todoListUL.innerHTML="";
    allTodos.forEach((todo,todoIndex)=>{
        const todoItem = createTodoItem(todo,todoIndex);
        todoItem.classList.add("todo");
        todoListUL.append(todoItem);
    })
}

function createTodoItem(todo,todoIndex){ 
    const new_id = "todo-"+ todoIndex;
    const todoli = document.createElement('li');
    todoli.innerHTML = `
            <input type="checkbox" id="${new_id}">
            <label class="custom-checkbox" for="${new_id}">
                <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
            </label>

            <label for="${new_id}" class="todo-text">
                ${todo}
            </label>

            <button class="delete-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="var(--secondary-color)" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </button>
    `;
    return todoli;
}