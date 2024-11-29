document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("tasks__form");
  const input = document.getElementById("task__input");
  const tasksList = document.getElementById("tasks__list");

  function addTask(taskTitle) {
    const task = document.createElement("div");
    task.className = "task";

    const title = document.createElement("div");
    title.className = "task__title";
    title.textContent = taskTitle;

    const removeButton = document.createElement("a");
    removeButton.className = "task__remove";
    removeButton.textContent = "×";

    removeButton.addEventListener("click", () => {
      tasksList.removeChild(task);
    });

    task.appendChild(title);
    task.appendChild(removeButton);
    tasksList.appendChild(task);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskTitle = input.value.trim();
    if (taskTitle) {
      addTask(taskTitle);
      input.value = "";
      input.focus();
    }
  });

  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const taskTitle = input.value.trim();
      if (taskTitle) {
        addTask(taskTitle);
        input.value = "";
        input.focus();
      }
    }
  });
});
