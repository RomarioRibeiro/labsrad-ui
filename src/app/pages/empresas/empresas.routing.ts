import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { EmpresasListaComponent } from "./empresas-lista/empresas-lista.component";
import { EmpresasCadastroComponent } from "./empresas-cadastro/empresas-cadastro.component";

const routes: Routes = [
    {
        path: '',
        component:EmpresasListaComponent
    },
    {
        path: 'novo',
        component:EmpresasCadastroComponent
    },
    {
        path: ':id',
        component:EmpresasCadastroComponent
    },
]


@NgModule({

})


export class EmpresaRouting {}