import { TodoItem } from './todoItem';
export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Ahmet';
    this.items = [
    ];
  }
}
