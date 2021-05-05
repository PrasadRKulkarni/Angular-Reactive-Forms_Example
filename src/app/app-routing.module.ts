import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormBuilderExampleComponent } from './form-builder-example/form-builder-example.component';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';

const routes: Routes = [
  { path: "FG", component: FormGroupExampleComponent },
  { path: "FB", component: FormBuilderExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
