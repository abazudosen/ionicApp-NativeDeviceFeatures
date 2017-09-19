import { Geolocation } from '@ionic-native/Geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule  } from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPlacePage } from "../pages/add-place/add-place";
import { PlacePage } from "../pages/place/place";
import { SetLocationPage } from "../pages/set-location/set-location";
import { AgmCoreModule } from "angular2-google-maps/core";
import { PlacesService } from "../services/places";
import { File } from '@ionic-native/file';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPlacePage,
    PlacePage,
    SetLocationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC82HRZUXcd-dHbb7LQ9k0WXT9_FfsD7Bk'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPlacePage,
    PlacePage,
    SetLocationPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesService,
    File,
    Camera,
    StatusBar,
    SplashScreen,
    Geolocation
  ]
})
export class AppModule {
}
