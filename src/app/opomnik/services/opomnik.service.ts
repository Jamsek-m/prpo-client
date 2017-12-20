import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import {Uporabnik} from '../../uporabnik/models/uporabnik';
import { Opomnik } from '../models/opomnik';

@Injectable()
export class OpomnikService {
    private url_opomniki = 'http://localhost:8080/v1/opomniki';
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {

    }

    getOpomniki(): Promise<Opomnik[]> {
        return this.http.get(this.url_opomniki)
            .toPromise()
            .then(res => res as Opomnik[])
            .catch(this.handleError);
    }

    getOpomnik(id: number): Promise<Opomnik> {
        const url = `${this.url_opomniki}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(res => res as Opomnik)
            .catch(this.handleError);
    }

    getOpomnikiPoUporabniku(id: number): Promise<Opomnik[]> {
        const url = `${this.url_opomniki}/uporabniki/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(res => res as Opomnik[])
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.url_opomniki}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null, () => null)
        .catch(this.handleError);
    }

    create(opomnik: Opomnik): Promise<void> {
        return this.http
            .post(this.url_opomniki, JSON.stringify(opomnik), {headers: this.headers})
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    update(opomnik: Opomnik): Promise<void> {
        const url = `${this.url_opomniki}/${opomnik.id}`;
        return this.http
            .put(url, JSON.stringify(opomnik), {headers: this.headers})
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    private handleError(err: any): Promise<any> {
        console.error('Prišlo je do napake!', err);
        return Promise.reject(err.message || err);
    }

}
