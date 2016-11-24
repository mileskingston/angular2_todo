var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
export var Item = (function () {
    function Item() {
    }
    return Item;
}());
export var GetItemsService = (function () {
    function GetItemsService() {
        this.getItems = function () { return [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' }
        ]; };
        this.deleteAll = function () { return []; };
        this.deleteItem = function () { return []; };
    }
    GetItemsService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], GetItemsService);
    return GetItemsService;
}());
//# sourceMappingURL=C:/Users/MilesK/Documents/todoapp/src/app/get-items.service.js.map