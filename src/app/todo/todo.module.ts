import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from "./todo/todo.component";
import {RouterModule} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatList, MatListItem} from "@angular/material/list";
import {ApiService} from "../weather/service/api.service";


@NgModule({
  declarations: [
    TodoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent
      }
    ]),
    MatButton,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckbox,
    MatList,
    MatListItem,
    FormsModule
  ]
})
export class TodoModule {
}
