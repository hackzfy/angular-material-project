import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppSharedModule } from "../app-shared/app-shared.module";
import { ComponentsRoutingModule } from "./components-routing.module";
import { CustomThemeComponent } from "./custom-theme/custom-theme.component";

@NgModule({
  declarations: [CustomThemeComponent],
  imports: [AppSharedModule, ComponentsRoutingModule]
})
export class ComponentsModule {}
