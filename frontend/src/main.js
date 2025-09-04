
import { renderTodoForm } from './components/todoForm/todoForm.js';
import { renderTodoList } from './components/todoList/todoList.js';

async function renderTodos() {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.appendChild(renderTodoForm());
  app.appendChild(await renderTodoList());
}

renderTodos();

document.addEventListener("todoUpdated", () => {
  renderTodos();
});