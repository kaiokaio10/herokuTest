import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../model/cliente";
import { TipoTelefone } from "../model/tipo-telefone";

@Injectable({ providedIn: 'root' })

export class ClienteService {

    apiURL: string = 'http://localhost:8080/cliente'
    constructor(
        private http: HttpClient
    ) { }

    enviar(dto: Cliente): Promise<any> {
        return this.http.post('http://localhost:8080/cliente', dto)
            .toPromise()
            .then(Response => console.log(Response));

    }

    alterar(dto: Cliente): Observable<Cliente> {
        return this.http.put<Cliente>(`http://localhost:8080/cliente`, dto);
    }

    consultarPorId(id: number): Observable<Cliente> {
        return this.http.get<Cliente>(`${this.apiURL}/${id}`);
    }

    salvar(dto: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(this.apiURL, dto);
    }

    visualizar(lista: Cliente[]): Promise<any> {
        return this.http.get(this.apiURL)
            .toPromise()
            .then(Response => console.log(Response));

    }

    excluir(id: number): Observable<any> {
        return this.http.delete<any>(`http://localhost:8080/cliente/delete/${id}`);
    }
    pesquisar(dto: Cliente): Observable<Cliente[]> {
        return this.http.post<Cliente[]>(`http://localhost:8080/cliente/pesquisa`, dto);
    }

    pesquisarTipo(): Observable<TipoTelefone[]> {
        return this.http.get<TipoTelefone[]>(`http://localhost:8080/telefone/listartipo`);
      }





}