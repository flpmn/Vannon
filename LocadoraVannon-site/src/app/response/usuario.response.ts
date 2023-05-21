export class UsuarioResponse {
    Id: number | undefined;
    Nome: string | undefined;
    Email: string | undefined;
    CPF: string | undefined;
    Idade: number | undefined;
    DataNascimento: Date | undefined;

    constructor(params: Partial<UsuarioResponse>)
    {
        this.Id = params.Id;
        this.Nome = params.Nome;
        this.Email = params.Email;
        this.CPF = params.CPF;
        this.Idade = params.Idade;
        this.DataNascimento = params.DataNascimento;
    }
}