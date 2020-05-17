import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private httpClient: HttpClient) {}
  
//pubic String getString()

  create(product): Observable<Product> {
    return this.httpClient.post<Product>
    (this.apiServer + '/products/',
     JSON.stringify(product),
      this.httpOptions);
    
  }  

  getById(id): Observable<Product> {
    return this.httpClient.get<Product>(
      this.apiServer + '/products/' + id);
    
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>
    (this.apiServer + '/products/') //localhost:3000/products
    
  }

  update(id, product): Observable<Product> {
    return this.httpClient.put<Product>(
      this.apiServer + '/products/' + id, 
      JSON.stringify(product),
      this.httpOptions)
   
  }

  delete(id){
    return this.httpClient.delete<Product>(
      this.apiServer + '/products/' + id, 
      this.httpOptions)
   
  }
 



  


}
