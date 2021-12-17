import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {  TipoTelefone } from 'src/app/model/tipo-telefone';
import { TipoTelefoneService } from 'src/app/services/tipo-telefone.services';

@Component({
  selector: 'app-tipoTelefone',
  templateUrl: './tipoTelefone.component.html',
  styleUrls: ['./tipoTelefone.component.scss']
})
export class TipoTelefoneComponent implements OnInit {

  public edicao: boolean = false;
  dto: TipoTelefone = new TipoTelefone();

  constructor(
    private service: TipoTelefoneService,
    private messageService: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.recuperarInfRota();
  }

  salvar() {
    if (!this.validarForm()) {
      return;
    }
    this.service.salvar(this.dto).subscribe(retorno => {
      this.dto = retorno;
      this.messageService.add({ severity: 'success', summary: 'Atenção', detail: 'telefone salvo com sucesso' });
      this.limpar();
    }, (erro: HttpErrorResponse) => {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: erro.error });
    });
  }

  validarForm() {
    if (!this.dto.tipo) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'tipo  não preenchido.' });
      return false;
    }
    if(!this.dto.descricao){
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'descrição  não preenchido.' });
      return false;
    }

    return true;
  }

  limpar() {
    if (this.edicao) {
      this.consultarPorId(this.dto.id);
    } else {
      this.dto = new TipoTelefone();
    }

  }

  consultarPorId(id: number) {
    this.service.consultarPorId(id).subscribe(retorno => {
      this.dto = retorno;
    }, () => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao realizar consulta' });
    });
  }

  alterar() {
    if (!this.validarForm()) {
      return;
    }
    this.service.alterar(this.dto).subscribe(retorno => {
      this.consultarPorId(retorno.id)
      this.messageService.add({ severity: 'success', summary: 'Atenção', detail: 'Telefone alterado com sucesso' });
    }, (erro: HttpErrorResponse) => {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: erro.error });
    });


  }

  save() {
    return this.edicao ? this.alterar() : this.salvar();
  }
  voltar() {
    this.router.navigate(['/listatelefones']);
  }
  recuperarInfRota() {
    this.edicao = false;

    this.activatedRoute.params.subscribe(params => {
      if (!!params.id) {
        this.consultarPorId(params.id);
        this.edicao = true;
      }
    });
  }
}
