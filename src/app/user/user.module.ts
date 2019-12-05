import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { DynamicItemComponent } from './dynamic-item/dynamic-item.component';
import { FormFieldDialogComponent } from './form-field-dialog/form-field-dialog.component';

@NgModule({
  declarations: [
    FormFieldDialogComponent,
    UserListComponent,
    UserDetailsComponent,
    DynamicItemComponent,
    UserUpdateComponent,
    UserCreateComponent
  ],
  entryComponents: [FormFieldDialogComponent],
  imports: [AppSharedModule, UserRoutingModule]
})
export class UserModule {
}
