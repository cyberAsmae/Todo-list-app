const todoList = document.getElementById('todoList');
const todoItemInput = document.getElementById("todoItemInput");
const addItemBtn = document.getElementById("addItemBtn");
let todoArray = [];



function getTodoItem(evt) {
	let todoValue = todoItemInput.value;
	todoArray.push(todoValue);
	outputTodoArray();
	evt.preventDefault;
	todoItemInput.value = ""; 
}
addItemBtn.onclick = getTodoItem;

function outputTodoArray() {
	todoList.innerHTML = "";
	for (let i = 0; i < todoArray.length; i++) {
		todoList.innerHTML += `<li> ${todoArray[i]}</li>`;
	}
}
