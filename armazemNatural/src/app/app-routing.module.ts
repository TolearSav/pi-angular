import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { BlogComponent } from './blog/blog.component';
import { ArmazemComponent } from './armazem/armazem.component';
import { MerceariaComponent } from './mercearia/mercearia.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},

  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},

  {path: 'inicio', component: InicioComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'armazem', component: ArmazemComponent},
  {path: 'contato', component: ContatoComponent},

  {path: 'categoria', component: CategoriaComponent},
  {path: 'categoria-delete/:id', component: CategoriaDeleteComponent},
  {path: 'mercearia', component: MerceariaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }