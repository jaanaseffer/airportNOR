import { Component, OnInit } from '@angular/core';
import { AirportService } from '../app.service';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css'],
})
export class AirportListComponent implements OnInit {
  countries: any[] | undefined;
  departures!: any[];
  firstFive!: any[];
  now!: any;

  selectedCountry!: string;

  constructor(private airportService: AirportService) {}

  ngOnInit() {
    this.airportService.getAirports().subscribe((data) => {
      this.countries = data.response;
    });
  }

  getSchedule() {
    this.airportService
      .getAirportSchedule(this.selectedCountry)
      .subscribe((data) => {
        this.departures = data.response;
        this.firstFive = this.departures.slice(0, 5);
      });
  }
}
