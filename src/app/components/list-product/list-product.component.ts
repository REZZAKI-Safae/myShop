import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  //label,id,imageurl,price
 /*produit1: Product= new Product("Tomatoes",1,"https://th.bing.com/th/id/R.7b917d4fca72f4ec782bed340a1c7e35?rik=tI3gmltRVSNBdA&pid=ImgRaw&r=0","10 dhs/Kilos");
 produit2: Product= new Product("Potatoes",2,"https://th.bing.com/th/id/OIP.WKwb_erDKaw-db10toi_RwHaE8?pid=ImgDet&w=960&h=640&rs=1","6dhs/kilo");
 produit3: Product= new Product("Lemon",3,"https://th.bing.com/th/id/R.ac40f3049d1cedea4814842672fe03db?rik=MAiEARI1auzw7w&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1591973663230-c41d5e8c335a%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8NHx8bGVtb24lMjBvcmFuZ2V8fDB8fHx8MTYxODk4ODY0Nw%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=QOr6UJ332435Dnrpxn64vZg5cz5fIrAeSPSo13AUXC4%3d&risl=&pid=ImgRaw&r=0","2dhs/lb");
 produit4: Product= new Product("Avocado",4,"https://th.bing.com/th/id/OIP.TX9MlU6OqjG9zyHGiEGe4QHaF_?pid=ImgDet&rs=1","29dhs/kilo");
 produit5: Product= new Product("Bacon",5,"https://th.bing.com/th/id/R.32fa5ca43fb725c6824e181d7b752c62?rik=Zwp6UcBvKnyWlA&pid=ImgRaw&r=0","255dhs/lb");
*/

products:Product[] = []

 constructor(private ps:ProductService){}
  ngOnInit(): void {
    //getProducts retourne un observable qu'on va stocker par la suite dans la liste de produits, grace a la promise .subscribe
    this.ps.getProducts().subscribe(
      (data)=>{
        this.products = data.products;
        console.log(data);
      }
    )
    this.ps.getAllCategories().subscribe(
      data => this.categories = data
    )

  }
  searchProduct(name:string){
    this.ps.searchProduct(name).subscribe(
      (data)=> {
        this.products=data.products;
        console.log(data);
      }
      ,(error) => {
        console.log(error, 'Something went wrong');
      }
    );
  }


  categories: any[] = [];
  currenetCategory:string = 'All Categories';

  filterProductCategory(category:string){
    this.currenetCategory = category.charAt(0).toUpperCase() + category.slice(1);
    this.ps.getProductByCategory(category).subscribe(
      (data)=> {
        this.products=data.products;
        console.log(data);
      }
      ,(error) => {
        console.log(error, 'Something went wrong');
      }
    );
  }




}
