import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarComponent, ContactsComponent, TeamComponent, TeamDetailsComponent } from './components';

const appRoutes: Routes = [
  { path: '', component: CarComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/:id', component: TeamDetailsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', component: CarComponent }  // Can be replaced by 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
