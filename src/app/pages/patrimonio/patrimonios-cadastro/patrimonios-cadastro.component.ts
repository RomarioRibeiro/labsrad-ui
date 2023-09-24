import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empresa } from 'src/app/core/models/empresa';
import { Patrimonio } from 'src/app/core/models/patrimonio';

@Component({
  selector: 'app-patrimonios-cadastro',
  templateUrl: './patrimonios-cadastro.component.html',
  styleUrls: ['./patrimonios-cadastro.component.css']
})
export class PatrimoniosCadastroComponent implements OnInit{

  patrimonio = new Patrimonio();
  empresa = new Empresa();



  empresas: Empresa[] | undefined;

  salvando:boolean = false;

  ngOnInit() {
    this.patrimonio.status = true
    this.empresas = [
      {nome: 'Empresa01'},
      {nome: 'Empresa02'},
      {nome: 'Empresa03'},
      {nome: 'Empresa04'}
    ];
  }

  salvar(form: NgForm) {
    this.salvando = true
  }

}
