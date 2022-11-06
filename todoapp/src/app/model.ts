import { TodoItem } from './todoItem';
export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Sadik';
    this.items = [
      { description: 'kahvalti', action: 'yes' },
      { description: 'spor', action: 'yes' },
      { description: 'alisveris', action: 'no' },
    ];
  }
}
