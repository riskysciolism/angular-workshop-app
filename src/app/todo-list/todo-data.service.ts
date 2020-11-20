import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Socket} from 'ngx-socket-io';
import Todo from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  private socket: Socket;
  constructor() { }

  connect(uri: string): Observable<any> {
    this.socket = new Socket({url: uri});

    let observable = new Observable(observer => {
      this.socket.on('update', (items: Todo[]) => {
        observer.next(items);
      })
    });

    return observable;
  }

  addTodo(itemTitle: string) {
    this.socket.emit('newItem', itemTitle);
  }

  deleteTodoById(id: number) {
    this.socket.emit('deleteItem', id);
  }

  toggleTodoCompleteById(id: number) {
    this.socket.emit('toggleTodoComplete', id);
  }

}
