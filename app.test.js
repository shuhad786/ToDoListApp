/**
 * @jest-environment jsdom
 */

describe('Add and Remove Testing', () => {
  document.body.innerHTML = `
  <input id='toDoInput'>
  <button id='addBtn'></button>
  <div id='toDoListItemContainer'></div>
  `;

  const ListTemplate = require('./src/modules/app.js');
  const newTask = new ListTemplate();

  const Input = document.getElementById('toDoInput');
  const todolist = document.getElementById('toDoListItemContainer');

  test('adding item to list', () => {
    Input.value = 'Task 1';
    newTask.addList();
    Input.value = 'Task 2';
    newTask.addList();
    Input.value = 'Task 3';
    newTask.addList();
    const listItems = todolist.querySelectorAll('.toDoItem');
    expect(listItems).toHaveLength(3);
  });

  test('Removing items from list', () => {
    const btn = document.querySelectorAll('.del-btn');
    btn[0].click();
    btn[1].click();
    btn[2].click();
    const listItems = todolist.querySelectorAll('.toDoItem');
    expect(listItems).toHaveLength(0);
  });
});