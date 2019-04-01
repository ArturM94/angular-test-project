import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { TeamComponent } from './components/team/team.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { TeamService } from './services/team.service';

const appRoutes: Routes = [
  {path: '', component: CarComponent},
  {path: 'team', component: TeamComponent},
  {path: 'team/:id', component: TeamDetailsComponent},
  {path: 'contacts', component: ContactsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactsComponent,
    TeamComponent,
    TeamDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
