import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LomakeComponent } from './lomake/lomake.component';
import { TuloksetComponent } from './tulokset/tulokset.component';

import { FormsModule } from '@angular/forms';
import {DataService} from "./services/data.service";


@NgModule({
  declarations: [
    AppComponent,
    LomakeComponent,
    TuloksetComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
