import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocacaoRequest } from 'src/app/request/locacao.request';
import { LocacaoResponse } from 'src/app/response/locacao.response';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  private url = environment.config.api.url;

  constructor(private client: HttpClient) { }

  public inserir(request: LocacaoRequest): Observable<LocacaoRequest>
  {
    return this.client.post<LocacaoResponse>(this.url+"locacoes", request);
  }

  public listar(): Observable<Array<LocacaoResponse>>
  {
    return this.client.get<Array<LocacaoResponse>>(this.url+"locacoes");
  }

}
