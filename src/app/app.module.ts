import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastNotificationModule } from 'patternfly-ng/notification';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule, InfoStatusCardModule } from 'patternfly-ng/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ToastNotificationModule,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InfoStatusCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
