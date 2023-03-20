import { Component, OnInit, Input } from '@angular/core';
import { header} from '../../component/table/table';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-sparepart',
  templateUrl: './sparepart.component.html',
  styleUrls: ['./sparepart.component.scss']
})
export class SparepartComponent implements OnInit {
 
  @Input() title:string="";
  @Input() mode:string="";

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
    },
    
    {
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
      key: 'location',
      subkey: 'location',
      name: 'Location',
      dascription: '',
      sort: true,
      filter: false,
      click: true,
      type: 'text',
      set: {},
      class: ''
    },
    {
      key: 'model_number',
      subkey: 'model_number',
      name: 'Model Number',
      dascription: '',
      sort: true,
      filter: false,
      click: true,
      type: 'text',
      set: {},
      class: ''
    },
    {
      key: 'manufacturer',
      subkey: 'manufacturer',
      name: 'Manufacturer',
      dascription: '',
      sort: true,
      filter: false,
      click: true,
      type: 'text',
      set: {},
      class: ''
    },
    {
      key: 'quantity',
      subkey: 'quantity',
      name: 'Quantity',
      dascription: '',
      sort: true,
      filter: false,
      click: true,
      type: 'text',
      set: {},
      class: ''
    },
    {
      key: 'current_status',
      subkey: 'current_status',
      name: 'Current Status',
      dascription: '',
      sort: true,
      filter: false,
      click: true,
      type: 'text-custom',
      set: {Empty:'bg-danger','< 3':'bg-warning',Sufficient:'bg-success'},
      class: 'btn-status'
    }
  ];

  tableData=[
    {
      id:"1234",
      name:"Lorem 1",
      quantity:0,
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Empty"
    },
    {
      id:"1234",
      name:"Lorem 2",
      quantity:2,
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"< 3"
    },
    {
      id:"1234",
      name:"Lorem 3",
      quantity:100,
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Sufficient"
    },
    {
      id:"1234",
      name:"Lorem 4",
      quantity:100,
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Sufficient"
    },
    {
      id:"1234",
      name:"Lorem 5",
      quantity:100,
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Sufficient"
    },
    {
      id:"1234",
      name:"Lorem",
      quantity:100,
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Sufficient"
    },
    {
      id:"1234",
      name:"Lorem",
      quantity:100,
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Sufficient"
    },
    {
      id:"1234",
      name:"Lorem",
      quantity:100,
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Sufficient"
    },
    {
      id:"1234",
      name:"Lorem",
      quantity:100,
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Sufficient"
    },
    {
      id:"1234",
      name:"Lorem",
      quantity:100,
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Sufficient"
    },
    {
      id:"1234",
      name:"Lorem",
      quantity:100,
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Sufficient"
    },
    {
      id:"1234",
      name:"Lorem",
      quantity:100,
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Sufficient"
    }
  ];

  tableSearch=true;
  tableDownload=true;
  addButton="Add Sparepart";

  constructor(public pageService:PageService) { 
    
  }

  ngOnInit(): void {
    if(this.mode=='empty'){
      this.tableSearch=false;
      this.tableDownload=false;
      this.addButton="";

      this.header=[
        {
          key: 'name',
          subkey: 'name',
          name: 'Sparepart Name',
          dascription: '',
          sort: true,
          filter: false,
          click: true,
          type: 'text',
          set: {},
          class: ''
        },{
          key: 'location',
          subkey: 'location',
          name: 'Location',
          dascription: '',
          sort: true,
          filter: false,
          click: true,
          type: 'text',
          set: {},
          class: ''
        },
        {
          key: 'current_status',
          subkey: 'current_status',
          name: 'Current Status',
          dascription: '',
          sort: true,
          filter: false,
          click: true,
          type: 'text-custom',
          set: {Empty:'bg-danger','< 3':'bg-warning',Sufficient:'bg-success'},
          class: 'btn-status'
        }
      ];

      this.tableData=this.tableData.slice(0, 5).map(item => {
          if (item.current_status === 'Sufficient') {
            item.current_status = 'Empty';
            return item;
            /* This is the part where I need the logic */
          } else {
            return item;
          }
      });
    }
  }

  openModal(event:any){
    console.log('click item',event);
    this.pageService.openCLoseModal(event.page,event.data);
  }

}
