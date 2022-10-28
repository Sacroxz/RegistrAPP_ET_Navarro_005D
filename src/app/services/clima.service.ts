import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) { }

  getCurrentWeather() { 
    const lat = -33.51039736877259;
    const lon = -70.7521776660279;
    const key = '8849c643c586170fd0f973f66d7f8988';
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+key+'&units=metric');
  }
}
