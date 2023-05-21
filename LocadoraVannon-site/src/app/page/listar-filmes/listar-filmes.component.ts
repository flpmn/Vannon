import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmeResponse } from 'src/app/response/filme.response';
import {FilmeService} from 'src/app/services/filme.service';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
})
export class ListarFilmesComponent implements OnInit{
  public filmes: Array<FilmeResponse>=[];

  constructor(private filmeService: FilmeService){}
  
  ngOnInit(): void {
    this.filmeService.listar().subscribe((response: Array<FilmeResponse>) => {
      this.filmes = response;
    });
  }
    
}
