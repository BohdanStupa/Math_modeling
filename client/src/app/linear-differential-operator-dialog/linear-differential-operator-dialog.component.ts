import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'linear-differential-operator-dialog.component',
  templateUrl: './linear-differential-operator-dialog.component.html',
  styleUrls: ['./linear-differential-operator-dialog.component.scss']
})
export class LinearDifferentialOperatorDialog {

  constructor(
    public dialogRef: MatDialogRef<LinearDifferentialOperatorDialog>
    ) {
      dialogRef.disableClose = true;
    }
    
  onNoClick(): void {
    this.dialogRef.close();
  }
 
  
}
