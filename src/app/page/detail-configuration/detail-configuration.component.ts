import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detail-configuration',
  templateUrl: './detail-configuration.component.html',
  styleUrls: ['./detail-configuration.component.scss']
})
export class DetailConfigurationComponent implements OnInit {
  @Input() dataSend:any;

  constructor() { }

  ngOnInit(): void {
  }

}
