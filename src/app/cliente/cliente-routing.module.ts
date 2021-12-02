import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: CadastrarComponent,
  },
  {
    path: 'cadastro',
    component: CadastrarComponent,
  },
  {
    path: 'lista',
    component: ListarComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class clienteRoutingModule {
}