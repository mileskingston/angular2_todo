import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TodoService } from '../get-items.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  private todos;
  private newTodo;
  myGroup: FormGroup;
  editGroup: FormGroup;
  editing = false;

  constructor (private TodoService: TodoService) {}

  addItem() {
    if(this.newTodo && this.myGroup.valid) {
      this.TodoService.addItem({id: (this.todos.length + 1), name: this.newTodo, editing: false});
      this.newTodo = null;
      this.myGroup.reset();
    }
  }

  deleteItem(i) {
    this.TodoService.deleteItem(i);
  }

  deleteAll() {
    this.todos = this.TodoService.deleteAll();
  }

  editMode(index) {
    for(var i = 0; i <= this.todos.length; i++) {
      if(i == index) {
        this.todos[i].editing = true;
      }
    }
  }

  editItem(todo, newValue) {
    this.TodoService.editItem(todo, newValue);
    todo.editing = false;
  }

  ngOnInit() {
    this.todos = this.TodoService.getItems();

    this.myGroup = new FormGroup({
      add: new FormControl('', [Validators.required, Validators.minLength(1)])
    });
    this.editGroup = new FormGroup({
      edit: new FormControl('', [Validators.required, Validators.minLength(1)])
    })
  }
}