const todoInput = document.getElementById("addTodoInput");
const addBtn = document.getElementById("addBtn");
const todoContainer = document.querySelector(".todoList");

addBtn.addEventListener("click", () => {
  const todoText = todoInput.value;

  if (todoText.trim() === "") {
    alert("Please enter a todo");
  } else {
    addTodo(todoText);
  }
});

function addTodo(todoText) {
  const el = document.createElement("div");
  el.classList.add("singleTodo");
  el.innerHTML = `
    <span>${todoText}</span>
    <i class= "fa-solid fa-check"></i>
    `;
  todoContainer.appendChild(el);
}
