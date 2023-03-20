import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public pageService:PageService) { }

  ngOnInit(): void {
  }

}
