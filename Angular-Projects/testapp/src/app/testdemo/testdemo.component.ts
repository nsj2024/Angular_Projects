import { Component } from '@angular/core';
import { ɵSharedStylesHost } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-testdemo',
  templateUrl: './testdemo.component.html',
  styleUrls: ['./testdemo.component.css']
})
export class TestdemoComponent {

  calculateTotalSales(salesData: Observable<Sales[]>): Observable<number>{
    return salesData.pipe(map(sales) => 
    salesData.reduce((total, sale) => 
    total + sale.sale(Total, 0)));
  }

  calculateTotalCashSale(salesData: Observable<Sales[]>): Observable<number>{
     return salesData.pipe(
       map((sales) =>
       salesData.filter(sale) => !salesData.creditCard)
     )

     calculateTotalCreditSale(salesData: Observable<Sale[]>): Observable<number>{
       return salesData.pipe(
         map((sales) =>
         sales.filter((sale) => sales.creditCard).reduce((total,sale) => total + sale.saleTotal, 0))
       )
     }


  }
}

return salesData.pipe(map((sales) => sales.reduce((total, sale) => total + sale.salesTotal, 0)));
return salesData.pipe(map((sales) => sales.filter((sale) => !sale.creditCard).reduce((total, sale) => total + sale.salesTotal,0)));
return salesData.pipe(map((sales) => sales.filter((sale) => sale.creditCard).reduce((total, sale) => total + sale.salesTotal,0)));


return salesData.pipe(map((sales) => sales.reduce((total, sale) => total + sale.salesTotal,0)));

return salesData.pipe(map((sales) => sales.filter((Sales) => !sales.creditCard).reduce((total, sale) => total +sale.salesTotal,0)));


return salesData.pipe(map((Sales) => Sales.reduce((Total, sale) => total + sale.salesTotal,0)))

return salesData.pipe(map((sales) => sales.filter((sale) => !sale.creditCard).reduce((tota, sale) => total + sale.salesTotal, 0)));
return saleData.pipe(map((sales) => ((sales.filter((Sales) => sales.creditCard).reduce((totlal, sale) . =)))))