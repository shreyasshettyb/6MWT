import { Component, signal } from '@angular/core';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap/nav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgbNav, NgbModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('walk_calc');
  age: number = 0;
  weight: number = 0;
  height: number = 0;
  gender: string = "";
  calDist: number = 0;
  actDist: number = 0;
  deviation: number = 0;

  calculate() {
    if (this.gender === "male") {
      this.calDist = 561.022 - (2.507 * this.age) + (1.505 * this.weight) - (0.055 * this.height)
    }
    else {
      this.calDist = 30.325 * (0.0809 * this.age) - (2.074 * this.weight) + (4.235 * this.height)
    }

    if (this.actDist != 0) {
      this.deviation = (this.actDist / this.calDist) * 100;
    }

    this.calDist = +this.calDist.toFixed(3)
    this.deviation = +this.deviation.toFixed(3)
  }
}

