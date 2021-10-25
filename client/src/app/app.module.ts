import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { KatexModule } from 'ng-katex';

import { AppComponent } from './app.component';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { BASE_API_URL } from './services/api-url.service';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MainInterfaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    KatexModule,

    MatSelectModule
  ],
  providers: [
    ApiService,
    { provide: BASE_API_URL, useValue: "http://127.0.0.1:5000/" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }