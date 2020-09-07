import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private url: string = 'http://localhost:3031/';
  private createProduct: string = 'createProduct/';
  private getProducts: string = 'getProducts/';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.url + this.getProducts);
  }
}
