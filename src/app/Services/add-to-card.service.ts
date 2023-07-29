import { Injectable } from '@angular/core';
import { DetailProduct } from '../Models/DetailsProduct';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class AddToCardService {
  favoris:Product[]=[]
  panier: DetailProduct[]= [];
  total: number = 0;
  constructor() { }

  add(product: Product){
    let flag =false;
    for (let index = 0; index < this.panier.length; index++) {
      const element = this.panier[index];
      if(element.item.id === product.id){
        this.panier[index].quantity++;
        this.panier[index].price += product.price;
        flag = true;
      }
    }
    if(!flag)
      this.panier.push(new DetailProduct(product,1, product.price));
    this.calculateTotal();
  }
  calculateTotal(){
    this.total=0;
    for (let index = 0; index < this.panier.length; index++) {
      const element = this.panier[index];
      this.total += element.price;
    }
}


removeItem(item: DetailProduct) {
  const index = this.panier.findIndex((o) => o.item.id === item.item.id);
  if (index > -1) {
    this.panier.splice(index, 1);
    this.calculateTotal();
  }
}
addQuantity(item: DetailProduct){
  const index = this.panier.findIndex((o) => o.item.id === item.item.id);
  for (let index = 0; index < this.panier.length; index++) {
    const element = this.panier[index];
    if(element.item.id === item.item.id){
      this.panier[index].quantity++;
      this.panier[index].price = item.item.price*this.panier[index].quantity;
      this.calculateTotal();
    }

}
}

subQuantity(item: DetailProduct){
  const index = this.panier.findIndex((o) => o.item.id === item.item.id);
  for (let index = 0; index < this.panier.length; index++) {
    const element = this.panier[index];
    if(element.item.id === item.item.id){
      if(element.quantity > 1){
      this.panier[index].quantity--;
      this.panier[index].price = item.item.price*this.panier[index].quantity;
      this.calculateTotal();
      }

    }

}

}


addtofav(product: Product){
  let flag =false;
  for (let index = 0; index < this.favoris.length; index++) {
    const element = this.favoris[index];
    if(element.id === product.id){
      flag = true;
    }
  }
  if(!flag)
    this.favoris.push(product);
}
removeItemFav(item: Product) {
  const index = this.favoris.findIndex((o) => o.id === item.id);
  if (index > -1) {
    this.favoris.splice(index, 1);
  }
}
}

