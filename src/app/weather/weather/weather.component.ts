import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  weatherSearchForm: FormGroup = new FormGroup({
    location: new FormControl('')
  });
  weatherData: any;

  constructor(
    private apiService: ApiService,
  ) {
  }

  ngOnInit(): void {
    this.sendToAPIXU('Warszawa');
  }

  filterEnter(key: string) {
    if (key === 'Enter') {
      this.sendToAPIXU();
    }
  }

  sendToAPIXU(location?: string) {
    this.apiService.getWeather(location ?? this.weatherSearchForm.controls['location'].value).subscribe(data => {
      this.weatherData = data;
    });
  }

}
