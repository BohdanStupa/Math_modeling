import { Component, Input, OnInit } from '@angular/core';
import { DiffOperator } from '../interfaces/math-formules.interface';

@Component({
  selector: 'diff-operator',
  templateUrl: './diff-operator.component.html',
  styleUrls: ['./diff-operator.component.scss']
})
export class DiffOperatorComponent implements OnInit {

  @Input() diffOperator: DiffOperator

  equation: string = "";

  constructor() {}
    
  ngOnInit() {
    // console.log("DiffOperatorComponent", this.diffOperator);

    if (this.diffOperator.values) {
      let diffValues = "";
      let order = this.diffOperator.values.length == 1 ? this.diffOperator.order : 1;
      this.diffOperator.values.forEach((value: number) => {
          diffValues += "dx_{" + value + "}";
          if (order > 1) {
            diffValues += "^{" + order + "}"
          }
      });
      let d = order == 1 ? "d" : "d^" + this.diffOperator.order;
      this.equation = "\\frac{" + d +"}{"+ diffValues + "}";
    }
  }
  
}
