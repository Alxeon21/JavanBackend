import { Component, OnInit,Input } from '@angular/core';
import { header} from '../../component/table/table';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  
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
      key: 'serial_number',
      subkey: 'serial_number',
      name: 'Serial Number',
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
      key: 'current_status',
      subkey: 'current_status',
      name: 'Current Status',
      dascription: '',
      sort: true,
      filter: false,
      click: true,
      type: 'text-custom',
      set: {Stopped:'bg-danger',Maintenance:'bg-warning',Running:'bg-success'},
      class: 'btn-status'
    }
  ];

  tableData=[
    {
      id:"1234",
      name:"Lorem 1",
      serial_number:"Ipsum",
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem 1",
      current_status:"Stopped",
      downtime_status:"up90",
      downtime:95
    },
    {
      id:"1234",
      name:"Lorem 2",
      serial_number:"Ipsum",
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem 2",
      current_status:"Maintenance",
      downtime_status:"up60",
      downtime:75
    },
    {
      id:"1234",
      name:"Lorem 3",
      serial_number:"Ipsum",
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem 3",
      current_status:"Running",
      downtime_status:"up0",
      downtime:35
    },
    {
      id:"1234",
      name:"Lorem 4",
      serial_number:"Ipsum",
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem 4",
      current_status:"Running",
      downtime_status:"up0",
      downtime:35
    },
    {
      id:"1234",
      name:"Lorem 5",
      serial_number:"Ipsum",
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem 5",
      current_status:"Running",
      downtime_status:"up0",
      downtime:35
    },
    {
      id:"1234",
      name:"Lorem",
      serial_number:"Ipsum",
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Running",
      downtime_status:"up0",
      downtime:35
    },
    {
      id:"1234",
      name:"Lorem",
      serial_number:"Ipsum",
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Running",
      downtime_status:"up0",
      downtime:35
    },
    {
      id:"1234",
      name:"Lorem",
      serial_number:"Ipsum",
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Running",
      downtime_status:"up0",
      downtime:35
    },
    {
      id:"1234",
      name:"Lorem",
      serial_number:"Ipsum",
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Running",
      downtime_status:"up0",
      downtime:35
    },
    {
      id:"1234",
      name:"Lorem",
      serial_number:"Ipsum",
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Running",
      downtime_status:"up0",
      downtime:35
    },
    {
      id:"1234",
      name:"Lorem",
      serial_number:"Ipsum",
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Running",
      downtime_status:"up0",
      downtime:35
    },
    {
      id:"1234",
      name:"Lorem",
      serial_number:"Ipsum",
      type:"Dolor",
      location:"Sit",
      model_number:"Amet",
      manufacturer:"Lorem",
      current_status:"Running",
      downtime_status:"up0",
      downtime:35
    }
  ];

  tableSearch=true;
  tableDownload=true;
  addButton="Add Assets";

  constructor(public pageService:PageService) { }

  ngOnInit(): void {
    if(this.mode=='inactive'){
      this.tableSearch=false;
      this.tableDownload=false;
      this.addButton="";

      this.header=[
        {
          key: 'name',
          subkey: 'name',
          name: 'Assets Name',
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
          key: 'current_status',
          subkey: 'current_status',
          name: 'Current Status',
          dascription: '',
          sort: true,
          filter: false,
          click: true,
          type: 'text-custom',
          set: {Stopped:'bg-danger',Maintenance:'bg-warning',Running:'bg-success'},
          class: 'btn-status'
        }
      ];

      this.tableData=this.tableData.slice(0, 5).map(item => {
        if (item.current_status === 'Running') {
          item.current_status = 'Stopped';
          return item;
          /* This is the part where I need the logic */
        } else {
          return item;
        }
      });
    }
    else if(this.mode=='maintenance'){
      this.tableSearch=false;
      this.tableDownload=false;
      this.addButton="";

      this.header=[
        {
          key: 'name',
          subkey: 'name',
          name: 'Assets Name',
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
          key: 'downtime_status',
          subkey: 'downtime',
          name: 'Down Time',
          dascription: '',
          sort: true,
          filter: false,
          click: true,
          type: 'percentage',
          set: {up90:'bg-danger',up60:'bg-warning',up0:'bg-success'},
          class: 'btn-status'
        }
      ];

      this.tableData=this.tableData.slice(0, 5).map(item => {
        if (item.current_status === 'Running') {
          item.current_status = 'Stopped';
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
