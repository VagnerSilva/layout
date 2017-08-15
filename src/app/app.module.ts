import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { GridComponent } from './pages/components/grid/grid.component';
import { ThemeComponent, ThemeModule } from './theme';
import { FlexComponent } from './pages/components/flex/flex.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    GridComponent,
    ThemeComponent,
    FlexComponent
  ],
  imports: [
    BrowserModule,
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
