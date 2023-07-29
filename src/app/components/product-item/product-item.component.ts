import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DetailProduct } from 'src/app/Models/DetailsProduct';
import { Product } from 'src/app/Models/Product';
import { AddToCardService } from 'src/app/Services/add-to-card.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
@Input() product!: Product;
constructor(private addS: AddToCardService,private router: Router){}
addtocard(){
  this.addS.add(this.product);
  console.log(this.addS.panier);
}
addtofavoris(){
  this.addS.addtofav(this.product);
}


detail(){
  this.router.navigateByUrl("produits/"+this.product.id);
}

}
