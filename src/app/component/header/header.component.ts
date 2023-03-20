import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public pageService:PageService, private router:Router) { }

  ngOnInit(): void {
  }

  goTo(src:string){
    this.router.navigate([src]).then((success)=>{
      // success logic will go here  ..
        console.log('success link',success);
      })
      .catch((error)=>{
      // logic goes here  //
        console.log('fail link',error);
      });
  }

}
