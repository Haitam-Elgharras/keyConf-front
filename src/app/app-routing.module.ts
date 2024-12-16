import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConferenceListComponent } from './conference-list/conference-list.component';
import { AddKeynoteComponent } from './add-keynote/add-keynote.component';
import { AddConferenceComponent } from './add-conference/add-conference.component';

const routes: Routes = [
  { path: '', redirectTo: '/conferences', pathMatch: 'full' }, // Default route
  { path: 'conferences', component: ConferenceListComponent },
  { path: 'add-keynote', component: AddKeynoteComponent },
  { path: 'add-conference', component: AddConferenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
