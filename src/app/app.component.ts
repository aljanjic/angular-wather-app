import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {


  title = 'angular-weather-app';
  cityControl: FormControl;

  cities = ['London', 'Paris', 'Moscow', 'New York', 'Karachi', 'Sydney']


  constructor(private router: Router){
    this.cityControl = new FormControl('');
    this.cityControl.valueChanges.subscribe(
      (value) => {
        this.router.navigate([value])
      }
    )
  }

  ngOnInit(): void {


  }

  ngOnDestroy(): void {}






}
