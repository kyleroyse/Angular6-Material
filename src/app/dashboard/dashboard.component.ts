import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '../services/header-title.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private headerService: HeaderTitleService) { }

  ngOnInit() {
    this.headerService.setTitle('Dashboard');
  }

     
}
