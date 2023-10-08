import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { UsuariosListarComponent } from "./usuarios-listar/usuarios-listar.component";
import { UsuariosCadastroComponent } from "./usuarios-cadastro/usuarios-cadastro.component";
import { UsuariosEditarComponent } from "./usuarios-editar/usuarios-editar.component";
import { AlterarSenhaComponent } from "./alterar-senha/alterar-senha.component";

const routes: Routes = [
    {
        path: '',
        component: UsuariosListarComponent
    },
    {
        path: 'novo',
        component: UsuariosCadastroComponent
    },
    {
        path: ':id',
        component: UsuariosEditarComponent
    },
    {
        path: ':id/senha',
        component: AlterarSenhaComponent
    },
]



@NgModule({

})

export class UsuarioRouting {}