import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { firstValueFrom } from 'rxjs';
import { Atendimentos } from 'src/app/core/models/atendimentos.model';
import { environmment } from 'src/environmment/environmment';

@Injectable({
  providedIn: 'root'
})
export class AtendimentosService {

atendimentoUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.atendimentoUrl = `${environmment.apiUrl}/empresas`
  }

  listarAtendimentos(): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.atendimentoUrl}`)
    ).then((response) => {
      const obj = response as any[];
      this.convertStringDate(obj);
      return obj;

    })
  }

  listarEmpresa(id: number): Promise<any> {
    return firstValueFrom(this.http.get(`${this.atendimentoUrl}/${id}`)).then((response) => response);
  }

  adicionarEmpresa(atendimento: Atendimentos): Promise<Atendimentos> {
    return firstValueFrom(this.http.post<Atendimentos>(this.atendimentoUrl, atendimento))
  }


  atualizarEmpresa(atendimento: Atendimentos): Promise<Atendimentos> {
    return firstValueFrom(this.http.put<Atendimentos>(`${this.atendimentoUrl}/${atendimento.id}`, atendimento)).then((response) => response as Atendimentos)
  }

  buscarPorId(id: Number): Promise<Atendimentos> {
    return firstValueFrom(this.http.get(`${this.atendimentoUrl}/${id}`)).then((response) => response as Atendimentos)
  }

  mudarStatus(id: number, status: boolean) {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    )
    return firstValueFrom(this.http.put(`${this.atendimentoUrl}/${id}/status`, status, {headers})).then(() => null)
  }

  exluirEmpresa(id: number): Promise<Atendimentos> {
    return firstValueFrom(this.http.delete(`${this.atendimentoUrl}/${id}`)).then((response) => response as Atendimentos)
  }



  convertStringDate(obj: any[]) {
    obj.forEach((element) => {
      element.datagravacao = moment(element.datagravacao, 'YYYY/MM/DD H:mm')
        .tz('America/Sao_Paulo')
        .toDate()
    })
  }

}
