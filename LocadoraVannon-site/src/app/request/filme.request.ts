export class FilmeRequest {

    Id: number | undefined;
    Titulo: string | undefined;
    Categoria: string | undefined;
    AnoLancamento: number | undefined;
    DataCriacao: Date | undefined;
    Status: string | undefined;
    constructor(params: Partial<FilmeRequest>)
    {
        this.Id = params.Id;
        this.Titulo = params.Titulo;
        this.Categoria = params.Categoria;
        this.AnoLancamento = params.AnoLancamento;
        this.DataCriacao = params.DataCriacao;
        this.Status = params.Status;
    }
}