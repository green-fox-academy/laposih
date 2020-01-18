'use strict';

import { Domino } from "./Domino";
import { Todo } from "./Todo";
import { Printable } from "./Printable";


let dominoes: Domino[] = [];
let todos: Todo[] = [];
let printables: Printable[] = []

dominoes.push(new Domino(3,2));
dominoes.push(new Domino(6,3));
todos.push(new Todo('Buy Milk', 'high', true));
todos.push(new Todo('Wash Dishes', 'high', false));

for (let domino of dominoes) {
    domino.printAllFields();
  }
  
for (let todo of todos) {
    todo.printAllFields();
  }