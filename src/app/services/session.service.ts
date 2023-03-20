import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  name: string = "";
  picture: string = "";
  login: boolean = false;
  activeSessionDetail: object={};

  constructor() { }

  set(name: string,data:any) {
    this.name=name;
    this.picture=data.picture;
    this.login=true;

    this.activeSessionDetail=data;

  }

  clear() {
    this.name = "";
    this.picture = "";
    this.login = false;
    this.activeSessionDetail = {};
  }
}
