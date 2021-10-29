import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cadastro/cliente.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
  },
  {
    path: 'cliente',
    component: ClienteComponent,
  },
  {
    path: 'lista',
    component: ListaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class clienteRoutingModule {
}