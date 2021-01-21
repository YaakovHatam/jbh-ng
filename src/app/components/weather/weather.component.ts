import { Component, OnInit } from '@angular/core';
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


        this.weatherService.get(inp.value).subscribe((weatherData: any) => {
            this.temp = weatherData.main.temp;
        });
    }

}
