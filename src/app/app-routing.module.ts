import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarComponent, ContactsComponent, TeamComponent, TeamDetailsComponent } from './components';

const appRoutes: Routes = [
  { path: '', component: CarComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/:id', component: TeamDetailsComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
