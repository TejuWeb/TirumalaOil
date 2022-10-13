import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




productForms : FormArray = this.fb.array([]);
productList = [];
  productForm!: FormGroup;


  constructor(private fb: FormBuilder,private service: ProductService){ 
   
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

 

this.service.GetProduct()
.subscribe(res => this.productList = res as []);

    this.addProductForm();

  }

  onSubmit(){
console.log(this.productForm.value);
  }
  
addProductForm(){
  this.productForms.push(this.fb.group({
    productID : [0],
    productName : [''],
    productCatogory : [''],
    productSaleType : [''],
  productPackType : [''],
  productPackSize : [''],
    productMRPperCase : [''],
    productUnit : [''],
  }))
}


}
