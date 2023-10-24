import { Convenio } from '../../../core/models/convenios.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConveniosService } from '../convenios.service';
import { Regex } from 'src/app/core/validators/regex';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-convenio-cadastro',
  templateUrl: './convenio-cadastro.component.html',
  styleUrls: ['./convenio-cadastro.component.css']
})
export class ConvenioCadastroComponent implements OnInit {

  regex = new Regex();
  convenio = new Convenio();
  salvando: boolean = false;
  idConvenio: number;
  constructor(
    private conService: ConveniosService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private spinner: NgxSpinnerService,
    private messageService: MessageService
  
  ) { }
  ngOnInit() {

    this.title.setTitle('Cadastro Convenio')
    this.idConvenio = this.route.snapshot.params['id'];
    if (this.idConvenio) {
      this.spinner.show()
      this.carregarConvenio(this.idConvenio)
    } else {
      this.convenio.status = true;
    }

  }

adicionarConvenio(form: NgForm) {
  this.salvando = true
  this.conService.adicionar(this.convenio)
  .then((obj) => {
    this.messageService.add({
      severity: 'success',
      summary: 'Convenio',
      detail: `${obj.descricao}, Adicionado com sucesso!`,

    })
    this.salvando = false
    this.router.navigate(['/convenios'])
  })
  .catch((erro) => {
    this.salvando = false
       //   this.erroHandler.handle(erro)
  })
}

get Editando() {
  return Boolean( this.convenio.id)
}

salvar(form: NgForm) {
if(this.Editando) {
  this.atualizarConvenio(form)
}else {
  this.adicionarConvenio(form)
}
}

atualizarConvenio(form: NgForm) {
  this.salvando = true
  this.conService.atualizar(this.convenio)
  .then((obj) => {
    this.messageService.add({
      severity: 'info',
      summary: 'Convenio',
      detail: `${obj.descricao}, Adicionado com sucesso!`,

    })
    this.atualizarTituloEdicao()
    this.salvando = false
    this.router.navigate(['/convenios'])
  })
  .catch((erro) => {
    this.salvando = false
       //   this.erroHandler.handle(erro)
  })
}


  carregarConvenio(id: number) {
    this.conService.buscarPorId(id)
    .then((obj) => {
      this.convenio = obj
      this.atualizarTituloEdicao()
      this.spinner.hide()
    })
    .catch((erro)=> {
      this.spinner.hide()
   //   this.erroHandler.handle(erro)
    })
  }


  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Convenio: ${this.convenio.descricao}`)
  }



}
