import { async, TestBed } from '@angular/core/testing';
import { TodolistComponent } from './todolist.component';
describe('TodolistComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TodolistComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TodolistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/MilesK/Documents/todoapp/src/app/todolist/todolist.component.spec.js.map