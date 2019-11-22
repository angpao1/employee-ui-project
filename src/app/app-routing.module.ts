import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPageComponent } from './components/add-page/add-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EmployeePageComponent } from './components/employee-page/employee-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'add', component: AddPageComponent },
  { path: 'employees/:id', component: EmployeePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
