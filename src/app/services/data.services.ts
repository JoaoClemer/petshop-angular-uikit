import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public url: string = 'http://localhost:3000/v1';

    constructor(private http: HttpClient) { }


    getProducts() {
        return this.http.get<Product[]>(`${this.url}/products`)
    }

    authenticate(data: string) {
        return this.http.post(`${this.url}/accounts/authenticate`, data)
    }
}