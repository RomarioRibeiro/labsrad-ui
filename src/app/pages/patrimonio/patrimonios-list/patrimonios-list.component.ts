import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { PatrimonioService } from '../patrimonios.service';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-patrimonios-list',
  templateUrl: './patrimonios-list.component.html',
  styleUrls: ['./patrimonios-list.component.css']
})
export class PatrimoniosListComponent implements OnInit{
  
  @ViewChild('tabela') table: Table
  rowsPageTable: number[] = [10, 25, 50, 100, 200, 500]
  patrimonio = []
  cols: any[]
  messagePageReport = 'Mostrando {first} a {last} de {totalRecords} registrados'
  items: MenuItem[]
  sinal = true
  valorTooltip = 'Inativos'

    constructor(
      private patrimonioService: PatrimonioService,
      private  title: Title,
      private spinner: NgxSpinnerService,

    ) {}


  ngOnInit(): void {
    this.title.setTitle('Lista de Patrimonios')
    this.items = [
      {
        label: 'Ativo/Inativo',
        icon: 'pi pi-sort-alt',
        command: () => {
          this.AlternarLista()
        }
      }
    ]
    this.carregarPatrimonios()

    this.cols = [
      {field: 'id', header:  'Código', width: '100px', type: 'numeric', key: 1 },
      {field: 'descricao', header:  'Descrição', width: '150px', type: 'text', key: 2 },
      {field: 'dataaquisicao', header:  'Data Aquisição', width: '150px',data: true, format: 'dd/MM/yyyy H:mm'  , type: 'date', key: 3 },
      {field: 'datagravacao', header:  'Data Gravação', width: '150px',data: true, format: 'dd/MM/yyyy H:mm'  , type: 'date', key: 4 },
      {field: 'valor', header:  'Valor', width: '100px', type: 'number', key: 5 },
      {field: 'status', header:  'Status', width: '100px', type: 'text', key: 6 },
    ]
  }

  carregarPatrimonios() {
    this.spinner.show()
    this.patrimonioService.listaPatrimonios()
    .then((obj) => {
      this.patrimonio = obj
      this.spinner.hide()
    })
    .catch((erro) => {
      this.spinner.hide();
      // this.erroHandler.handle(erro);
    })
  }


  AlternarLista() {
    this.spinner.show()
    const valor = this.sinal ? '/inativos' : '/'
    if(this.sinal === true) {
      this.valorTooltip = 'Ativos'
      this.sinal = false
    }else {
      this.valorTooltip = 'inativos'
      this.sinal = true
    }
    this.patrimonioService.AlternarLista(valor)
    .then((obj) => {
      this.patrimonio = obj
      this.spinner.hide()
    })
    .catch((erro) => {
      this.spinner.hide();
      // this.erroHandler.handle(erro);
    })
  }

  refresh() {
    this.carregarPatrimonios()
  }

  onClear() {
    this.table.clear()
  }

}
