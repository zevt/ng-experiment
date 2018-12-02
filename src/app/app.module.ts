import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormOneComponent } from './components/form-one/form-one.component';
import { ExperimentComponent } from './components/experiment/experiment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import {MaterialDesignModule} from './common/modules/material-design/material-design.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormOneComponent,
    ExperimentComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialDesignModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
