import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { AgmCoreModule } from '@agm/core';
// import { google } from "google-maps";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey:'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
