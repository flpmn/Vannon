import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteRequest } from 'src/app/request/cliente.request';
import { ClienteResponse } from 'src/app/response/cliente.response';
import {ClienteService} from 'src/app/services/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioResponse } from 'src/app/response/usuario.response';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
})
export class CadastroClienteComponent implements OnInit{

  public cliente: ClienteRequest;
  public response: ClienteResponse;
  public formCliente: FormGroup;
  public usuarios: Array<any>=[];
  
  constructor(private clienteService: ClienteService,
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private toastr: ToastrService){}

  ngOnInit(): void {
    this.formCliente = this.fb.group({
      Usuario: [null, Validators.compose([Validators.required])],
      Endereco: [null, Validators.compose([Validators.required])],
      Cidade: [null, Validators.compose([Validators.required])],
      UF: [null, Validators.compose([Validators.required])]
    });

    this.usuarioService.listar().subscribe((response: Array<UsuarioResponse>) => {
      this.usuarios = response;
    });
  }

  public cadastrar(): void {
    this.cliente = new ClienteRequest(JSON.parse(JSON.stringify(this.formCliente.value)));
    const usuario = this.usuarios.find((usuario) => {
      return usuario.id == this.cliente.Usuario;
    });
    this.cliente.Usuario=usuario;
    this.clienteService.inserir(this.cliente).subscribe((response: ClienteResponse) => {
      this.toastr.success("Cliente cadastrado com sucesso!");
      this.formCliente.reset();
    }, (error: any) => 
    {
      this.toastr.error("Falha ao cadastrar o cliente!");
    });
    
  }
}
