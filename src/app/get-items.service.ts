import { Injectable } from '@angular/core';

let todos = [
	{ id: 1, name: 'Sample to do', editing: false }	
];

@Injectable()
export class TodoService {
  
  getItems() {
  	return todos;
  }

  addItem(data) {
  	todos.push(data);
  	return todos;
  }

  editItem(todo, newVal) {
  	todos[todo.id - 1].name = newVal;
  	return todos;
  }

  deleteItem(index) {
  	todos.splice(index, 1);
  	return todos;
  }
	
  deleteAll() {
  	todos = [];
  	return todos;
  };
}
