import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleReduxComponent} from "./sample-redux/sample-redux.component";
import {RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {sampleReducer} from "./redux/reducers";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";


@NgModule({
  declarations: [
    SampleReduxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SampleReduxComponent
      },
    ]),
    StoreModule.forRoot({sample: sampleReducer}),
    MatButton,
    MatInput,
    MatLabel,
    MatFormField,
  ]
})
export class SampleReduxModule {
}
