import { NgModule } from "@angular/core";
import { UsuariosCadastroComponent } from "./usuarios-cadastro/usuarios-cadastro.component";
import { PrimeNGModule } from "src/app/primeng.module";
import { SharedModule } from "src/app/shared/shared.module";



@NgModule({
declarations:[
    UsuariosCadastroComponent
],
imports:[
    PrimeNGModule,
    SharedModule
],
exports:[]


})


export class UsuarioModule {}