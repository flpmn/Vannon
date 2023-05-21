import { ClienteRequest } from "./cliente.request";
import { FilmeRequest } from "./filme.request";

export class LocacaoRequest {
    Id: number | undefined;
    Filme: FilmeRequest | undefined;
    Cliente: ClienteRequest | undefined;
    DataDevolucao: Date | undefined;

    constructor(params: Partial<LocacaoRequest>)
    {
        this.Id = params.Id;
        this.Filme = params.Filme;
        this.Cliente = params.Cliente;
        this.DataDevolucao = params.DataDevolucao;
    }
}