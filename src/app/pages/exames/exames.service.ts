import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { firstValueFrom } from 'rxjs';
import { Exames } from 'src/app/core/models/exames.model';
import { environmment } from 'src/environmment/environmment';

@Injectable({
  providedIn: 'root'
})
export class ExamesService {
  
  examesUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.examesUrl = `${environmment.apiUrl}/exames`
  }

  listarEmpresas(): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.examesUrl}`)
    ).then((response) => {
      const obj = response as any[];
      this.convertStringDate(obj);
      return obj;

    })
  }

  listarEmpresa(id: number): Promise<any> {
    return firstValueFrom(this.http.get(`${this.examesUrl}/${id}`)).then((response) => response);
  }

  adicionarEmpresa(exame: Exames): Promise<Exames> {
    return firstValueFrom(this.http.post<Exames>(this.examesUrl, exame))
  }


  atualizarEmpresa(exame: Exames): Promise<Exames> {
    return firstValueFrom(this.http.put<Exames>(`${this.examesUrl}/${exame.id}`, exame)).then((response) => response as Exames)
  }

  buscarPorId(id: Number): Promise<Exames> {
    return firstValueFrom(this.http.get(`${this.examesUrl}/${id}`)).then((response) => response as Exames)
  }

  mudarStatus(id: number, status: boolean) {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    )
    return firstValueFrom(this.http.put(`${this.examesUrl}/${id}/status`, status, {headers})).then(() => null)
  }

  exluirEmpresa(id: number): Promise<Exames> {
    return firstValueFrom(this.http.delete(`${this.examesUrl}/${id}`)).then((response) => response as Exames)
  }



  convertStringDate(obj: any[]) {
    obj.forEach((element) => {
      element.datagravacao = moment(element.datagravacao, 'YYYY/MM/DD H:mm')
        .tz('America/Sao_Paulo')
        .toDate()
    })
  }

}
