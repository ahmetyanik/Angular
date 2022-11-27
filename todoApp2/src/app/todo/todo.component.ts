import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {
    this.model.items = this.getItemsFromLocalStorage();

  }

  displayAll: boolean = false;
  inputText: string = '';
  deneme : string = "Merhaba"

  model = new Model();

  addItem() {
    if (this.inputText !== '') {
      let data = { description: this.inputText, action: false };
      this.model.items.push(data);
      let items = this.getItemsFromLocalStorage();
      items.push(data);
      localStorage.setItem('items', JSON.stringify(items));
      this.inputText = '';
    }
  }

  getName() {
    return this.model.name;
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => item.action === false);
  }

  displayCount() {
    return this.model.items.filter((item) => item.action).length;
  }

  getBtnClasses() {
    return {
      disabled: this.inputText.length === 0,
      'btn-secondary': this.inputText.length === 0,
      'btn-primary': this.inputText.length > 0,
    };
  }

  getItemsFromLocalStorage() {
    let items: TodoItem[] = [];
    let value = localStorage.getItem('items');

    if (value !== null) {
      items = JSON.parse(value);
    }
    return items;
  }

  onActionChanged(item: TodoItem) {
    let items = this.getItemsFromLocalStorage();

    localStorage.clear();

    items.forEach(i=>{
      if(i.description == item.description){
        i.action = item.action;
      }
    })
    localStorage.setItem('items', JSON.stringify(items));
  }

  denemeDegistir(){

    if(this.deneme === "Merhaba"){
      console.log(this.deneme);
      
       this.deneme = "Hallo"
    }else{
       this.deneme = "Merhaba";
    }

  }
}
