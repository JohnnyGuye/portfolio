import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }         from "@angular/common/http";
import { TranslateModule } from '@ngx-translate/core';

import { RouterModule, Routes, Router, NavigationEnd } 		from "@angular/router";
import { routes }   from "./routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DeveloperComponent } from './pages/developer/developer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AutoWriterComponent } from './components/auto-writer/auto-writer.component';
import { TimelineComponent } from './components/timeline/timeline.component';

import { RequestService }   from "./services/request/request.service";
import { MusicianComponent } from './pages/musician/musician.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeveloperComponent,
    ContactComponent,
    AutoWriterComponent,
    TimelineComponent,
    MusicianComponent
  ],
  imports: [
    BrowserModule,
		RouterModule.forRoot(routes),
    HttpClientModule,
    TranslateModule.forRoot()
  ],
  providers: [
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
