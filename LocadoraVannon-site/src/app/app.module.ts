import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { ListarFilmesComponent } from './page/listar-filmes/listar-filmes.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { CadastroFilmeComponent } from './components/cadastro-filme/cadastro-filme.component';
import { LocacaoComponent } from './page/locacao/locacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    ListarFilmesComponent,
    CadastroClienteComponent,
    CadastroFilmeComponent,
    LocacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
