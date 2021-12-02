import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../model/cliente";

@Injectable({ providedIn: 'root' })

export class ListaService {
    apiURL: string = 'http://localhost:8080/cliente'
    
    constructor(
        private http: HttpClient
    ) { }




    visualizar(lista: Cliente[]) : Promise<any> {
        return this.http.get(this.apiURL )
        .toPromise()
        .then(Response => console.log(Response));
        
    }

    excluir(id: number): Observable<any> {
        return this.http.delete<any>(`http://localhost:8080/cliente/delete/${id}`);
      }
    pesquisar(dto: Cliente): Observable<Cliente[]> {
        return this.http.post<Cliente[]>(`http://localhost:8080/cliente/pesquisa`, dto);
    }

    consultarPorId(id: number): Observable<Cliente> {
        return this.http.get<Cliente>(`${this.apiURL}/${id}`);
    }
}
