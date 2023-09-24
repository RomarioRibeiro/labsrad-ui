import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConveniosListComponent } from './convenios-list/convenios-list.component';
import { ConvenioCadastroComponent } from './convenio-cadastro/convenio-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: ConveniosListComponent
  },
  {
    path: 'novo',
    component: ConvenioCadastroComponent
  },
  {
    path: ':id',
    component: ConvenioCadastroComponent
  },
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]

})

export class ConverniosRoutingModule {}
