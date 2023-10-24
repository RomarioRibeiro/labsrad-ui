import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Convenio } from 'src/app/core/models/convenios.model';
import { ConveniosService } from '../convenios.service';
import { Table } from 'primeng/table';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { MenuItem } from 'primeng/api';
import { ValidationService } from './../../../core/service/validation.service';

@Component({
  selector: 'app-convenios-list',
  templateUrl: './convenios-list.component.html',
  styleUrls: ['./convenios-list.component.css']
})
export class ConveniosListComponent implements OnInit {
  @ViewChild('tabela') table: Table
  rowPergeTable: number[] = [10, 25, 50, 100, 200, 500]

  convenios = [];
  cols: any[]
  messagePageReport =  'Mostrando {first} a {last} de {totalReport} registro'
  items: MenuItem[]
  sinal = true
  valorTooltip =  'Inativos'

  constructor(private title: Title,
    private conService: ConveniosService,
    private spinner: NgxSpinnerService,
    private validationService: ValidationService
  ) {

  }


  ngOnInit() {
    this.title.setTitle('Lista de Convenios')
    this.items = [
      {
        label: 'Ativos/Inativos',
        icon: 'pi pi-sort-alt',
        command: () => {
          this.AlternarList()
        }
      }
    ]
    this.carregarConvenios()

    this.cols = [
      { field: 'id', header: 'Codigo', width: '100px', type: 'numeric', key: 1 },
      { field: 'descricao', header: 'Descricao', width: '150px', type: 'text', key: 2 },
      { field: 'datagravacao', header: 'Data Gravação', width: '100px', data: true, format: 'dd/MM/yyyy H:mm', type: 'date', key: 3 },
      { field: 'emailusuario', header: 'Usuario Gravacao', width: '150px', type: 'text', key: 4 },
      { field: 'statusformatado', header: 'Status', width: '150px', type: 'text', key: 5 }
    ]
  }


  carregarConvenios() {
    this.spinner.show()
    this.conService.listarConvenios().then((obj) => {
      this.convenios = obj
      this.convenios = this.validationService.formataAtivoeInativo(this.convenios)
      this.spinner.hide()
    })
      .catch((erro) => {
        this.spinner.hide()
        //   this.erroHandler.handle(erro)
      })
  }

  AlternarList() {
    this.spinner.show()
    const valor = this.sinal ? '/statusformatado' : '/'
    if (this.sinal === true) {
      this.valorTooltip = 'Ativos'
      this.sinal = false
    } else {
      this.valorTooltip = 'Inativos'
      this.sinal = true
    }

    this.conService.AlternarLista(valor).then((obj) => {
      this.convenios = obj
      this.convenios = this.validationService.formataAtivoeInativo(this.convenios)
      this.spinner.hide()
    })
    .catch((erro) => {
      this.spinner.hide()
      //   this.erroHandler.handle(erro)
    })

  }

  refresh() {
    this.carregarConvenios()

  }

  onClear() {
    this.table.clear()
  }


}
