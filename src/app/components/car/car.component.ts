import { Component, OnInit } from '@angular/core';
import { Colors } from '../../interfaces';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  model: string;
  speed: number;
  colors: Colors;
  options: string[];
  isEdit: boolean;
  isVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.isEdit = false;
    this.isVisible = false;
  }

  addOption(newOption): void {
    if (this.options.includes(newOption)) {
      alert('You are already have this option!');
    } else {
      this.options.unshift(newOption);
    }
  }

  removeOption(option): void {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === option) {
        this.options.splice(i, 1);
      }
    }
  }

  showEditor(): void {
    this.isEdit = !this.isEdit;
  }

  showDetails(): void {
    this.isVisible = true;
  }

  carSelect(carName): void {
    if (carName === 'bmw') {
      this.name = 'BMW';
      this.model = 'M5';
      this.speed = 285;
      this.colors = {
        body: 'Yellow',
        salon: 'White',
        wheels: 'Silver',
      };
      this.options = ['Autopilot', 'Autoparking'];
    } else if (carName === 'audi') {
      this.name = 'Audi';
      this.model = 'A8';
      this.speed = 256;
      this.colors = {
        body: 'White',
        salon: 'Black',
        wheels: 'Red',
      };
      this.options = ['ABS', 'Autoparking'];
    } else {
      this.name = 'Mercedes';
      this.model = 'C180';
      this.speed = 272;
      this.colors = {
        body: 'Black',
        salon: 'Brown',
        wheels: 'Grey',
      };
      this.options = ['ABS', 'Autopilot'];
    }
  }
}
