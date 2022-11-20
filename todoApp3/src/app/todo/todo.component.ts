import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  name = 'Ahmet';
  inputText = '';
  todos: any[] = [];

  ngOnInit(): void {}

  getTodos() {    
    return this.todos;
  }

  addTodo() {
    return this.todos.push({description:this.inputText,action:false});
  }
}
