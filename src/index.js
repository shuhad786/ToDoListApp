import './styles.css';
import { addList, displayList } from './modules/app.js';
import clearCompleted from './modules/clearAll.js';

const addBtn = document.querySelector('.addToDo');
const todoInput = document.querySelector('.toDoInput');
const clearAll = document.querySelector('.clearCompleted');

window.addEventListener('load', () => {
  displayList();
});

addBtn.addEventListener('click', () => {
  addList(todoInput.value, false, JSON.parse(localStorage.getItem('listStorage')).length + 1);
  displayList();
});

clearAll.addEventListener('click', () => {
  clearCompleted();
  displayList();
});
