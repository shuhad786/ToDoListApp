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

displayList = () => {
  todoListContainer.innerHTML = '';
  this.arrayList.forEach((item, id) => {
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

addList = (description, completed, index) => {
  const listAdded = new ListTemplate(description, completed, index);
  this.arrayList.push(listAdded);
  localStorage.setItem('listStorage', JSON.stringify(this.arrayList));
  setTimeout(() => {
    todoInput.value = '';
  }, 1000);
  this.displayList();
};

removeList = () => {
  const deleteBtn = [...document.querySelectorAll('.fa-trash')];
  deleteBtn.forEach((item) => {
    item.addEventListener('click', () => {
      this.arrayList.splice(deleteBtn.indexOf(item), 1);
      this.arrayList.forEach((item, index) => {
        item.index = index + 1;
      });
      localStorage.setItem('listStorage', JSON.stringify(this.arrayList));
      this.displayList();
    });
  });
};

updateList = (id) => {
  const updateInput = document.querySelector(`#input-${id}`).value;
  const updateCheckbox = document.querySelector(`#check-${id}`).checked;
  const updatedArray = this.arrayList.map((item) => {
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
}

module.exports = ListTemplate;
