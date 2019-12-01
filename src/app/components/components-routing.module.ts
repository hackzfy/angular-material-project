import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomThemeComponent } from './custom-theme/custom-theme.component';

const routes: Routes = [
  {
    path: 'custom-theme',
    component: CustomThemeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
