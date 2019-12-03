import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfig } from '@base';

import { environment } from '../../environments/environment';



@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [
    { provide: AppConfig, useValue: environment },
  ]
})
export class AppCoreModule {
}
