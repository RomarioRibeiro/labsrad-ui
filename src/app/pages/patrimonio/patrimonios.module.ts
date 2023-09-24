import { NgModule } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeNGModule } from 'src/app/primeng.module';
import { PatrimonioRouting } from './patrimonios.routing';
import { PatrimoniosListComponent } from './patrimonios-list/patrimonios-list.component';
import { PatrimoniosCadastroComponent } from './patrimonios-cadastro/patrimonios-cadastro.component';




@NgModule({
  declarations: [
    PatrimoniosListComponent,
    PatrimoniosCadastroComponent
  ],
  imports:[
    PrimeNGModule,
    PatrimonioRouting
  ]

})


export class PatrimonioModule{}
