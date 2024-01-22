import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HelloWordComponent} from "./hello-word/hello-word.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [HelloWordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HelloWordComponent,
      },
    ]),
  ]
})
export class HelloWordModule {
}
