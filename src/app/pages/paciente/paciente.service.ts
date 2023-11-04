import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { environmment } from '../../../environmments/environmment-hml';
import { firstValueFrom } from 'rxjs';
import * as moment from 'moment';
import { FiltrosPacientes } from 'src/app/core/models/filter.model';
import { Paciente } from 'src/app/core/models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  pacienteUrl: string

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.pacienteUrl = `${environmment.apiUrl}/pacientes`
  }



  listar(): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.pacienteUrl}`))
      .then((response) => {
        const obj = response as any[]
        this.converterStringParaDataFiltro(obj)
        return obj
      })
  }

listarComFiltro(filtro: FiltrosPacientes): Promise<any> {
  const param: {[k: string]: any} = this.validarParamentros(filtro)
  return firstValueFrom(
    this.http.get(`${this.pacienteUrl}/filtro`, {params: param }))
    .then((response: any) => {
      this.converterStringParaDataFiltro(response.content)
    })
}


validarParamentros(filtro: FiltrosPacientes) {
  const obj : {[k: string]: any} = {}

  obj.page = filtro.pagina
  obj.size = filtro.itensPorPagina

  if(filtro.id) {
    obj.id = filtro.id
  }
  if(filtro.nome) {
    obj.nome = filtro.nome
  }
  if(filtro.cpf) {
    obj.cpf = filtro.cpf
  }
  if(filtro.sexo) {
    obj.sexo = filtro.sexo
  }
  if(filtro.emailusuario) {
    obj.emailusuario = filtro.emailusuario
  }
  
  if(filtro.datagravacaoate) {
    obj.datagravacaoAte = filtro.datagravacaoate
  }
  
  if(filtro.datagravacaode) {
    obj.datagravacaoDe = filtro.datagravacaode
  }
  
  if(filtro.status) {
    obj.status = filtro.status
  }

  return obj

}



  converterStringParaDataFiltro(obj: any[]) {
    obj.forEach((element) => {
      if (element.datanasc) {
        element.datanasc = moment(element.datanasc, 'YYYY/MM/DD H:mm')
          .tz('America/Sao_Paulo')
          .toDate();

      }
      if (element.datagravacao) {

        element.datagravacao = moment(element.datagravacao, 'YYYY/MM/DD H:mm')
          .tz('America/Sao_Paulo')
          .toDate();
      }


    })
  }


  excluir(id: number): Promise<void> {
    return firstValueFrom(
      this.http.delete(`${this.pacienteUrl}/${id}`))
      .then(() => null)

  }


  adicionar(paciente: Paciente): Promise<Paciente> {
    return firstValueFrom(
      this.http.post<Paciente>(`${this.pacienteUrl}`, paciente))
  }

  atualizar(paciente: Paciente): Promise<Paciente> {
    return firstValueFrom(
      this.http.put(`${this.pacienteUrl}/${paciente.id}`, paciente) )
      .then((response) => {
        const pacAlterado = response as Paciente
        this.converterStringParaDataFiltro([pacAlterado])
        return pacAlterado
      })
  }

  buscarPorId(id: number): Promise<any> {
    return firstValueFrom(
      this.http.get(`${this.pacienteUrl}/${id}`))
      .then((response) => {
        const paciente = response as Paciente
        this.converterStringParaData([paciente])
        return paciente
      })
  }

  converterStringParaData(pacientes: Paciente[]) {
    for(const paciente of pacientes) {
      if(paciente.datanacimento === null) {

      }else{ 
        paciente.datanacimento = moment(paciente.datanacimento, 'YYYY-MM--DD').toDate()
      }
    }
  }
}
