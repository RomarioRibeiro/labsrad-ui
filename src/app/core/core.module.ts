import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { ExamesService } from "../pages/exames/exames.service";
import { AtendimentosService } from "../pages/atendimenntos/atendimentos.service";
import { PacienteService } from "../pages/paciente/paciente.service";
import { RelatoriosService } from "../pages/relatorios/relatorios.service";
import { ConveniosService } from "../pages/convenios/convenios.service";
import { UsuariosService } from "../pages/usuarios/usuarios.service";
import { DashboardService } from "../pages/dashboard/dashboard.service";
import { EmpresasService } from "../pages/empresas/empresas.service";
import { MessageService } from "primeng/api";






@NgModule({
declarations:[],
imports:[],
providers:[
MessageService,    
ExamesService,
AtendimentosService,
PacienteService,
RelatoriosService,
ConveniosService,
UsuariosService,
DashboardService,
EmpresasService

    
]
})


export class CoreModule {}
