import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCoreModule } from './app-core/app-core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppCoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
