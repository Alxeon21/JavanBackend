import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  
  activePage: string = "";
  activeSubPage: string = "";
  openModal : boolean = false;
  nameModal : string = "";
  dataModal : any;
  inapp: boolean = false;
  activePageDetail: any={};

  constructor() { }

  set(page: string,data:any) {
    this.activePage=page;
    this.activeSubPage=data.data.subtitle;
    this.inapp=data.data.inapp;
    console.log('set detail page',data);
    this.activePageDetail={
      data:data.data,
      pageTitle:data.pageTitle,
      path:data.path,
    };
    console.log('set detail page set',this.activePageDetail);
  }

  openCLoseModal(nameModal:string="",dataModal:any=undefined){
    this.nameModal=nameModal;
    this.dataModal=dataModal;
    this.openModal=!this.openModal;
  }

  clear() {
    this.activePage = "";
  }
}
