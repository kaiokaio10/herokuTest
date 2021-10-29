import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "../model/cliente";

@Injectable({ providedIn: 'root' })

export class ListaService {
    apiURL: string = 'http://localhost:8080/cliente'
    
    constructor(
        private http: HttpClient
    ) { }


    altera(id:number) {
        console.log(id)
        return;
    }

    visualizar(lista: Cliente[]) : Promise<any> {
        return this.http.get(this.apiURL )
        .toPromise()
        .then(Response => console.log(Response));
        
    }

    excluir(id:number) {
        console.log(id)
        return;
    }
}
