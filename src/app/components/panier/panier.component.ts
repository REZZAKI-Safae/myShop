import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetailProduct } from 'src/app/Models/DetailsProduct';
import { Product } from 'src/app/Models/Product';
import { AddToCardService } from 'src/app/Services/add-to-card.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  product!: Product;


  constructor(public addS: AddToCardService,private router: Router) {}
  remove(pd:DetailProduct): void {
    this.addS.removeItem(pd);
  }
  addtocard(pd:DetailProduct):void {
    this.addS.addQuantity(pd);

  }
  substractQuantite(pd:DetailProduct){
    this.addS.subQuantity(pd);
    this.router.navigate(['/panier']);
  }
  authentifier(){
    this.router.navigateByUrl("user");
  }

}
