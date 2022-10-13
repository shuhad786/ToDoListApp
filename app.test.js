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

  describe('Add and Remove Testing', () => {
    document.body.innerHTML = `
    <input id='toDoInput'>
    <button id='addBtn'></button>
    <div id='toDoListItemContainer'></div>
    `;

  test('Should update description', () => {
    const localGet = JSON.parse(localStorage.getItem('listStorage'));
    addList('paint', false, 0);
    expect(localGet.length).toBe(1);
    localGet[0].description = 'changed';
    localStorage.setItem('listStorage', JSON.stringify(localGet));
    displayList();
    const todolist = document.getElementById('toDoListItemContainer');
    console.log(localGet)
    expect(todolist.children[0].children[1].value).toBe('changed');
  });
});
