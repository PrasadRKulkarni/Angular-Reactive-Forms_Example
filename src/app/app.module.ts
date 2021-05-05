import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderExampleComponent } from './form-builder-example/form-builder-example.component';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderExampleComponent,
    FormGroupExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
