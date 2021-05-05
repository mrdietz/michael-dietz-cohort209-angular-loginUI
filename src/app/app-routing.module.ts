import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginBoxComponent },
  { path: 'results/:firstName/:lastName/:email/:birthYear', component: ResultsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
