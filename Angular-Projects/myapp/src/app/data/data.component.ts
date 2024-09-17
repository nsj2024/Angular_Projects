import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  products: Product[] = [];
  searchItem='';

  constructor(private service: DataService) {
    this.products = service.getProducts();
    console.log(this.products);

   
  }

  product: Product = new Product("","",0,0,"");

  onSubmit() {

    console.log(this.products);
    this.products.push(this.product);

  }


 
  get count(): number {
    return this.filteredProducts().length;
  }



  filteredProducts(): Product[] {
    const search = this.searchItem.toLowerCase();

    return this.products.filter(product => 
      product.brand.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search)
    );
    
  }
}
