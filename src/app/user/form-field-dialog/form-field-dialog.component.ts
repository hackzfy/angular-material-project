import { Component, Inject, Injector } from '@angular/core';
import { BaseComponent } from '@base';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


export interface DialogData {
  type: string;
  label: string;
}

@Component({
  selector: 'app-form-field-dialog',
  templateUrl: './form-field-dialog.component.html',
  styleUrls: ['./form-field-dialog.component.scss']
})
export class FormFieldDialogComponent extends BaseComponent {

  constructor(protected injector: Injector, public dialogRef: MatDialogRef<FormFieldDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    super(injector);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
