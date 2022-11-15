import { Calculator } from './../calculator/calculator';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css'],
})
export class ComputerComponent implements OnInit {
  calculator: Calculator = new Calculator();
  firstElement: number;
  secondElement: number;
  sum: number;
  substraction: number;
  multiplication: number;
  division: number;

  constructor() {}

  ngOnInit(): void {}

  totalResult(): void {
    this.sum = this.calculator.calculatingTheSum(
      this.firstElement,
      this.secondElement
    );
    console.log('sum: ' + this.sum);

    this.substraction = this.calculator.calculatingTheSubstraction(
      this.firstElement,
      this.secondElement
    );
    console.log('substraction: ' + this.substraction);

    this.multiplication = this.calculator.calculatingTheMultiplication(
      this.firstElement,
      this.secondElement
    );
    console.log('multiplication: ' + this.multiplication);

    this.division = this.calculator.calculatingTheDivision(
      this.firstElement,
      this.secondElement
    );
    console.log('division: ' + this.division);
  }
}
