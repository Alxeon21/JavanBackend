import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-sparepart',
  templateUrl: './detail-sparepart.component.html',
  styleUrls: ['./detail-sparepart.component.scss']
})
export class DetailSparepartComponent implements OnInit {
  @Input() dataSend:any;

  constructor() { }

  ngOnInit(): void {
  }

}
