import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LinearDifferentialOperatorDialogComponent } from '../linear-differential-operator-dialog/linear-differential-operator-dialog.component';
import { ApiService } from '../services/api.service';
import { StatateFunctionDialogComponent } from '../statate-function-dialog/statate-function-dialog.component';

@Component({
  selector: 'main-interface',
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.scss']
})
export class MainInterfaceComponent implements OnInit {

  public calcForm: FormGroup;
  public calculate: FormControl;
  
  linDiffOp = '\L(\\delta_{s})';
  funcOfExternalPerturbations = 'u(s)';
  greensFunction = 'G'
  resEq = 'y(s) = ';

  nDim = 2;


  constructor(
    private _apiService: ApiService,
    public dialog: MatDialog
  ) { 
  }

  ngOnInit() {
    this._apiService.getInitialData().subscribe(data => {
        console.log(data);
    });
    this.calcForm = new FormGroup({

      "userName": new FormControl("ss"),
      "userEmail": new FormControl("wdw"),
      "userPhone": new FormControl("aa")
  });

  }

  openLinDiffOpDialog(): void {
    console.log("openLinDiffOpDialog");
    const dialogRef = this.dialog.open(LinearDifferentialOperatorDialogComponent, {
      width: '60%',
      data: { nDim: this.nDim, linDiffOp: this.linDiffOp, greensFunction: this.greensFunction }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  openStateFunctionDialog(): void {
    console.log("openStateFunctionDialog");
    const dialogRef = this.dialog.open(StatateFunctionDialogComponent, {
      width: '60%',
      data: { nDim: this.nDim, funcOfExternalPerturbations: this.funcOfExternalPerturbations }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  onSubmit() {
    let data = this.calcForm.value;
    console.log("POST CALCULATE", data);
    data = {
      parara: "paaraa",
      haha: "ghaa",
      ...data
    }
    this._apiService.postCalculate(data).subscribe();
  }


  onChangeNDim($event) {
    let newNDim = $event.target.value;
    if (!Number.isNaN(Number.parseInt(newNDim))) {
      this.nDim = newNDim;
    }
  }
}
