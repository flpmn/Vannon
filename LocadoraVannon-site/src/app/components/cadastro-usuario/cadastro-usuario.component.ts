import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioRequest } from 'src/app/request/usuario.request';
import { UsuarioResponse } from 'src/app/response/usuario.response';
import {UsuarioService} from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
})
export class CadastroUsuarioComponent implements OnInit{

  public usuario: UsuarioRequest;
  public response: UsuarioResponse;
  public form: FormGroup;

  constructor(private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private toastr: ToastrService){}

  ngOnInit(): void {
    this.form = this.fb.group({
      Nome: [null, Validators.compose([Validators.required])],
      Email: [null, Validators.compose([Validators.required])],
      CPF: [null, Validators.compose([Validators.required])],
      Idade: [null,''],
      DataNascimento: [null, Validators.compose([Validators.required])]
    });
  }

  public cadastrar(): void {
    this.usuario = new UsuarioRequest(JSON.parse(JSON.stringify(this.form.value)));
    this.usuarioService.inserir(this.usuario).subscribe((response: UsuarioResponse) => {
      this.toastr.success("Usuario cadastrado com sucesso!");
      this.form.reset();
    }, (error: any) => 
    {
      this.toastr.error("Falha ao cadastrar o usuario!");
    });
    
  }
}
