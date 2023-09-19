import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportListComponent } from './airport-list/airport-list.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'airports', component: AirportListComponent },
  { path: 'map', component:  MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
