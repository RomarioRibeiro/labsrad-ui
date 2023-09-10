import { NgModule } from '@angular/core';
import { PrimeNGModule } from 'src/app/primeng.module';
import { ConveniosListComponent } from './convenios-list/convenios-list.component';
import { ConvenioCadastroComponent } from './convenio-cadastro/convenio-cadastro.component';
import { ConverniosRoutingModule } from './convenios.routing';
import { PacientesListComponent } from '../paciente/pacientes-list/pacientes-list.component';
import { PacientesCadastroComponent } from '../paciente/pacientes-cadastro/pacientes-cadastro.component';

@NgModule({
  declarations: [
    ConveniosListComponent,
    ConvenioCadastroComponent,

  ],
  imports: [
    PrimeNGModule,
    ConverniosRoutingModule
  ]

})

export class ConveniosModule {}
