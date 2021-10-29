import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { ClienteComponent } from './cadastro/cliente.component';
import { ListaComponent } from './lista/lista.component';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog'



  
 @NgModule({
  declarations: [
    ClienteComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    DataViewModule,
  ],
})
export class ClienteModule { }