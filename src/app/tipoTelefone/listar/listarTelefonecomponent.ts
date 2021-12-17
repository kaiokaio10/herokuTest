import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TipoTelefone } from 'src/app/model/tipo-telefone';
import { TipoTelefoneService } from 'src/app/services/tipo-telefone.services';

@Component({
  selector: 'app-listarTelefone',
  templateUrl: './listarTelefone.component.html',
  styleUrls: ['./listarTelefone.component.scss']
})
export class ListarTelefoneComponent implements OnInit {

  public listatelefone: TipoTelefone[] = [];
  public value: Data;
  public display: boolean = false;
  public dtoView: TipoTelefone;
  public exibir: boolean = false;

  constructor(
    private service: TipoTelefoneService,
    private messageService: MessageService,
    private router: Router,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.dtoView = new TipoTelefone();
  }



  visualizar() {
    this.service.visualizar(this.listatelefone);
    return;

  }
  confirmar(id: number, event: Event) {
    this.confirmationService.confirm({
      target: event.target,
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      message: 'Confirma a exclusão do tipo de telefone?',
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
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao excluir tipo de telefone' });
    });
  }

  openNovo() {
    this.router.navigate(['/telefone']);
  }

  openEditar(id: number) {
    this.router.navigate(['/telefone', { id: id }]);
  }

  pesquisar() {
    this.service.pesquisar(this.dtoView).subscribe(retorno => {
      this.listatelefone = retorno;
      this.exibir = true;
    }, (erro: HttpErrorResponse) => {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: erro.error });
    });

  }

  limpar() {
    this.listatelefone = [];
    this.dtoView = new TipoTelefone();
    this.exibir = false;
  }

}
