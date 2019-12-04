import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfig } from '@base';

import { environment } from '../../environments/environment';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlySharedModule } from '@shared/formly-shared/formly-shared.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, FormlySharedModule, FormlyMaterialModule],
  providers: [{provide: AppConfig, useValue: environment}]
})
export class AppCoreModule {
}
