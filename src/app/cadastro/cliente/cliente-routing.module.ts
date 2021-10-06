import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';

const routes: Routes = [
    {
      path: '',
      component: ClienteComponent,
    },
    {
      path: 'cliente',
      component: ClienteComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class clienteRoutingModule {
  }