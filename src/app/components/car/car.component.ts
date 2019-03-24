import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  model: string;
  speed: number;
  color: {
    body: string,
    salon: string,
    wheels: string,
  };

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.model = 'A8';
    this.speed = 255;
    this.color = {
      body: 'White',
      salon: 'Black',
      wheels: 'Silver',
    };
  }

}
