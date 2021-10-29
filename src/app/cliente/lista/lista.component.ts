import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ListaService } from 'src/app/services/lista.services';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  listaClientes: Cliente[] = [];
  value: Data;
  display: boolean = false;
  dtoView: Cliente = new Cliente;

  constructor(
    private service: ListaService,

  ) { }

  ngOnInit(): void {
    this.listaClientes = [
      { id: 1, nomeCompleto: "maria", endereco: 'qnn 24 conj k casa 21', idade: 29, numeroTelefone: 9999999, cpf:'999-999-992.38' },
      { id: 2, nomeCompleto: "igor", endereco: 'qnn 23 conj O casa 22', idade: 32,numeroTelefone: 9999999,cpf:'999-999-992.36' },
      { id: 3, nomeCompleto: "beth", endereco: 'qnn 22 conj P casa 23',  idade: 60,numeroTelefone: 9999999,cpf:'999-999-992.37' },
      { id: 4, nomeCompleto: "leo", endereco: 'qnn 21 conj Q casa 24', idade: 65,numeroTelefone: 9999999, cpf:'999-999-992.39' }
    ]

  }

  alterar(id: number) {
    this.service.altera(id);
    return;
  }

  visualizar() {
    this.service.visualizar(this.listaClientes);
    return;

  }

  excluir(id: number) {
    this.service.excluir(id);
    return;
  }

  pesquisa() {
    this.service.visualizar(this.listaClientes);
  }

  showBasicDialog() {
    this.display = true;
}

}
