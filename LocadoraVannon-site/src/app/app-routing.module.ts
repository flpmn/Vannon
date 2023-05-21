import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { CadastroFilmeComponent } from './components/cadastro-filme/cadastro-filme.component';
import { ListarFilmesComponent } from './page/listar-filmes/listar-filmes.component';
import { LocacaoComponent } from './page/locacao/locacao.component';

const routes: Routes = [
  {path: 'cadastroUsuario', component: CadastroUsuarioComponent},
  {path: 'cadastroFilme', component: CadastroFilmeComponent},
  {path: 'cadastroCliente', component: CadastroClienteComponent},
  {path: 'listarFilmes', component: ListarFilmesComponent},
  {path: 'locacao', component: LocacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
