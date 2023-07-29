import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCardService } from '../Services/add-to-card.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(public addS: AddToCardService,private router: Router) {}
  payer(){
    this.router.navigateByUrl("payement");
  }
  register(){
    this.router.navigateByUrl("registration");
  }
}

