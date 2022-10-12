/* eslint no-undefined: "error" */

const todoListContainer = document.getElementById('toDoListItemContainer');

const todoInput = document.querySelector('.toDoInput');

class ListTemplate {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    this.arrayList = JSON.parse(localStorage.getItem('listStorage')) || [];
  }
}

const task = new ListTemplate();

const displayList = () => {
  todoListContainer.innerHTML = '';
  task.arrayList.forEach((item, id) => {
    todoListContainer.innerHTML
    += `
      <div class='toDoItem'>
        <input class='item' id='check-${id}', "completed")' type='checkbox' ${item.completed ? 'checked' : ''} onclick='updateList(${id}, "completed")'>
        <input type='text' class='findInput' id='input-${id}' value=${item.description} />
        <i onclick='updateList(${id}, "description")' class='fa-solid fa-file-pen' id='options-${id}'></i>
        <i onclick='removeList(${id})' class='fa-solid fa-trash del-btn' id='delete-${id}'></i>
      </div>
    `;
  });
};

const addList = (description, completed, index) => {
  const listAdded = new ListTemplate(description, completed, index);
  task.arrayList.push(listAdded);
  localStorage.setItem('listStorage', JSON.stringify(task.arrayList));
  setTimeout(() => {
    todoInput.value = '';
  }, 500);
  displayList();
};

window.removeList = () => {
  const deleteBtn = [...document.querySelectorAll('.fa-trash')];
  deleteBtn.forEach((item) => {
    item.addEventListener('click', () => {
      task.arrayList.splice(deleteBtn.indexOf(item), 1);
      task.arrayList.forEach((item, index) => {
        item.index = index + 1;
      });
      localStorage.setItem('listStorage', JSON.stringify(task.arrayList));
      displayList();
    });
  });
};

window.updateList = (id) => {
  const updateInput = document.querySelector(`#input-${id}`).value;
  const updateCheckbox = document.querySelector(`#check-${id}`).checked;
  const updatedArray = task.arrayList.map((item) => {
    if (item.index - 1 === id) {
      item.description = updateInput;
    }
    if (item.index - 1 === id) {
      item.completed = updateCheckbox;
    }

    return item;
  });
  console.log(updateCheckbox);

  localStorage.setItem('listStorage', JSON.stringify(updatedArray));
};


module.exports = { addList, displayList, removeList, updateList };
