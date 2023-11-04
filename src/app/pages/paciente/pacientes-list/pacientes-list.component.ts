import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { Table } from 'primeng/table';
import { FiltrosPacientes } from 'src/app/core/models/filter.model';
import { PacienteService } from '../paciente.service';
import { Spinner, NgxSpinnerService } from 'ngx-spinner';
import { FiltroPacienteService } from 'src/app/core/service/filtros/filtro-paciente.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {
  @ViewChild('tabela') table: Table
  @ViewChild('paginator') paginator: Paginator
  @ViewChild('buttonFilter') buttonFilter: ElementRef


  rowPergeTable: number[] = [10, 25, 50, 100, 200, 500]
  pacientes = []
  cols: any[]
  salvando: boolean
  dateRangeStar: string
  filtro = new FiltrosPacientes()
  selectedPaciente: any
  rangeDatesFiltroDataNasc: Date[]
  rangeDatesFiltroGravacao: Date[]
  items: MenuItem[]
  timeout: any
  datanascde: string
  datanascate: string
  datagravacaode: string
  datagravacaoate: string
  totalPages = 0
  first = 1
  blockBtnFilter = false

  sexo = [
    { label: 'MASCULINO', value: 'M' },
    { label: 'FAMININO', value: 'F' },
    { label: 'OUTROS', value: 'O' },
  ]

  constructor(
    private pacienteServive: PacienteService,
    private spinner: NgxSpinnerService,
    private filtroPaciente: FiltroPacienteService,
    private title: Title,
    /*  private auth: AuthService/*  */

  ) { }

  ngOnInit(): void {
    this.filtroDefault()
    this.title.setTitle('Lista de Pacientes')

    this.items = [ {
      label: 'Ativos/Inativos',
        icon: 'pi pi-sort-alt',
        command: () => {
          this.AlternarList()
        }
      }
    ]
    this.cols = [
      {field: 'id', header: 'Código', width: '130px', type: 'numeric', qty: '', key: 1},
      {field: 'nome', header: 'Nome', width: '200px', type: 'text', qty: '', key: 2},
      {field: 'cpf', header: 'CPF', width: '100px', type: 'text', qty: '', key: 3},
      {field: 'datanasc', header: 'Data Nasc', width: '130px', type: 'date', date:true,  format: 'dd/MM/yyyy H:mm', qty: '', key: 4},
      {field: 'sexo', header: 'Sexo', width: '100px', type: 'text', qty: '', key: 5},
      {field: 'datagravacao', header: 'Data Grav', width: '130px', type: 'date', date:true,  format: 'dd/MM/yyyy H:mm', qty: '', key: 6},
      {field: 'emailusuario', header: 'Usuario Grav', width: '130px', type: 'text', qty: '', key: 7},
      {field: 'status', header: 'Status', width: '10px', type: 'text', qty: '', key: 8},
    ]

  }


  AlternarList() {}
onClear() {
  this.cols.forEach(col => {
    if(col.qty === null || col.qty === undefined) {

    }else {
      col.qty = null
    }
  })
  this.datanascde = null 
  this.datanascate = null 
  this.datagravacaode =null
  this.datagravacaoate = null
  this.filtro = new FiltrosPacientes()
  this.filtroDefault()
  this.carregarPacientes()

}

refresh() {
  this.carregarPacientes()
}


carregarPacientes() {}

filtroDefault() {
  this.filtro.pagina = 0
  this.filtro.itensPorPagina = 10
  this.filtro.status = 'Ativos'
}

}
