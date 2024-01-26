window.addEventListener("load", () => {
  ("use strict");
  const todoForm = document.getElementById("todo-form");
  const inputTask = document.getElementById("addtask");
  const addBtn = document.querySelector(".todo-form__add-btn");
  const delDoneBtn = document.querySelector(".todo-form__done-btn");
  const delAllBtn = document.querySelector(".todo-form__del-btn");
  const todoTasks = document.querySelector(".todo-tasks");
  const userError = document.querySelector(".error");
  const searchBar = document.getElementById("search");

  const select = document.querySelector(".select");
  const selectAll = document.getElementById("selectall");

  let iconEdit;
  let iconTrash;

  const ALL_TASKS_DEL = "All tasks have been deleted!";
  const SELECT_A_TASK = "PLease select a task!";
  const ADD_A_TASK = "Please add some task!";
  const TASK_ALREADY_EXIST = "task already exists!";

  let listTodo = [];

  function saveList() {
    if (window.localStorage && listTodo !== undefined) {
      localStorage.setItem("allTasks", JSON.stringify(listTodo));
    }
  }

  function reset() {
    userError.innerHTML = "";
    inputTask.value = "";
  }

  // Create HTML list
  function renderTodo(id, name = "", done) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const iconsDiv = document.createElement("div");
    const inputText = document.createElement("input");
    li.classList.add("item");
    todoTasks.appendChild(li);
    todoTasks.insertAdjacentElement("afterbegin", li);
    li.appendChild(iconsDiv);
    iconsDiv.classList.add("icons");

    li.insertAdjacentElement("afterbegin", inputText);
    inputText.classList.add("item_tasktext");
    inputText.value = name;
    inputText.setAttribute("readonly", "readonly");
    li.setAttribute("draggable", true);

    input.classList.add("item__checkbox");
    input.type = "checkbox";
    li.appendChild(input);
    li.insertAdjacentElement("afterbegin", input);
    const addcheckbox = document.querySelector(".item__checkbox");

    li.setAttribute("data-id", id);

    const edit = document.createElement("i");
    edit.classList.add("fa", "fa-light", "fa-pen-to-square");
    edit.setAttribute("title", "Edit task");
    iconsDiv.appendChild(edit);

    const delBtn = document.createElement("i");
    delBtn.classList.add("fa", "fa-trash-alt", "trash");
    delBtn.setAttribute("title", "Delete task");
    iconsDiv.appendChild(delBtn);

    input.toggleAttribute("checked", done);
    addcheckbox.closest(".item").classList.toggle("active", done);
  }

  // Add Task to list
  function addTask() {
    try {
      if (inputTask.value === "") {
        userError.innerHTML = ADD_A_TASK;
        userError.setAttribute("aria-label", ADD_A_TASK);
        throw new Error("is empty");
      }

      if (inputTask.value !== "") {
        listTodo.filter((task) => {
          if (task.name.toLowerCase() === inputTask.value.toLowerCase()) {
            userError.innerHTML = `<span>${inputTask.value}</span> ${TASK_ALREADY_EXIST}`;
            userError.setAttribute(
              "aria-label",
              `${inputTask.value} ${TASK_ALREADY_EXIST}`
            );
            inputTask.value = "";
            throw new Error(TASK_ALREADY_EXIST);
          }
        });
      }

      const task = {
        id: Date.now(),
        name: inputTask.value,
        isDone: false,
      };

      listTodo !== null ? listTodo.push(task) : null;
      saveList();

      const isEmpty =
        listTodo !== null && listTodo.length > 1
          ? select.classList.remove("hide")
          : null;
      selectAll.checked = false;

      renderTodo(task.id, task.name, task.isDone);

      done_notDone();
      editTasks();
      delTask();
      reset();
    } catch (error) {
      error.message;
    } finally {
    }
  }

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
    listTodo = JSON.parse(localStorage.getItem("allTasks"));
  });

  function delTask() {
    iconTrash.forEach((trash) => {
      listTodo = JSON.parse(localStorage.getItem("allTasks"));
      trash.addEventListener("click", (e) => {
        const taskToDelete = Number(
          e.target.parentNode.parentNode.getAttribute("data-id")
        );

        const isToDelete = (element) => element.id === taskToDelete;
        const selectIndexToDelete = listTodo.findIndex(isToDelete);
        listTodo.splice(selectIndexToDelete, 1);
        localStorage.setItem("allTasks", JSON.stringify(listTodo));
        e.target.parentNode.parentNode.remove();
      });
    });
  }

  function delTasksDone(e) {
    e.preventDefault();
    listTodo = JSON.parse(localStorage.getItem("allTasks"));
    const listItem = document.querySelectorAll("li");
    const checkbox = document.querySelectorAll(".item__checkbox");
    checkbox.forEach((elem) => {
      const isChecked = !elem.checked
        ? (userError.innerHTML = SELECT_A_TASK) &&
          userError.setAttribute("aria-label", SELECT_A_TASK)
        : null;
    });
    listItem.forEach((item) => {
      if (item.classList.contains("active")) {
        let id = item.getAttribute("data-id");
        const isToDelete = (element) => element.id === Number(id);
        const indexToDel = listTodo.findIndex(isToDelete);
        listTodo.splice(indexToDel, 1);
        localStorage.setItem("allTasks", JSON.stringify(listTodo));
        listTodo.length < 2 && listTodo !== null
          ? select.classList.add("hide")
          : null;

        item.remove();
        reset();

        if (listTodo === null || listTodo.length === 0) {
          reset();
          select.classList.add("hide");
          userError.innerHTML = ALL_TASKS_DEL;
          userError.setAttribute("aria-label", ALL_TASKS_DEL);
        }
      }
    });
    localStorage.setItem("allTasks", JSON.stringify(listTodo));
  }

  function delAllTasks(e) {
    e.preventDefault();
    listTodo = JSON.parse(localStorage.getItem("allTasks"));
    if (listTodo !== null) {
      listTodo = [];
      select.classList.add("hide");
      todoTasks.innerHTML = "";
      userError.innerHTML = ALL_TASKS_DEL;
      userError.setAttribute("aria-label", ALL_TASKS_DEL);
    }
    localStorage.setItem("allTasks", JSON.stringify(listTodo));
  }

  // listTodo = JSON.parse(localStorage.getItem("allTasks"));

  function allChecked(did = []) {
    listTodo.map((task) => {
      did.push(Object.values(task)[2]);
      return did;
    });

    const isChecked = (done) => done === true;
    did.every(isChecked)
      ? (selectAll.checked = true)
      : (selectAll.checked = false);
  }

  function done_notDone() {
    iconEdit = document.querySelectorAll(".fa-pen-to-square");
    iconTrash = document.querySelectorAll(".trash");
    allChecked();
    listTodo = JSON.parse(localStorage.getItem("allTasks"));
    const checkbox = document.querySelectorAll(".item__checkbox");
    checkbox.forEach((elem) => {
      elem.addEventListener("change", (e) => {
        let idDone = Number(e.target.parentNode.getAttribute("data-id"));
        let taskIdDone = document.querySelector("[data-id='" + idDone + "']");
        if (listTodo !== null) {
          let indexChecked = listTodo.findIndex(
            (indexTask) => indexTask.id === idDone
          );

          listTodo[indexChecked].isDone = !listTodo[indexChecked].isDone;

          listTodo[indexChecked].isDone === true ? reset() : null;
        }
        allChecked();

        taskIdDone.firstChild.toggleAttribute("checked");
        taskIdDone.closest(".item").classList.toggle("active");

        // on change event bubles that's why using stopImmediatePropagation
        e.stopImmediatePropagation();
        localStorage.setItem("allTasks", JSON.stringify(listTodo));
      });
    });
  }

  function loadTasks() {
    listTodo = JSON.parse(localStorage.getItem("allTasks"));
    if (listTodo !== null) {
      listTodo.map((task) => {
        select.classList.remove("hide");
        renderTodo(task.id, task.name, task.isDone);
        listTodo.length < 2 ? selectAll.classList.remove("hide") : null;
        reset();
      });
    }
  }

  loadTasks();
  done_notDone();

  function editTasks() {
    iconEdit.forEach((edit) => {
      listTodo = JSON.parse(localStorage.getItem("allTasks"));
      edit.addEventListener("click", (e) => {
        const taskToEdit = Number(
          e.target.parentNode.parentNode.getAttribute("data-id")
        );
        const isToEdit = (element) => element.id === taskToEdit;
        const selectItemaToEdit = listTodo.findIndex(isToEdit);

        e.target.parentNode.previousElementSibling.toggleAttribute("readonly");
        e.target.parentNode.previousElementSibling.classList.toggle("focus");
        e.target.setAttribute("title", "Save task");
        e.target.classList.toggle("fa-floppy-disk");
        listTodo[selectItemaToEdit].name =
          e.target.parentNode.previousElementSibling.value;
        localStorage.setItem("allTasks", JSON.stringify(listTodo));
      });
    });
  }

  editTasks();
  delTask();

  function debounced(delay, fn) {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, delay);
    };
  }

  function searchList(e) {
    e.preventDefault();
    const textTask = document.querySelectorAll(".item_tasktext");
    const li = Array.from(textTask);
    li.map((item) => {
      const isVisible = item.value
        .toLowerCase()
        .includes(searchBar.value.toLowerCase());
      item.parentNode.classList.toggle("hide", !isVisible);
      reset();
    });
  }

  const filterList = debounced(300, searchList);

  function selectAllTasks() {
    const checkbox = document.querySelectorAll(".item__checkbox");

    listTodo = JSON.parse(localStorage.getItem("allTasks"));
    checkbox.forEach((elem, i) => {
      if (selectAll.checked) {
        userError.innerHTML = "";
        elem.checked = true;
        elem.parentNode.classList.add("active");
        listTodo[i].isDone = true;
        localStorage.setItem("allTasks", JSON.stringify(listTodo));
      } else if (!selectAll.checked) {
        elem.checked = false;
        elem.parentNode.classList.remove("active");
        listTodo[i].isDone = false;
        localStorage.setItem("allTasks", JSON.stringify(listTodo));
      }
    });
  }

  // Draggable items
  const items = document.querySelectorAll("li");
  function handleDragStart(e) {
    this.style.opacity = "0.4";
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }

  function handleDragEnd(e) {
    this.style.opacity = "1";
    items.forEach(function (item) {
      item.classList.remove("over");
    });
  }

  function handleDragOver(e) {
    e.preventDefault();
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add("over");
  }

  function handleDragLeave(e) {
    this.classList.remove("over");
  }

  function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");
    }

    return false;
  }

  items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragover", handleDragOver);
    item.addEventListener("dragenter", handleDragEnter);
    item.addEventListener("dragleave", handleDragLeave);
    item.addEventListener("dragend", handleDragEnd);
    item.addEventListener("drop", handleDrop);
  });

  addBtn.addEventListener("click", addTask);
  searchBar.addEventListener("input", filterList);
  delDoneBtn.addEventListener("click", delTasksDone);
  delAllBtn.addEventListener("click", delAllTasks);
  selectAll.addEventListener("change", selectAllTasks);
});
