import { Model } from './../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {}

  model = new Model();


  getName() {
    return this.model.name;
  }

  getItems(){
    return this.model.items;
  }
}
