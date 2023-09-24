import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'convenios',
    loadChildren: () => import('./pages/convenios/convenios.module').then( c => c.ConveniosModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pages/paciente/pacientes.module').then(p => p.PacienteModule)
  },
  {
    path: 'patrimonios',
    loadChildren: () => import('./pages/patrimonio/patrimonios.module').then(p => p.PatrimonioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
