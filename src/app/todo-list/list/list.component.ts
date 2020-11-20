import { Component, Input, OnInit } from '@angular/core';
import Todo from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'my-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() socketRessource: string;
  newTodo = "";
  todos: Todo[];

  constructor(private dataService: TodoDataService) { }

  ngOnInit(): void {
    this.dataService.connect(this.socketRessource).subscribe(items => {
      this.todos = items;
    });
  }

  addTodo() {
    this.newTodo = this.newTodo.trim();
    if (this.newTodo.length > 0) this.dataService.addTodo(this.newTodo);
    this.newTodo = "";
  }
  
  toggleTodoComplete(todo: Todo) {
    this.dataService.toggleTodoCompleteById(todo.id);
  }
  
  removeTodo(todo: Todo) {
    console.log(todo)
    this.dataService.deleteTodoById(todo.id);
  }

}
