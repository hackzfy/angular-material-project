import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '../material-shared/shared-material.module';
import { FormlyModule } from '@ngx-formly/core';
import { GridItemWrapperComponent } from './wrapper/grid-item-wrapper.component';
import { GridsterModule } from 'angular-gridster2';
import { config } from './formly.config';
import { FormlyInputComponent } from './component/formly-input/formly-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const components = [GridItemWrapperComponent, FormlyInputComponent];

@NgModule({
  imports: [SharedMaterialModule, FormsModule, ReactiveFormsModule, CommonModule, GridsterModule, FormlyModule.forRoot(config)],
  exports: [FormlyModule],
  declarations: [components],
  providers: []
})
export class FormlySharedModule {
}
