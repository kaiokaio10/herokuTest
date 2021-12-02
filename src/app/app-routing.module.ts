import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './cliente/listar/listar.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'cadastro',
    loadChildren: () => import(`./cliente/cliente-routing.module`).then(m => m.clienteRoutingModule),
  },

  {
    path: 'lista', component: ListarComponent
  },



  { path: '', pathMatch: 'full', redirectTo: '/home' },
  // { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
