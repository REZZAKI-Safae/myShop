import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

const BACKEND_URL1 = 'https://dummyjson.com/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 /**Ce constructeur ne sert qua faire appel au service httpclient */
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>(BACKEND_URL1+"products");
  }

  getProducById(id:number){
    return this.http.get<Product>(BACKEND_URL1+"products/"+id);
  }
  searchProduct(product: string): Observable<any> {
    return this.http.get<any>(`${BACKEND_URL1}products/search?q=${product}`);
  }

  getAllCategories(): Observable<any[]>{
    return this.http.get<any[]>(`${BACKEND_URL1}products/categories`);
  }

  getProductByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${BACKEND_URL1}products/category/${category}`);
  }


}
