import { AfterViewInit, Component, ElementRef, Inject, Injector, ViewChild } from '@angular/core';
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
export class FormFieldDialogComponent extends BaseComponent implements AfterViewInit {

  @ViewChild('inputElement', {static: true}) inputElement: ElementRef<HTMLInputElement>;
  constructor(protected injector: Injector, public dialogRef: MatDialogRef<FormFieldDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    super(injector);
  }


  ngAfterViewInit(): void {
    setTimeout(() => this.inputElement.nativeElement.focus());
  }

}
