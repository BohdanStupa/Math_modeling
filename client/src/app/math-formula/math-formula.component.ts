import { Component, Input, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { DiffOperator, EqPart } from '../interfaces/math-formules.interface';

@Component({
  selector: 'math-formula',
  templateUrl: './math-formula.component.html',
  styleUrls: ['./math-formula.component.scss']
})
export class MathFormula implements OnInit {

  @Input() nDim!: number;
  @Input() nOrder: number = 2;

  partitionsOfEquetion: Array<EqPart> = [];
  operators: Array<DiffOperator> = [];

  constructor() {}  

  ngOnInit() {
    // console.log("MathFormula", this.nDim);
    let usedOps = new Set();

    for (let i = 1; i <= this.nDim; ++i) {
        for (let j = 1; j <= this.nOrder; ++j){
            this.operators.push({order: j, values: [i]} as DiffOperator);            
            if (j == 2) {
                for (let k = 1; k <= this.nDim; ++k) {
                    let key1 = "" + k + i, key2 = "" + i + k;
                    if (i != k && !usedOps.has(key1) && !usedOps.has(key2)) {
                        usedOps.add(key1);
                        usedOps.add(key2);
                        this.operators.push({ order: j, values:[i, k] } as DiffOperator);                                   
                    }
                }
            }
        }
    }
  }


  addPart() {
      this.partitionsOfEquetion.push({
        sign: {
            editing: true,
            val: true
        },
        coef: {
            editing: true,
            val: 1
        },
        op: {
            val: null,
            editing: true
        }
      } as EqPart);
  }

  onEditOp(idx: number) {
    //   console.log("EDIT OP", idx);
      this.partitionsOfEquetion[idx].op.editing = true;
  }

  onEditSign(idx: number) {
    // console.log("EDIT SIGN", idx);
    this.partitionsOfEquetion[idx].sign.editing = true;
  }

  onEditCoef(idx: number) {
    // console.log("EDIT COEF", idx);
    this.partitionsOfEquetion[idx].coef.editing = true;
  }

  selectSign($event: MatSelectChange, idx: number) {
    // console.log("select sign",$event, idx);
    this.partitionsOfEquetion[idx].sign.val = $event.value == '+';
    this.partitionsOfEquetion[idx].sign.editing = false;
  }

  selectOp($event: MatSelectChange, idx: number) {
    //   console.log("select op",$event, idx, $event.value);
      this.partitionsOfEquetion[idx].op.val = {
          order: null,
          values: null
      };
      this.partitionsOfEquetion[idx].op.val.order = $event.value.order;
      this.partitionsOfEquetion[idx].op.val.values = $event.value.values;
      this.partitionsOfEquetion[idx].op.editing = false;
  }
  

  onChangeCoef($event: FocusEvent, idx: number) {
    //   console.log("CHANGE COEF", $event, idx);
      let coef = ($event.target as HTMLInputElement).value as any;
      if (!Number.isNaN(Number.parseFloat(coef))) {
        this.partitionsOfEquetion[idx].coef.editing = false;
        this.partitionsOfEquetion[idx].coef.val = coef;
      }
  }

}
