export class Product{

    productId: string;
    description: string;
    qty: number;
    price: number;
    brand: string;

    constructor(productId: string, description: string, qty: number, price: number, brand: string) {
        this.productId = productId;
        this.description = description;
        this.qty = qty;
        this.price = price;
        this.brand = brand;
    }
}