import { Component } from '@angular/core';

@Component({
  selector: 'app',
  // templateUrl: './app.component.html',

  // DIKKAT: templateUrl ile template arasindaki fark
  template: `
    <h1>App component</h1>

    <h2>{{ title }}</h2>
    <!-- Degiskeni iki süslü parantez arasina yazarak app.components'ten getirdik -->

    <h2>{{ getTitle() }}</h2>

    <p>{{ todoItem.description }} {{ todoItem.action }}</p>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo App';

  todoItem = {
    description: 'kahvalti',
    action: true,
  };

  getTitle() {
    return this.title;
  }
}
