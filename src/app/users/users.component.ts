import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '../services/header-title.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private headerService: HeaderTitleService) { }

  ngOnInit() {
    this.headerService.setTitle('Users');
  }

}
