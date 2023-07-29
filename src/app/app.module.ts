import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { AuthComponent } from './auth/auth.component';
import { PanierComponent } from './components/panier/panier.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfilComponent } from './profil/profil.component';
import { RegistrationComponent } from './registration/registration.component';
import { FavorisComponent } from './favoris/favoris.component';
const appRoutes:Routes =[
  {path :'produits', component: ListProductComponent},
  {path :'produits/:id', component: DetailProductComponent},
  {path :'authentification', component: AuthComponent},
  {path :'details', component:ListProductComponent},
  {path :'panier', component: PanierComponent},
  {path :'favoris', component: FavorisComponent},
  {path :'registration', component: RegistrationComponent},
  {path :'user',component:UserComponent},
  {path :'payement',component:PaymentComponent},
  {path :'profil',component:ProfilComponent},
  {path :'', component:ListProductComponent},
  {path :'**', component:ListProductComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ListProductComponent,
    ProductItemComponent,
    DetailProductComponent,
    AuthComponent,
    PanierComponent,
    FooterComponent,
    UserComponent,
    PaymentComponent,
    ProfilComponent,
    RegistrationComponent,
    FavorisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
