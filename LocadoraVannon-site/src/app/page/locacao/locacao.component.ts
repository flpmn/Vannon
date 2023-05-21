import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocacaoRequest } from 'src/app/request/locacao.request';
import { ClienteResponse } from 'src/app/response/cliente.response';
import { FilmeResponse } from 'src/app/response/filme.response';
import { LocacaoResponse } from 'src/app/response/locacao.response';
import { ClienteService } from 'src/app/services/cliente.service';
import { FilmeService } from 'src/app/services/filme.service';
import { LocacaoService } from 'src/app/services/locacao.service';

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
})
export class LocacaoComponent implements OnInit{
  public clientes: Array<any>=[];
  public filmes: Array<any>=[];
  public formLocacao: FormGroup;
  public locacao: LocacaoRequest;

  constructor(private locacaoService: LocacaoService,
    private filmeService: FilmeService,
    private clienteService: ClienteService,
    private fb: FormBuilder,
    private toastr: ToastrService){}

  ngOnInit(): void {

    this.formLocacao = this.fb.group({
      Filme: [null, Validators.compose([Validators.required])],
      Cliente: [null, Validators.compose([Validators.required])],
      DataDevolucao: [null, Validators.compose([Validators.required])],
    });

    this.filmeService.listar().subscribe((response: Array<FilmeResponse>) => {
      this.filmes = response;
    });

    this.clienteService.listar().subscribe((response: Array<ClienteResponse>) => {
      this.clientes = response;
    });
  }
  public alugar(): void {
    this.locacao = new LocacaoRequest(JSON.parse(JSON.stringify(this.formLocacao.value)));
    
    const cliente = this.clientes.find((cliente) => {
      return cliente.id == this.locacao.Cliente?.Id;
    });
    this.locacao.Cliente=cliente;

    const filme = this.filmes.find((filme) => {
      return filme.id == this.locacao.Filme?.Id;
    });
    this.locacao.Filme=filme;

    this.locacaoService.inserir(this.locacao).subscribe((response: LocacaoResponse) => {
      this.toastr.success("Alugado com sucesso!");
      this.formLocacao.reset();
    }, (error: any) => 
    {
      this.toastr.error("Falha ao alugar o filme!");
    });
  }
}
