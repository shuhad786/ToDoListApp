import './styles.css';
import addList from './modules/app.js';


const addBtn = document.querySelector('.addToDo');
const todoInput = document.querySelector('.toDoInput');

addBtn.addEventListener('click', () => {
  addList(todoInput.value, false);
});
