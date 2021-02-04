import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { WeatherModel } from '../models/weather.model';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    private WEATHER_CACHE = {};

    private baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
    private KEY = 'e06a2f3d21ca934dc5a82ff8ba8ec0d8';

    constructor(private httpClient: HttpClient) { }

    get(city: string): Observable<WeatherModel> {
        const sideEffect = (r) => {
            this.WEATHER_CACHE[city] = r;
            setTimeout(() => {
                delete this.WEATHER_CACHE[city];
            }, environment.chacheWeatherInSeconds * 1000);
        };

        if (this.WEATHER_CACHE[city]) {
            return of(this.WEATHER_CACHE[city]);
        } else {
            return this.httpClient.get(`${this.baseUrl}?units=metric&q=${city}&appid=${this.KEY}`, {
                reportProgress: true
            })
                .pipe(tap(sideEffect));
        }
    }
}
