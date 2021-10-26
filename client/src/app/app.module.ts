import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { KatexModule } from 'ng-katex';

import { AppComponent } from './app.component';
import { MainInterfaceComponent } from './main-interface/main-interface.component';
import { LinearDifferentialOperatorDialog } from './linear-differential-operator-dialog/linear-differential-operator-dialog.component';
import { DiffOperatorComponent } from './diff-operator/diff-operator.component';
import { MathFormula } from './math-formula/math-formula.component';

import { BASE_API_URL } from './services/api-url.service';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    MainInterfaceComponent,
    LinearDifferentialOperatorDialog,
    DiffOperatorComponent,
    MathFormula
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    KatexModule,

    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [
    ApiService,
    { provide: BASE_API_URL, useValue: "http://127.0.0.1:5000/" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }