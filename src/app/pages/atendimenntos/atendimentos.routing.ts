import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { AtendimentoListaComponent } from "./atendimento-lista/atendimento-lista.component";
import { AtendimentoCcadastroComponent } from "./atendimento-cadastro/atendimento-ccadastro.component";


const routes: Routes = [
    {
        path: '',
        component: AtendimentoListaComponent
    },
    {
        path: 'novo',
        component: AtendimentoCcadastroComponent
    },
    {
        path: ':id',
        component: AtendimentoCcadastroComponent
    },

]

@NgModule({

})


export class AtendimentoRouting {}