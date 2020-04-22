import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { RequestformComponent } from './requestform/requestform.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'forms', component: FormsComponent },
  { path: 'request', component: RequestformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
