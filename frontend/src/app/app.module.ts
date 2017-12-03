import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import {TestserviceService} from "./testservice.service";
import { HomeComponent } from './home/home.component';

import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule ,
    UserModule,
  ],
  providers: [TestserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
