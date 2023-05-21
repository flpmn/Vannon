import { UsuarioRequest } from "./usuario.request";

export class ClienteRequest {
    Id: number | undefined;
    Endereco: string | undefined;
    Cidade: string | undefined;
    UF: string | undefined;
    Usuario: UsuarioRequest | undefined;

    constructor(params: Partial<ClienteRequest>)
    {
        this.Id = params.Id;
        this.Endereco = params.Endereco;
        this.Cidade = params.Cidade;
        this.UF = params.UF;
        this.Usuario = params.Usuario;
    }
}