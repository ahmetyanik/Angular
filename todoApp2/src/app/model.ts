import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Ahmet';
    this.items = [];
  }
}


