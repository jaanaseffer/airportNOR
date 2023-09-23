import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { AirportListComponent } from './airport-list/airport-list.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AppComponent, AirportListComponent, MapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
