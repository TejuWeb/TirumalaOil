import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../shared/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


products: Product[] = [];


productForms : FormArray = this.fb.array([]);
productList = [];
  productForm!: FormGroup;


  constructor(private fb: FormBuilder,private productservice: ProductService){ 
   
   }
  

  ngOnInit(): void {

    this.productForm = new FormGroup({
      productName: new FormControl(),
      productCategory: new FormControl(),
      productSaleType: new FormControl(),
      productPackType: new FormControl(),
      productPackSize: new FormControl(),
      productMRPperCase: new FormControl(),
      productUnit: new FormControl()
  });

 

this.productservice.getAllProducts()
.subscribe((res) => this.products = res as []);
  }

}




