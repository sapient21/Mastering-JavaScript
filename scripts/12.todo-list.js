const todoList = [
  {
    name: "watch",
    dueDate: "2025-11-1",
  },
  {
    name: "learn",
    dueDate: "2025-11-2",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name } = todoObject;
    const { dueDate } = todoObject;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button onclick = "
      todoList.splice(${index}, 1);
      renderTodoList();
    " class= "delete-todo-btn js-delete-todo-btn">delete</button>
    `;

    todoListHTML += html;
  });

  //console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document.querySelectorAll(".js-delete-todo-btn")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        console.log(index);
        todoList.splice(index, 1);
        renderTodoList();
      });
    });

    
}

document.querySelector(".js-add-todo-btn").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");

  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate,
  });

  //console.log(todoList);

  inputElement.value = "";
  renderTodoList();
}
