import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TipoTelefoneComponent } from "./cadastrar/tipoTelefone.component";
import { ListarTelefoneComponent } from "./listar/listarTelefonecomponent";

const routes: Routes = [
  {
    path: '',
    component: TipoTelefoneComponent,
  },
  {
    path: 'tipoTelefone',
    component: TipoTelefoneComponent,
  },
  {
    path: 'listar',
    component: ListarTelefoneComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoTelefoneRoutingModule {
}