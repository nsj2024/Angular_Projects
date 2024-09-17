import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators, Form } from '@angular/forms';
import { Product } from '../Product';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent {

  product = new Product('','',0,0,'');

  //[x: string]: any;
  constructor(private formBuilder: FormBuilder){}

  productForm = this.formBuilder.group({

    productid: ['',[Validators.required, Validators.minLength(5)]],
    brand: [''],
    description: this.formBuilder.group({
      age:[0],
      seasons: [''],
    }),

    qty: [0],
    price:[0],
    suppliers: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  onSubmit() {

    console.error(this.productForm);
    console.error(this.productForm.value);
    console.warn(this.productForm.controls['productid'].value);

    console.error(this.productForm.controls['description'].controls['seasons'].value );
    console.log(this.productForm.controls['suppliers'].controls[0].value);

    console.log(this.product.productId = this.productForm.controls['productid'].value!);
   
 

  }

  get suppliers() {
    return this.productForm.get('suppliers') as FormArray;

  }

  addNewSupplier(){
    console.warn(this.suppliers);
    this.suppliers.push(this.formBuilder.control(''));
  }


}
