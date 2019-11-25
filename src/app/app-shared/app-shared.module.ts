import { NgModule } from "@angular/core";
import { SharedMaterialModule } from "./shared-material.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ]
})
export class AppSharedModule {}
