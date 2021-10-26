import { Component, Input, OnInit } from '@angular/core';
import { DiffOperator, MathLiteral, XValue } from '../interfaces/math-formules.interface';

@Component({
  selector: 'math-literal',
  templateUrl: './math-literal.component.html',
  styleUrls: ['./math-literal.component.scss']
})
export class MathLiteralComponent implements OnInit {

  @Input() mathLiteral: MathLiteral;

  equation: string = "";

  constructor() {}
    
  ngOnInit() {
    // console.log("DiffOperatorComponent", this.diffOperator);
    if (this.mathLiteral.type == "diff_operator") {
      let diffOperator = (this.mathLiteral.literal as DiffOperator);
      if (diffOperator.values) {
        let diffValues = "";
        let order = diffOperator.values.length == 1 ? diffOperator.order : 1;
        diffOperator.values.forEach((value: number) => {
            diffValues += "dx_{" + value + "}";
            if (order > 1) {
              diffValues += "^{" + order + "}"
            }
        });
        let d = order == 1 ? "d" : "d^" + diffOperator.order;
        this.equation = "\\frac{" + d +"}{"+ diffValues + "}";
      }
    } else if (this.mathLiteral.type == "x_value") {
      let XValue = (this.mathLiteral.literal as XValue);
      let power = XValue.power > 1 ? XValue.power : "";
      this.equation = "x_{" + XValue.index + "}^{" + power + "}";
    }
  }
  
}
