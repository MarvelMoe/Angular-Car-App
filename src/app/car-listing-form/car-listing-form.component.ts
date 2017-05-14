import { Component, OnInit } from '@angular/core';
import { CarService } from './../services/car.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-car-listing-form',
  templateUrl: './car-listing-form.component.html',
  styleUrls: ['./car-listing-form.component.css']
})
export class CarListingFormComponent implements OnInit {

  constructor(public carService: CarService ) { }

  ngOnInit() {
  }

  onSubmit(data) {
  	this.carService.addCar(data)
  }

}
