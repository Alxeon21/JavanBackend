import { Component, OnInit } from '@angular/core';
import { header} from '../../component/table/table';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  header:header[]=[
    {
      key: 'id',
      subkey: 'id',
      name: 'Id',
      dascription: '',
      sort: true,
      filter: false,
      click: true,
      type: 'text',
      set: {},
      class: ''
    },
    {
      key: 'name',
      subkey: 'name',
      name: 'Name',
      dascription: '',
      sort: true,
      filter: false,
      click: true,
      type: 'text',
      set: {},
      class: ''
    },{
      key: 'type',
      subkey: 'type',
      name: 'Type',
      dascription: '',
      sort: true,
      filter: false,
      click: true,
      type: 'text',
      set: {},
      class: ''
    },
    {
      key: 'details',
      subkey: 'details',
      name: 'Details',
      dascription: '',
      sort: true,
      filter: false,
      click: true,
      type: 'text',
      set: {},
      class: ''
    }
  ];

  tableData=[
    {
      id:"1234",
      name:"Lorem 1",
      type:"Dolor 1",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      id:"1234",
      name:"Lorem 2",
      type:"Dolor 2",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      id:"1234",
      name:"Lorem 3",
      type:"Dolor 3",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      id:"1234",
      name:"Lorem 4",
      type:"Dolor 4",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      id:"1234",
      name:"Lorem 5",
      type:"Dolor 5",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      id:"1234",
      name:"Lorem",
      type:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      id:"1234",
      name:"Lorem",
      type:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      id:"1234",
      name:"Lorem",
      type:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      id:"1234",
      name:"Lorem",
      type:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      id:"1234",
      name:"Lorem",
      type:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      id:"1234",
      name:"Lorem",
      type:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      id:"1234",
      name:"Lorem",
      type:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
  ];

  constructor(public pageService:PageService) { }

  ngOnInit(): void {
  }

  openModal(event:any){
    console.log('click item',event);
    this.pageService.openCLoseModal(event.page,event.data);
  }

}
