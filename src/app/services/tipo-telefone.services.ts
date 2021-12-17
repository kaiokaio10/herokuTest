import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TipoTelefone } from "../model/tipo-telefone";

@Injectable({ providedIn: 'root' })
export class TipoTelefoneService {

    apiURL: string = 'http://localhost:8080/telefone'

    constructor(
        private http: HttpClient
    ) { }

    salvar(dto: TipoTelefone): Observable<TipoTelefone> {
        return this.http.post<TipoTelefone>('http://localhost:8080/telefone', dto);
    }

    consultarPorId(id: number): Observable<TipoTelefone> {
        return this.http.get<TipoTelefone>(`${this.apiURL}/${id}`);
    }

    alterar(dto: TipoTelefone): Observable<TipoTelefone> {
        return this.http.put<TipoTelefone>(`http://localhost:8080/telefone`, dto);
    }



    visualizar(lista: TipoTelefone[]): Promise<any> {
        return this.http.get(this.apiURL)
            .toPromise()
            .then(Response => console.log(Response));

    }

    excluir(id: number): Observable<any> {
        return this.http.delete<any>(`http://localhost:8080/telefone/delete/${id}`);
    }
    pesquisar(dtotipo: TipoTelefone): Observable<TipoTelefone[]> {
        return this.http.post<TipoTelefone[]>(`http://localhost:8080/telefone/pesquisa`, dtotipo);
    }


}