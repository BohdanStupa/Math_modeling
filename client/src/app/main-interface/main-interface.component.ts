import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  
  equation: string = '\\sum_{i=1}^nx_i';

  linDiffOp = '\L(\\delta_{s})';
  funcOfExternalPerturbations = 'u(s)';
  resEq = 'y(s) = ';

  constructor(
    private _apiService: ApiService
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


}
