import { Injectable } from '@angular/core';
import { FiltroAtendimento } from '../../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class FiltroAtendimentoservice {

  constructor() { }

  async filtro(value: any, oldFiltro: FiltroAtendimento): Promise<FiltroAtendimento> {
    let filtro = new FiltroAtendimento()

    filtro = {... oldFiltro}

    filtro.pagina = 0
    filtro.itensPorPagina = 10

     if(value.field === 'id') {
      filtro.id = value.qty
     }

     if(value.field === 'nome') {
      filtro.nome = value.qty
     }

     if(value.field === 'idficha') {
      filtro.idficha = value.qty
     }

     if(value.field === 'sexo') {
      filtro.sexo = value.qty
     }

     if(value.field === 'status') {
      filtro.status = value.qty
     }

     if(value.field === 'emailusuario') {
      filtro.emailusuario = value.qty
     }
     if(value.field === 'formapagamento') {
      filtro.formapagamento = value.qty
     }
  return filtro

  }
}
