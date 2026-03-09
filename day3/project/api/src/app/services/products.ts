import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  constructor( private http: HttpClient ) { 

  }

apiURL = 'https://dummyjson.com/products';
  getProducts() {
    return this.http.get<any>(this.apiURL);
  }
}
