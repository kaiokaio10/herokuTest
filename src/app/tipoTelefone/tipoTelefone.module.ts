import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DataViewModule } from "primeng/dataview";
import { DropdownModule } from "primeng/dropdown";
import { TipoTelefoneComponent } from "./cadastrar/tipoTelefone.component";
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ListarTelefoneComponent } from './listar/listarTelefonecomponent';

@NgModule({
    declarations: [
      TipoTelefoneComponent,
      ListarTelefoneComponent,
      
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      DropdownModule,
      DataViewModule,
      FormsModule,
      InputTextareaModule,
      ,
    ],
  })
  export class TipoTelefoneModule { }