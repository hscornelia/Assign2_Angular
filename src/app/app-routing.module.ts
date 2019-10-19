import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfessorsComponent } from './professors/professors.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ProfessorDetailsComponent} from './professor-details/professor-details.component'

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'professors', component: ProfessorsComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:rating', component: ProfessorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }