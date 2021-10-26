import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LinearDifferentialOperatorDialog } from '../linear-differential-operator-dialog/linear-differential-operator-dialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'main-interface',
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.scss']
})
export class MainInterfaceComponent implements OnInit {

  // public options
  public calcForm: FormGroup;

  public calculate: FormControl;
  
  equation: string = ' \\frac{d^2 u}{dx^2} ';

  linDiffOp = '\L(\\delta_{s})';
  funcOfExternalPerturbations = 'u(s)';
  resEq = 'y(s) = ';

  constructor(
    private _apiService: ApiService,
    public dialog: MatDialog
  ) { 
  }

  ngOnInit() {
    this._apiService.getInitialData().subscribe(data => {
        console.log(data);
    });
    // this.calculate = new 
    this.calcForm = new FormGroup({

      "userName": new FormControl("ss"),
      "userEmail": new FormControl("wdw"),
      "userPhone": new FormControl("aa")
  });

  }

  animal: string;
  name: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(LinearDifferentialOperatorDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openLinDiffOpModal(): void {
    console.log("openLinDiffOpModal");
    const dialogRef = this.dialog.open(LinearDifferentialOperatorDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
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


  testf(){

  }

}
