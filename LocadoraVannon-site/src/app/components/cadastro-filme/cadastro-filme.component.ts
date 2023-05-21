import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmeRequest } from 'src/app/request/filme.request';
import { FilmeResponse } from 'src/app/response/filme.response';
import {FilmeService} from 'src/app/services/filme.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-filme',
  templateUrl: './cadastro-filme.component.html',
})
export class CadastroFilmeComponent implements OnInit{

  public filme: FilmeRequest;
  public response: FilmeResponse;
  public formFilme: FormGroup;

  constructor(private filmeService: FilmeService,
    private fb: FormBuilder,
    private toastr: ToastrService){}

  ngOnInit(): void {
    this.formFilme = this.fb.group({
      Titulo: [null, Validators.compose([Validators.required])],
      Categoria: [null, Validators.compose([Validators.required])],
      AnoLancamento: [null, Validators.compose([Validators.required])],
    });
  }

  public cadastrar(): void {
    this.filme = new FilmeRequest(JSON.parse(JSON.stringify(this.formFilme.value)));
    this.filmeService.inserir(this.filme).subscribe((response: FilmeResponse) => {
      this.toastr.success("Filme cadastrado com sucesso!");
      this.formFilme.reset();
    }, (error: any) => 
    {
      this.toastr.error("Falha ao cadastrar o filme!");
    });
    
  }
}
