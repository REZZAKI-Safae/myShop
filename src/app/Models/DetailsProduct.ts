import { Product } from "./Product";
export class DetailProduct {
    constructor(public item:Product, public quantity: number, public price:number) {

     }

/*     public get item() : Product {
        return this._item;
    }
    public get price():number{
        return this._price;
    }
    public get quantity():number{
        return this._quantity;
    }

    public set item(item: Product) {
        this._item = item;
    }
    public set price(price:number){
        this._price = price;
    }
    public set quantity(quantity:number){
        this._quantity = quantity;
    } */


}
