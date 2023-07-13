import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherAppService {

  constructor(private http: HttpClient) { }

  getWeatherForCity(city: string): Observable <any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
     return this.http.get(path).pipe(
      map(rawData => ({
        ...rawData,
        // image: `https://openweathermap.org/img/wn/10d@2x.png`
        // image: `https://openweathermap.org/img/wn/${rawData.weather[0].icon}@2x.png`
      }))
    );
  }
}

// https://openweathermap.org/img/wn/10d@2x.png