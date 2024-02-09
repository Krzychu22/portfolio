import {NgModule} from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {WeatherComponent} from "./weather/weather.component";
import {RouterModule} from "@angular/router";
import {SampleReduxComponent} from "../sample-redux/sample-redux/sample-redux.component";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./service/api.service";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from "@angular/material/button";


@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    CommonModule,
    NgForOf,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: WeatherComponent
      },
    ]),
    HttpClientModule,
    MatLabel,
    MatInput,
    MatFormField,
    MatButton
  ],
  providers: [
    ApiService
  ],
  bootstrap: [WeatherComponent]
})
export class WeatherModule {
}
