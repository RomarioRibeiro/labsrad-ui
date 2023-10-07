import { Empresa } from "./empresa.model";

export class Patrimonio {
  id?: number;
  descricao?: string;
  dataaquisicao?: Date;
  datagravacao?: Date;
  valor?: number;
  status?: boolean;
  empresa = new  Empresa();

}



