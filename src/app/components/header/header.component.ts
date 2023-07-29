import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCardService } from 'src/app/Services/add-to-card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  title = 'MyApp';

  constructor(public addS: AddToCardService,public router:Router ) {}

  ngOnInit():void {


  }

  login(){
    this.router.navigateByUrl("user");
  }
}

