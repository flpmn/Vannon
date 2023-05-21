import { ClienteResponse } from "./cliente.response";
import { FilmeResponse } from "./filme.response";

export class LocacaoResponse {
    Id: number | undefined;
    Filme: FilmeResponse | undefined;
    Cliente: ClienteResponse | undefined;
    DataDevolucao: Date | undefined;

    constructor(params: Partial<LocacaoResponse>)
    {
        this.Id = params.Id;
        this.Filme = params.Filme;
        this.Cliente = params.Cliente;
        this.DataDevolucao = params.DataDevolucao;
    }
}