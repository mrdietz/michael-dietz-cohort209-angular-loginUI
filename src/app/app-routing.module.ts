import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: 'login', component: LoginBoxComponent },
  { path: 'results', component: ResultsComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
