import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { AddToCardService } from 'src/app/Services/add-to-card.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
product!: Product;
constructor(private route: ActivatedRoute,private addS: AddToCardService,private ps:ProductService){}
ngOnInit(){
 const id:number= this.route.snapshot.params['id'];
 this.ps.getProducById(id).subscribe(data => {this.product=data;console.log(this.product);});
}
addtocard(){
  this.addS.add(this.product);
  console.log(this.addS.panier);
}
}
