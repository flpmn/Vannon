import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilmeResponse } from 'src/app/response/filme.response';
import { FilmeRequest } from '../request/filme.request';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private url = environment.config.api.url;

  constructor(private client: HttpClient) { }

  public inserir(request: FilmeRequest): Observable<FilmeRequest>
  {
    return this.client.post<FilmeResponse>(this.url+"filmes", request);
  }

  public listar(): Observable<Array<FilmeResponse>>
  {
    return this.client.get<Array<FilmeResponse>>(this.url+"filmes");
  }

}
