import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'angular-weather-app';

  countryControl: FormControl;
  cityControl: FormControl;

  cities$: Observable<string>;

  // cities = ['London', 'Paris', 'Moscow', 'New York', 'Karachi', 'Sydney', 'Bratislava', 'Nitra', 'Banja Luka', 'Doboj']
  countries = [
    {
      name: 'Bosnia and Hercegovina',
      cities: ['Banja Luka', 'Doboj', 'Sarajevo', 'Mostar', 'Tuzla']
    },

    {
      name: 'Slovakia',
      cities: ['Bratislava', 'Nitra', 'Kosice', 'Banská Bystrica']
    },

    {
      name: 'Germany',
      cities: ['Munich', 'Regensburg', 'Berlin']
    },


  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
    this.cityControl = new FormControl('');
    this.cityControl.valueChanges.subscribe(
      (value) => {
        this.router.navigate([value])
      }
    )
    this.countryControl = new FormControl('')

    this.cities$ = this.countryControl.valueChanges.pipe(

      map(country => country.cities)
    )
  }

  ngOnDestroy(): void {}

}
