import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";



@Injectable({
    providedIn:'root'
})
export class ProductService {
apiBaseUrl: string = environment.apiBaseUrl;
    constructor(private http: HttpClient) { }

  
      getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiBaseUrl + '/api/products');
      }

}