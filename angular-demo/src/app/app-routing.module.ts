import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'rective-form', component: ReactiveFormComponent },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
