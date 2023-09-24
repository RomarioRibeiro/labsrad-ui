import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Paciente } from 'src/app/core/models/paciente';

@Component({
  selector: 'app-pacientes-cadastro',
  templateUrl: './pacientes-cadastro.component.html',
  styleUrls: ['./pacientes-cadastro.component.css']
})
export class PacientesCadastroComponent implements OnInit{
  paciente = new Paciente();

salvando: boolean = false
pacientes: Paciente[] | undefined;



ngOnInit() {
this.paciente.status = true
this.pacientes = [
  {sexo: ' '},
  {sexo: 'MASCULINO'},
  {sexo: 'FEMININO'},
  {sexo: 'OUTROS'}
];

}




salvar(form: NgForm) {

  this.salvando = true
}

}
