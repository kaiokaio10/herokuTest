import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ListaService } from 'src/app/services/lista.services';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public listaClientes: Cliente[] = [];
  public value: Data;
  public display: boolean = false;
  public dtoView: Cliente;
  public exibir: boolean = false;

  constructor(
    private service: ListaService,
    private messageService: MessageService,
    private router: Router,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.dtoView = new Cliente();
  }

  

  visualizar() {
    this.service.visualizar(this.listaClientes);
    return;

  }
  confirmar(id: number, event: Event) {
    this.confirmationService.confirm({
      target: event.target,
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      message: 'Confirma a exclusão da cliente?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.excluir(id);
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Excluído', detail: 'com sucesso' });
      }
    });
  }

  excluir(id: number) {
    this.service.excluir(id).subscribe(retorno => {
      this.pesquisar();
      this.messageService.add({ severity: 'info', summary: 'Excluído', detail: 'com sucesso' });
    }, (erro: HttpErrorResponse) => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao excluir cliente' });
    });
  }

  openNovo() {
    this.router.navigate(['/cadastro']);
  }

  openEditar(id: number) {
    this.router.navigate(['/cadastro', { id: id }]);
  }

  pesquisar() {
    this.service.pesquisar(this.dtoView).subscribe(retorno => {
      this.listaClientes = retorno;
      this.exibir = true;
    }, (erro: HttpErrorResponse) => {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: erro.error });
    });

  }

  
limpar() {
  this.listaClientes = [];
  this.dtoView = new Cliente();
  this.exibir = false;
}


}
