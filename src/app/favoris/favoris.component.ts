import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Models/Product';
import { AddToCardService } from '../Services/add-to-card.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent {
  product!:Product;
  constructor(public addS: AddToCardService,public router:Router) {}
  remove(pd:Product): void {
    this.addS.removeItemFav(pd);
  }
  detail(){
    this.router.navigateByUrl("produits/"+this.product.id);
  }

}
