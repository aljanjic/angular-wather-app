import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherAppService {

  constructor(private http: HttpClient) { }


  getWeatherForCity(city: string): Observable<WeatherResponse> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    return this.http.get<WeatherResponse>(path).pipe(
      map((data: WeatherResponse) => ({
        ...data,
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      })),
    );
  }

}


interface WeatherResponse {
  weather: {icon: string}[];
  // Include any other properties you may be using from the data
}