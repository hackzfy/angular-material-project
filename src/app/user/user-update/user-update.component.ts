import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasePage } from '@base';

import { FormFieldDialogComponent } from '../form-field-dialog/form-field-dialog.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent extends BasePage {
  todo = ['input', 'select', 'datepicker'];
  done = [];
  options = [];

  constructor(protected injector: Injector, protected moduleService: UserService, public dialog: MatDialog) {
    super(injector);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const type = event.item.element.nativeElement.dataset.type;

      this.dialog
        .open(FormFieldDialogComponent, {
          width: '250px',
          disableClose: true,
          data: {type, label: ''}
        })
        .afterClosed()
        .subscribe(result => {
          console.log('the dialog was closed');
          this.done.push({type, label: result});
        });
      // transferArrayItem(event.previousContainer.data,
      //                   event.container.data,
      //                   event.previousIndex,
      //                   event.currentIndex);
    }
  }
}
