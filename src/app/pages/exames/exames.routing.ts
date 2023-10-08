import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { ExamesListaComponent } from "./exames-lista/exames-lista.component";
import { ExamesCadastroComponent } from "./exames-cadastro/exames-cadastro.component";

const routees: Routes = [
    {
        path: '',
        component: ExamesListaComponent
    },
    {
        path: 'novo',
        component: ExamesCadastroComponent
    },
    {
        path: ':id',
        component: ExamesCadastroComponent
    },
]



@NgModule({

})


export class ExamesRouting {}