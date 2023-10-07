import { ItensAtendimentos } from './itensAtendimentos.model';
import { Paciente } from './paciente.model';
import { Usuarios } from './usuarios.model';
export class Atendimentos {
    id?: number;
    idficha?: number;
    datalancamento?: Date;
    total?: number;
    formapagamento?: string;
    usuario = new Usuarios();
    paciente = new Paciente();
    status?: boolean;
    itensatendimentos = new ItensAtendimentos();
}