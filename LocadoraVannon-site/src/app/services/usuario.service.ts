import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioRequest } from 'src/app/request/usuario.request';
import { UsuarioResponse } from 'src/app/response/usuario.response';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.config.api.url;

  constructor(private client: HttpClient) { }

  public inserir(request: UsuarioRequest): Observable<UsuarioRequest>
  {
    return this.client.post<UsuarioResponse>(this.url+"usuarios", request);
  }

  public listar(): Observable<Array<UsuarioResponse>>
  {
    return this.client.get<Array<UsuarioResponse>>(this.url+"usuarios");
  }

}
