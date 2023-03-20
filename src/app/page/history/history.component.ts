import { Component, OnInit } from '@angular/core';
import { header} from '../../component/table/table';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  header:header[]=[
    {
      key: 'time',
      subkey: 'time',
      name: 'Time',
      dascription: '',
      sort: true,
      filter: false,
      click: false,
      type: 'text',
      set: {},
      class: ''
    },
    {
      key: 'title',
      subkey: 'title',
      name: 'Title',
      dascription: '',
      sort: true,
      filter: false,
      click: false,
      type: 'text',
      set: {},
      class: ''
    },{
      key: 'user',
      subkey: 'user',
      name: 'User',
      dascription: '',
      sort: true,
      filter: false,
      click: false,
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
      click: false,
      type: 'text',
      set: {},
      class: ''
    }
  ];

  tableData=[
    {
      time:"2023 Mar 19",
      title:"Lorem",
      user:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      time:"2023 Mar 19",
      title:"Lorem",
      user:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      time:"2023 Mar 19",
      title:"Lorem",
      user:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      time:"2023 Mar 19",
      title:"Lorem",
      user:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      time:"2023 Mar 19",
      title:"Lorem",
      user:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      time:"2023 Mar 19",
      title:"Lorem",
      user:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      time:"2023 Mar 19",
      title:"Lorem",
      user:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      time:"2023 Mar 19",
      title:"Lorem",
      user:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      time:"2023 Mar 19",
      title:"Lorem",
      user:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      time:"2023 Mar 19",
      title:"Lorem",
      user:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      time:"2023 Mar 19",
      title:"Lorem",
      user:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      id:"2023 Mar 19",
      title:"Lorem",
      user:"Dolor",
      details:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
