import { addList, displayList, updateList } from './src/modules/app.js';

describe('Add and Remove Testing', () => {
  document.body.innerHTML = `
  <input id='toDoInput'>
  <button id='addBtn'></button>
  <div id='toDoListItemContainer'></div>
  `;

  test('adding item to list', () => {
    addList('paint', false, 0);
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    expect(localGet.length).toBe(1);
  });

  test('Removing item from list', () => {
    addList('work', false, 1);
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    expect(localGet.length).toBe(2);
    localGet.pop();
    localStorage.setItem('listStorage', JSON.stringify(localGet));
    displayList();
    const todolist = document.getElementById('toDoListItemContainer');
    expect(todolist.childElementCount).toBe(1);
  });
});

describe('clear all and edit Testing', () => {
  document.body.innerHTML = `
    <input id='toDoInput'>
    <button id='addBtn'></button>
    <div id='toDoListItemContainer'></div>
    `;

  test('Should update description', () => {
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    updateList('paint', false, 0);
    localStorage.setItem('listStorage', JSON.stringify(localGet));
    displayList();
    const todolist = document.getElementById('toDoListItemContainer');
    expect(todolist.children[0].children[1].value).toBe('paint');
  });

  test('Should update completed to true', () => {
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    localGet[0].completed = true;
    localStorage.setItem('listStorage', JSON.stringify(localGet));
    displayList();
    const todolist = document.getElementById('toDoListItemContainer');
    expect(todolist.children[0].children[0].checked).toBe(true);
  });

  test('Should update completed to false', () => {
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    localGet[0].completed = false;
    localStorage.setItem('listStorage', JSON.stringify(localGet));
    displayList();
    const todolist = document.getElementById('toDoListItemContainer');
    expect(todolist.children[0].children[0].checked).toBe(false);
  });

  test('Should remove all completed true', () => {
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    localGet.pop();
    const newData1 = { description: 'exercise', completed: true, index: 0 };
    const newData2 = { description: 'play', completed: true, index: 1 };
    localGet.push(newData1);
    localGet.push(newData2);
    const Completed = jest.fn(() => localGet.filter((item) => item.completed === true));
    const completedItem = Completed();
    expect(completedItem).toHaveLength(2);
  });
});
