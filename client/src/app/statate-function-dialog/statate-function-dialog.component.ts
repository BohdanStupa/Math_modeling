import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'statate-function-dialog',
  templateUrl: './statate-function-dialog.component.html',
  styleUrls: ['./statate-function-dialog.component.scss']
})
export class StatateFunctionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<StatateFunctionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) {
      dialogRef.disableClose = true;
    }
    
  onNoClick(): void {
    this.dialogRef.close();
  }
 
  
}
