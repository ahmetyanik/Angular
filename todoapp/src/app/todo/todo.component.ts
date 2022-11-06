import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {}

  model = new Model();
  /* 
  addItem(txtItem: any) {
    console.log(txtItem.value);
  }
   */

  addItem(value: string) {
    value !== ''
      ? this.model.items.push({ description: value, action: 'no' })
      : alert('Please type a to do!');
  }

  getName() {
    return this.model.name;
  }

  getItems() {
    return this.model.items;
  }
}
