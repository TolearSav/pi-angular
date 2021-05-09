import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},

  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},

  {path: 'inicio', component: InicioComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contato', component: ContatoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }