import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConferenceListComponent } from './conference-list/conference-list.component';
import { AddKeynoteComponent } from './add-keynote/add-keynote.component';
import { AddConferenceComponent } from './add-conference/add-conference.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConferenceListComponent,
    AddKeynoteComponent,
    AddConferenceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
