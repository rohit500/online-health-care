import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'departments', component:DepartmentComponent},
  {path:'doctors', component:DoctorComponent},
  {path:'contact', component:ContactComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'about', component:AboutComponent},
  {path:'view',component:ViewComponent},
  {path:'form',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
