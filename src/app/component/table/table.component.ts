import { Component, Input,Output,Pipe,ViewChild,EventEmitter, AfterViewInit, OnInit } from '@angular/core';
import { isObject } from 'util';
import { header,filter,dataChange,onClickItem,body } from './table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableHeader!:header[];
  @Input() tableData?:any[]=[];
  @Input() tableName:string="";
  @Input() tableTitle:string="";
  @Input() tableFilter:boolean=false;
  @Input() tableSearch:boolean=false;
  @Input() tableDownload:boolean=true;
  @Input() tableSort:boolean=true;
  @Input() addButton:string="";
  @Output() dataChange = new EventEmitter<dataChange>();
  @Output() onClickItem = new EventEmitter<onClickItem>();

  constructor() { }

  ngOnInit(): void {
  }

  cekObj(myObj:any,val:string){
    if(typeof myObj[val] === 'object'){
      if(Object.keys(myObj).length>0) return true;
      else return false;
    }
    else return false;
  }

  onSubmit(key:any,element:any){
    let change:dataChange={
        mode : "item_click",
        change: key,
        data: element
    }
    this.dataChange.emit(change);
  }

  onClickedItem(clickd:boolean,data:any){
    if(clickd){
      let change:onClickItem={
          mode : "item_click",
          page:this.tableName,
          change: 'item',
          data: data
      }
      this.onClickItem.emit(change);
    }
  }

}
