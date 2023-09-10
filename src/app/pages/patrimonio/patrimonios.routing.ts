import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatrimoniosListComponent } from './patrimonios-list/patrimonios-list.component';
import { PatrimoniosCadastroComponent } from './patrimonios-cadastro/patrimonios-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: PatrimoniosListComponent
  },
  {
    path: 'novo',
    component: PatrimoniosCadastroComponent
  },
  {
    path: ':id',
    component: PatrimoniosCadastroComponent
  },
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class PatrimonioRouting{}
