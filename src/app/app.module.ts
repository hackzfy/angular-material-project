import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppCoreModule } from './app-core/app-core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [AppCoreModule, CommonModule, AppRoutingModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
