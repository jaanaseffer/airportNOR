import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  api_key = '82b89d36-beb6-4cba-bec4-251c3a9181e0';
  base_url = 'https://airlabs.co/api/v9/';

  private countriesDBUrl = `${this.base_url}airports?country_code=NO&api_key=${this.api_key}`;
  private schedulesDBUrl = `${this.base_url}schedules`;

  constructor(private http: HttpClient) {}

  getAirports(): Observable<any> {
    return this.http.get(this.countriesDBUrl);
  }

  getAirportSchedule(icao: string): Observable<any> {
    return this.http.get(
      `${this.schedulesDBUrl}?dep_icao=${icao}&api_key=${this.api_key}`
    );
  }
}
