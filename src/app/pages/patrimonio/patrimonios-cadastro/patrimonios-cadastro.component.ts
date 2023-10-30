import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empresa } from 'src/app/core/models/empresa.model';
import { Patrimonio } from 'src/app/core/models/patrimonio.model';
import { PatrimonioService } from '../patrimonios.service';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Regex } from 'src/app/core/validators/regex';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '../../empresas/empresas.service';

@Component({
  selector: 'app-patrimonios-cadastro',
  templateUrl: './patrimonios-cadastro.component.html',
  styleUrls: ['./patrimonios-cadastro.component.css']
})
export class PatrimoniosCadastroComponent implements OnInit {

  regex = new Regex();
  patrimonio = new Patrimonio();
  empresas = []
  idPatrimonio: number
  salvando: boolean = false

  constructor(
    private patrimonioService: PatrimonioService,
    private title: Title,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private empresaService: EmpresasService
  ) { }


  ngOnInit() {
    this.title.setTitle('Cadastro de Patrimonio')
    this.idPatrimonio = this.route.snapshot.params['id']
    if (this.idPatrimonio) {
      this.spinner.show()
      this.carregarPatrimonio(this.idPatrimonio)
    } else {
      this.patrimonio.status = true

    }
    this.carregarEmpresa()
  }

  adicionarPatrimonio(form: NgForm) {
    this.salvando = true
    this.patrimonioService.adicionar(this.patrimonio)
      .then((obj) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Patrimonio',
          detail: `${obj.descricao}, Salvo com sucesso!`
        })
        this.salvando = false
        this.router.navigate(['/patrimonios'])
      })
      .catch((erro) => {
        this.salvando = false
           //   this.erroHandler.handle(erro)
      })
  }

  get Editando() {
    return Boolean(this.patrimonio.id)
  }




  salvar(form: NgForm) {
    if(this.Editando) {
      this.atualizarPatrimonio(form)
    }else {
      this.adicionarPatrimonio(form)
    }
  }

  atualizarPatrimonio(form: NgForm) {
    this.salvando = true
    this.patrimonioService.atualizar(this.patrimonio)
    .then((obj) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Patrimonio',
        detail: `${obj.descricao}, Atualizado com sucesso!`
      })
      this.atualizarTituloEdicao()
      this.salvando = false
      this.router.navigate(['/patrimonios'])

    })
    .catch((erro) => {
      this.salvando = false
         //   this.erroHandler.handle(erro)
    })
  }

  carregarPatrimonio(id: number) {
    this.patrimonioService.buscarPorId(id)
    .then((obj) => {
      this.patrimonio = obj
      this.atualizarTituloEdicao()
      this.spinner.hide()
    })
    .catch((erro) => {
      this.salvando = false
         //   this.erroHandler.handle(erro)
    })
    
   }


  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Patrimonio: ${this.patrimonio.descricao}`)
  }

  carregarEmpresa() {
    this.empresaService.listarEmpresas()
    .then(empresas => {
      this.empresas = empresas.map((c: {razaosocial: any; id: any;}) => ({label: c.razaosocial, value: c.id}))
    })
  }

}
