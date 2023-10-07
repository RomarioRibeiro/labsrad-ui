import { Tenant } from "./Tenant.model";

export class Paciente {
  id?: number;
  nome?: string;
  datanacimento?: Date;
  sexo?: string;
  status?: boolean;
  cpf?: string;
  telefone?: string;
  tenant = new Tenant();

}
