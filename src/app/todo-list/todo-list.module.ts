import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ListComponent, ItemComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListComponent
  ]
})
export class TodoListModule { }
