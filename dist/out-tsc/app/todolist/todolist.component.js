var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetItemsService } from '../get-items.service';
export var TodolistComponent = (function () {
    function TodolistComponent(GetItemsService) {
        this.GetItemsService = GetItemsService;
        this.todos = this.GetItemsService.getItems();
    }
    TodolistComponent.prototype.addItem = function (newItem) {
        if (this.newItem) {
            this.todos.push({
                id: this.todos.length + 1,
                name: this.newItem
            });
            this.newItem = null;
            this.myGroup.reset();
        }
    };
    TodolistComponent.prototype.deleteItem = function ($index) {
        // this.GetItemsService.deleteItem();
        var index = this.todos.indexOf($index);
    };
    TodolistComponent.prototype.deleteAll = function () {
        // this.todos = [];
        this.todos = this.GetItemsService.deleteAll();
    };
    TodolistComponent.prototype.editItem = function (id) {
        console.log('edit item');
        var editingItem = this.todos[id - 1];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        if (editingItem) {
            console.log;
            this.editing = !this.editing;
        }
    };
    TodolistComponent.prototype.onFocus = function ($event) {
        this.myGroup.reset();
    };
    TodolistComponent.prototype.selectItem = function () {
        console.log('select item');
    };
    TodolistComponent.prototype.ngOnInit = function () {
        this.myGroup = new FormGroup({
            add: new FormControl('', [Validators.required, Validators.minLength(1)])
        });
        this.editGroup = new FormGroup({
            edit: new FormControl('', [Validators.required, Validators.minLength(1)])
        });
    };
    TodolistComponent = __decorate([
        Component({
            selector: 'app-todolist',
            templateUrl: './todolist.component.html',
            styleUrls: ['./todolist.component.scss']
        }), 
        __metadata('design:paramtypes', [GetItemsService])
    ], TodolistComponent);
    return TodolistComponent;
}());
//# sourceMappingURL=C:/Users/MilesK/Documents/todoapp/src/app/todolist/todolist.component.js.map