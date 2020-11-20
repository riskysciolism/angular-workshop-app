import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todo from '../todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() complete = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleTodoComplete() {
    this.complete.emit(this.todo)
  }

  removeTodo() {
    this.remove.emit(this.todo)
  }
}
