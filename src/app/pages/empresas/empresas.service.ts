import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmment } from 'src/environmment/environmment';
import { firstValueFrom } from 'rxjs';
import * as moment from 'moment';
import { Empresa } from 'src/app/core/models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  empresaUrl: string;

  constructor(
    private http: HttpClient
  ) {
   /*  this.empresaUrl = `${environmment.apiUrl}/empresas` */
   this.empresaUrl = 'https://65340be7e1b6f4c5904686c8.mockapi.io/empresas'
  }

  listarEmpresas(): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.empresaUrl}`)
    ).then((response) => {
      const obj = response as any[];
      this.convertStringDate(obj);
      return obj;

    })
  }

  listarEmpresa(id: number): Promise<any> {
    return firstValueFrom(this.http.get(`${this.empresaUrl}/${id}`)).then((response) => response);
  }

  adicionarEmpresa(empresa: Empresa): Promise<Empresa> {
    return firstValueFrom(this.http.post<Empresa>(this.empresaUrl, empresa))
  }


  atualizarEmpresa(empresa: Empresa): Promise<Empresa> {
    return firstValueFrom(this.http.put<Empresa>(`${this.empresaUrl}/${empresa.id}`, empresa)).then((response) => response as Empresa)
  }

  buscarPorId(id: Number): Promise<Empresa> {
    return firstValueFrom(this.http.get(`${this.empresaUrl}/${id}`)).then((response) => response as Empresa)
  }

  mudarStatus(id: number, status: boolean) {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    )
    return firstValueFrom(this.http.put(`${this.empresaUrl}/${id}/status`, status, {headers})).then(() => null)
  }

  exluirEmpresa(id: number): Promise<Empresa> {
    return firstValueFrom(this.http.delete(`${this.empresaUrl}/${id}`)).then((response) => response as Empresa)
  }



  convertStringDate(obj: any[]) {
    obj.forEach((element) => {
      element.datagravacao = moment(element.datagravacao, 'YYYY/MM/DD H:mm')
        .tz('America/Sao_Paulo')
        .toDate()
    })
  }

}
