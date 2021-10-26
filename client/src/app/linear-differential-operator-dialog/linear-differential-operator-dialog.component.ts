import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'linear-differential-operator-dialog.component',
  templateUrl: './linear-differential-operator-dialog.component.html',
  styleUrls: ['./linear-differential-operator-dialog.component.scss']
})
export class LinearDifferentialOperatorDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LinearDifferentialOperatorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) {
      dialogRef.disableClose = true;
    }
    
  onNoClick(): void {
    this.dialogRef.close();
  }
 
  
}
