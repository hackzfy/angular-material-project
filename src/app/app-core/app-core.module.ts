import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../../environments/environment';
import { AppConfig } from '@base';


@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [
    { provide: AppConfig, useValue: environment }
  ]
})
export class AppCoreModule {
}
