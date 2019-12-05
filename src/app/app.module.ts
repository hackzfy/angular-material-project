import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppCoreModule } from './app-core/app-core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AppCoreModule, CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
