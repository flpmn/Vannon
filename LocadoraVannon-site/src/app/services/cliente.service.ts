import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClienteRequest } from 'src/app/request/cliente.request';
import { ClienteResponse } from 'src/app/response/cliente.response';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = environment.config.api.url;

  constructor(private client: HttpClient) { }

  public inserir(request: ClienteRequest): Observable<ClienteRequest>
  {
    return this.client.post<ClienteResponse>(this.url+"clientes", request);
  }

  public listar(): Observable<Array<ClienteResponse>>
  {
    return this.client.get<Array<ClienteResponse>>(this.url+"clientes");
  }

}
