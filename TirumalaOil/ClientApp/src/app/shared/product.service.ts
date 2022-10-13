import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn:'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    PostProduct(formData: any) {
        return this.http.post(environment.apiBaseURI + '/Product', formData);
      }
    
      PutProduct(formData: { bankAccountID: string; }) {
        return this.http.put(environment.apiBaseURI + '/Product/' + formData.bankAccountID, formData);
      }
    
      DeleteProduct(id: string) {
        return this.http.delete(environment.apiBaseURI + '/Product/' + id);
      }
    
      GetProduct() {
        return this.http.get(environment.apiBaseURI + '/Product');
      }

}