import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { firstValueFrom } from 'rxjs';
import { Patrimonio } from 'src/app/core/models/patrimonio.model';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {

  patrimonioUrl: string

  constructor(
    private http: HttpClient,

  ) {
      // this.convenioUrl = `${environmment.apiUrl}/patrimonios`
    this.patrimonioUrl = 'https://65340be7e1b6f4c5904686c8.mockapi.io/patrimonios'
  }

  listaPatrimonios(): Promise<any> {
    return firstValueFrom(this.http.get(`${this.patrimonioUrl}`)).then((response) => {
      const obj = response as any[]
      return obj
    })
  }

  listarEmpresa(id: number): Promise<any> {
    return firstValueFrom(this.http.get(`${this.patrimonioUrl}/emp/${id}`)).then((response) => response )
  }

  adicionar(patrimonio: Patrimonio): Promise<Patrimonio> {
    return firstValueFrom(this.http.post<Patrimonio>(this.patrimonioUrl, patrimonio))
  }

  atualizar(patrimonio: Patrimonio): Promise<Patrimonio> {
    return firstValueFrom(this.http.put<Patrimonio>(`${this.patrimonioUrl}/${patrimonio.id}`, patrimonio))
    .then((response) => response as Patrimonio)
  }

  buscarPorId(id: number): Promise<Patrimonio> {
    return firstValueFrom(this.http.get(`${this.patrimonioUrl}/${id}`))
    .then((response) => response as Patrimonio)
  }

  mudarStatus(id: number, status: boolean) {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    )
    return firstValueFrom(this.http.put(`${this.patrimonioUrl}/${id}/status`, status, {headers}))
    .then(() => null)
  }

  AlternarLista(valor: string): Promise<any> {
    return firstValueFrom(this.http.get(`${this.patrimonioUrl}${valor}`))
    .then((response) => response as Patrimonio)
  }

  converterStringDate(obj: any[]) {
    obj.forEach((element) => {
      element.datagravacao = moment(element.datagravacao, 'YYYY/MM/DD H:mm')
        .tz('America/Sao_Paulo')
        .toDate();
    })
  }
}
