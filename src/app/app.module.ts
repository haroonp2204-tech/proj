import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ToysFactoryComponent } from './toys-factory/toys-factory.component';
import { LegalComponent } from './legal/legal.component';
import { DisconnectComponent } from './disconnect/disconnect.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    ToysFactoryComponent,
    LegalComponent,
    DisconnectComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
