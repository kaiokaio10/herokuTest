import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cadastro.services';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
  providers: [MessageService]
})
export class CadastrarComponent implements OnInit {


  dto: Cliente = new Cliente();
  public edicao: boolean = false;

  constructor(
    private service: ClienteService,
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
      this.messageService.add({ severity: 'success', summary: 'Atenção', detail: 'Cliente salvo com sucesso' });
      this.limpar();
    }, (erro: HttpErrorResponse) => {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: erro.error });
    });
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
      this.messageService.add({ severity: 'success', summary: 'Atenção', detail: 'Cliente alterado com sucesso' });
    }, (erro: HttpErrorResponse) => {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: erro.error });
    });


  }

  validarForm() {
    if (!this.dto.nomeCompleto) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'nome  não preenchido.' });
      return false;
    }
    if(!this.dto.idade){
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'idade  não preenchido.' });
      return false;
    }
    if(!this.dto.endereco){
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'endereço não preenchido.' });
      return false;
    }
    if(!this.dto.cpf){
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'cpf não preenchido.' });
      return false;
    }

    return true;
  }

  limpar() {
    if (this.edicao) {
      this.consultarPorId(this.dto.id);
    } else {
      this.dto = new Cliente();
    }

  }

  save() {
    return this.edicao ? this.alterar() : this.salvar();
  }
  voltar() {
    this.router.navigate(['/lista']);
  }

}
