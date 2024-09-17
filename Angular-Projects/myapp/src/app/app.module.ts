import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { DataComponent } from './data/data.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    DataComponent,
    ReactiveComponent,
    FormbuilderComponent,
    TestObservableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
