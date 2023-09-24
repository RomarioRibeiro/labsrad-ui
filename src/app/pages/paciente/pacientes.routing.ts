import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { PacientesCadastroComponent } from './pacientes-cadastro/pacientes-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: PacientesListComponent,
  },
  {
    path: 'novo',
    component: PacientesCadastroComponent,
  },
  {
    path: ':id',
    component: PacientesCadastroComponent,
  },
]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})

export class PacientesRoutingModule{}
