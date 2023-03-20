import { Component, OnInit,Input } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() openModal:boolean=false;
  @Input() dataModal:any;
  @Input() nameModal:string="";

  constructor(public pageService:PageService) { }

  ngOnInit(): void {
    console.log('dataModal',this.dataModal);
  }

}
