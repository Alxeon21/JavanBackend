import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { PageService } from '../../services/page.service';
import { TREE_DATA } from './mock-sidebar';
import { Menu } from './sidebar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu=TREE_DATA;
  
  btnhome:Menu={
    key: "Home",
    name: "Home",
    dascription: "",
    src: "/home",
  };

  btnlogin:Menu={
    key: "Login",
    name: "Login",
    dascription: "",
    src: "/login",
  };
  
  constructor(public sessionService:SessionService,public pageService:PageService, private router:Router) { 
    
  }

  ngOnInit(): void {
  }

  goTo(menu:Menu){
    this.router.navigate([menu.src]).then((success)=>{
      // success logic will go here  ..
        console.log('success link',success);
      })
      .catch((error)=>{
      // logic goes here  //
        console.log('fail link',error);
      });
  }

}
