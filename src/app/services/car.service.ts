import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import   'rxjs/add/operator/map';
import { Subject } from  'rxjs/Subject';

@Injectable()
export class CarService {

	public newCarSubject = new Subject<any>()

  constructor(private http: Http) { }


  getAllCars(){ 
  	return this.http.get('src/data/cars.json').map(res => res.json())
  }

  addCar(data) {
	data.image = "generic-car";
	this.newCarSubject.next(data);
 }
}

 