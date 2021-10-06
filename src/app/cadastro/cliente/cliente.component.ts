import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.services';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  providers: [MessageService]
})
export class ClienteComponent implements OnInit {

  dto: Cliente = new Cliente();

  constructor(
    private service :ClienteService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  validar(dto: Cliente) {
    if (dto.nomeCompleto == null) {
      return false
    } else if (dto.idade == null) {
      return false
    } else if (dto.endereco == null) {
      return false
    } else if (dto.numeroTelefone == null) {
      return false
    } else if (dto.cpf == null) {
      return false
    } else return true
  }

  salvar() {
    if (this.validar(this.dto)) {
      this.service.enviar(this.dto)
      console.log(this.dto)
    } else {
    }
  }

}
