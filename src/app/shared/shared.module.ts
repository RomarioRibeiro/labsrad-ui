import { NgModule } from "@angular/core";
import { MessageComponent } from "./message.component";
import { CommonModule } from "@angular/common";
import { UppercaseDirective } from "../uppercase.directive";





@NgModule({
declarations:[
  MessageComponent,
  UppercaseDirective
],
imports:[

  CommonModule
],
exports:[
  MessageComponent,
  UppercaseDirective
]
})

export class SharedModule {}
