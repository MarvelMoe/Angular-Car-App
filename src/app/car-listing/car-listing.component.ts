import { Component, OnInit } from '@angular/core';
import { Http}  from '@angular/http';
import { CarService } from './../services/car.service';
import { Car } from './../car';



@Component({
  selector: 'app-car-listing',
  templateUrl: './car-listing.component.html',
  styleUrls: ['./car-listing.component.css']
})

export class CarListingComponent implements OnInit {
cars: Array<any> = [];


  constructor(
  	private http: Http, 
  	private CarService: CarService
  	) { }

  ngOnInit() {

  	this.CarService.getAllCars()
  	.subscribe(
  			data => this.cars = data
  		);

    this.CarService.newCarSubject.subscribe(
          data => this.cars.push(data)
          )
 
  }

}
