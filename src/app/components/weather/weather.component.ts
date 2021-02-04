import { Component, OnInit } from '@angular/core';
import { WeatherModel } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    temp: number;
    constructor(private weatherService: WeatherService) { }

    ngOnInit(): void {
    }

    check(inp: HTMLInputElement): void {
        this.weatherService.get(inp.value).subscribe((weatherData: WeatherModel) => {
            this.temp = weatherData.main.temp;
        });
    }
}
