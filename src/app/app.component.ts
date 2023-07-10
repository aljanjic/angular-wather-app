import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {


  title = 'angular-weather-app';
  cityControl: FormControl;

  cities = ['London', 'Paris', 'Moscow', 'New York', 'Karachi', 'Sydney']


  constructor(
    private route: ActivatedRoute,
    private router: Router){
    this.cityControl = new FormControl('');

  }

  ngOnInit(): void {
    this.cityControl.valueChanges.subscribe(
      (value) => {
        this.router.navigate([value])
      }
    )

  }

  ngOnDestroy(): void {}






}
