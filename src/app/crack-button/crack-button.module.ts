import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CrackButtonComponent} from "./crack-button/crack-button.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    CrackButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CrackButtonComponent
      }
    ]),
  ]
})
export class CrackButtonModule { }
