import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
import { firstValueFrom } from 'rxjs';
import { Convenio } from 'src/app/core/models/convenios.model';
import { environmment } from 'src/environmment/environmment';

@Injectable({
  providedIn: 'root'
})
export class ConveniosService {
  convenioUrl: string;


  constructor(
    private http: HttpClient
  ) {
    this.convenioUrl = `${environmment.apiUrl}/convenios`
  }


  listarConvenios(): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.convenioUrl}`)).then((response) => {
        const obj = response as any[];
        this.converterStringDate(obj);
        return obj;
      })

  }


  listarExames(id: number): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.convenioUrl}/conv/${id}`)).then((response) => response);

  }


  adicionar(convenio: Convenio): Promise<Convenio> {
    return firstValueFrom(
      this.http.post<Convenio>(this.convenioUrl, convenio));
  }


  atualizar(convenio: Convenio): Promise<Convenio> {
    return firstValueFrom(
      this.http.put<Convenio>(`${this.convenioUrl}/${convenio.id}`, convenio)
    ).then((response) => response as Convenio)
  }


  buscarPorId(id: number): Promise<Convenio> {
    return firstValueFrom(
      this.http.get(`${this.convenioUrl}/${id}`)
    ).then((response) => response as Convenio)
  }

  mudarStatus(id: number, status: boolean) {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    return firstValueFrom(
      this.http.put(`${this.convenioUrl}/${id}/status`, status, {headers})
    ).then (() => null);
  }


AlternarLista(valor: string): Promise<any> {
  return firstValueFrom(
    this.http.get(`${this.convenioUrl}${valor}`)
  ).then((response) => response as Convenio);

}
  converterStringDate(obj: any[]) {
    obj.forEach((element) => {
      element.datagravacao = moment(element.datagravacao, 'YYYY/MM/DD H:mm')
        .tz('America/Sao_Paulo')
        .toDate();
    })
  }
}

