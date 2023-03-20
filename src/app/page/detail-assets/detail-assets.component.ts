import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detail-assets',
  templateUrl: './detail-assets.component.html',
  styleUrls: ['./detail-assets.component.scss']
})
export class DetailAssetsComponent implements OnInit {
  @Input() dataSend:any;

  constructor() { }

  ngOnInit(): void {
    console.log('detail data',this.dataSend);
  }

}
