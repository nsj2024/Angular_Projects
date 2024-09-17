import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  productForm = new FormGroup({
    productid: new FormControl('', [Validators.required, Validators.minLength(4)]),
    brand: new FormControl(''),
    qty: new FormControl(0, Validators.min(1)),
    price: new FormControl(0),
    description: new FormControl(''),

  });

  onSubmit(myForm : FormGroup) {

    console.warn(myForm.value);

    // console.error(this.productForm);
    // console.warn(this.productForm.value);
    // console.log(this.productForm.controls['price'].value);

  }

}
