import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoListModule } from './todo-list/todo-list.module'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
