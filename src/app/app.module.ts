import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarComponent } from './components';
import { ContactsComponent } from './components';
import { TeamComponent } from './components';
import { TeamDetailsComponent } from './components';
import { TeamService } from './services';
import { HoverDirective } from './directives';
import { SearchPipe } from './pipes';

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
    TeamDetailsComponent,
    HoverDirective,
    SearchPipe
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
