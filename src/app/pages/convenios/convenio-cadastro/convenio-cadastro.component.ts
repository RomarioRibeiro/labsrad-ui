import { Convenio } from '../../../core/models/convenios.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConveniosService } from '../convenios.service';
import { Regex } from 'src/app/core/validators/regex';

@Component({
  selector: 'app-convenio-cadastro',
  templateUrl: './convenio-cadastro.component.html',
  styleUrls: ['./convenio-cadastro.component.css']
})
export class ConvenioCadastroComponent implements OnInit{

regex = new Regex();
  convenio = new Convenio();
salvando: boolean = false;
idConvenio: number;
constructor(
  private conService: ConveniosService
){}
  ngOnInit()  {
  this.convenio.status = true;

  }


salvar(form: NgForm){
  console.log(form)
  this.salvando = true;
}

}
