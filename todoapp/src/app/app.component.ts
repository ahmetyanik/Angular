import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      p {
        color: white;
      }
    `,
  ],
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
