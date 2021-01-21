import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    private baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
    private KEY = 'e06a2f3d21ca934dc5a82ff8ba8ec0d8';

    constructor(private httpClient: HttpClient) { }

    get(city: string): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}?units=metric&q=${city}&appid=${this.KEY}`);
    }
}
