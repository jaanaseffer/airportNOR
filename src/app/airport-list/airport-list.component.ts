import { Component, OnInit } from '@angular/core';
import { AirportService } from '../app.service';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css'],
})
export class AirportListComponent implements OnInit {
  countries: any[] | undefined;

  selectedCountry: string | undefined;

  constructor(private airportService: AirportService) {}

  ngOnInit() {
    this.airportService.getAirports().subscribe((data) => {
      this.countries = data.response;
      console.log(this.countries);
    });
  }
}
