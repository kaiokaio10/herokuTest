import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "../model/cliente";

@Injectable({ providedIn: 'root' })

export class ClienteService {

    apiURL: string = '`${this.baseUrl}/cliente'
    constructor(
        private http: HttpClient
    ) { }

    enviar(dto: Cliente): Promise<any> {
        return this.http.post('`${this.baseUrl}/cliente', dto)
            .toPromise()
            .then(Response => console.log(Response));

    }






}