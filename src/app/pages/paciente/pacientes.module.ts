import { NgModule } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeNGModule } from 'src/app/primeng.module';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { PacientesCadastroComponent } from './pacientes-cadastro/pacientes-cadastro.component';
import { PacientesRoutingModule } from './pacientes.routing';




@NgModule({
  declarations: [
    PacientesListComponent,
    PacientesCadastroComponent
  ],
  imports:[
    PrimeNGModule,
    PacientesRoutingModule
  ]
})

export class PacienteModule{}
