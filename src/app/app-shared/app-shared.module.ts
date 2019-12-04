import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridsterModule } from 'angular-gridster2';
import { FormlySharedModule } from '@shared/formly-shared/formly-shared.module';
import { SharedMaterialModule } from '@shared/material-shared/shared-material.module';

@NgModule({
  exports: [CommonModule, FormsModule, ReactiveFormsModule, FormlySharedModule, SharedMaterialModule, GridsterModule]
})
export class AppSharedModule {}
