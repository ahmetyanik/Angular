import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {}

  private name = 'Ahmet';
  items = ['item 1', 'item 2', 'item 3'];

  getName() {
    return this.name;
  }
}