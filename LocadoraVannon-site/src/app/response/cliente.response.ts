import { UsuarioResponse } from "./usuario.response";

export class ClienteResponse {
    Id: number | undefined;
    Endereco: string | undefined;
    Cidade: string | undefined;
    UF: string | undefined;
    Usuario: UsuarioResponse | undefined;

    constructor(params: Partial<ClienteResponse>)
    {
        this.Id = params.Id;
        this.Endereco = params.Endereco;
        this.Cidade = params.Cidade;
        this.UF = params.UF;
        this.Usuario = params.Usuario;
    }
}