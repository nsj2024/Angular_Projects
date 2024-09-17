import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "Initial Parent Title";

  constructor() {
    console.log('AppComponent constructor is called....');
  }

  changeTitle() {
    this.title = "Updated Parent Title";
    console.log('Title changed in Parent Component');
  }
  ngAfterContentInit(): void{
    console.log('ngAfterContentInit()called.... from Parent');
  }





  // title = 'Hrithik Choudhary';
  location ='Trivandrum';
  company = 'UST';
  productid = 123;
  description = 'Dual Camera Dual Sim Mega pixle 256 GB Memory';
  available = true;
  evenColor ='orange'
  oddColor='green'

  orderDate : Date = new Date;
  
  qty =100;
  orderqty = 0;
  instock = this.available;
 isOrderedQtyAvailable =(this.orderqty < this.qty ) ? true: false; 

//  get isOrderedQtyAvailable(): boolean {
//   return this.orderqty < this.qty; // Check if the ordered quantity is less than the available quantity
// }

deliverColor = 'red';

printOrder(input : any ):void{
  console.log(input, 'Order Placed');
}



products = [
  { productId: "1234", description: "Mobile", price: "70000" },
  { productId: "123", description: "Laptop", price: "75000" },
  { productId: "1235", description: "Ipad", price: "30000" },
  { productId: "1234", description: "iPhone15", price: "90000" },
  { productId: "1234", description: "TV", price: "50000" },
  { productId: "1236", description: "LED TV", price: "50000" }
];

bgColor(color: string) {
  document.body.style.backgroundColor = color;
}
}


