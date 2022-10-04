import './styles.css';
import { addList, displayList } from './modules/app.js';
import localGet from './modules/storage.js';

const addBtn = document.querySelector('.addToDo');
const todoInput = document.querySelector('.toDoInput');

window.addEventListener('load', () => {
  displayList();
});

addBtn.addEventListener('click', () => {
  addList(todoInput.value, false, localGet.length + 1);
});
