import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainCalculatorComponent } from './main-calculator/main-calculator.component';
import { TipsComponent } from './tips/tips.component';
import { HeaderComponent } from './header/header.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCalculatorComponent,
    TipsComponent,
    HeaderComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
