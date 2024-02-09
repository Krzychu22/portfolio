import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  myApiKey: string = 'b0c3787829f36634c9f8a71855477252';

  constructor(private http: HttpClient) {
  }

  getWeather(location: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=pl&units=metric&appid=${this.myApiKey}`
    );
  }
}
