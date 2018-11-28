import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormOneComponent} from './components/form-one/form-one.component';
import {ExperimentComponent} from './components/experiment/experiment.component';
import {ReactiveFormComponent} from './components/reactive-form/reactive-form.component';

const routes: Routes = [
  {path: 'form-one', component: FormOneComponent, pathMatch: 'full'},
  {path: 'reactive', component: ReactiveFormComponent, pathMatch: 'full'},
  {path: 'exp', component: ExperimentComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
