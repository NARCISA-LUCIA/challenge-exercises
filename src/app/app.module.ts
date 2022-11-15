import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComputerComponent } from './computer/computer.component';
import { FormsModule } from '@angular/forms';
import { ConvertorValutarComponent } from './convertor-valutar/convertor-valutar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputerComponent,
    ConvertorValutarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
