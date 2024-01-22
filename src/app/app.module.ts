import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "./app.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {routes} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButton, MatIconButton} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatIconButton,
    MatMenuTrigger,
    MatButton,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
