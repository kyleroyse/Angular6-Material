import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '../services/header-title.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor(private headerService: HeaderTitleService) { }

  ngOnInit() {
    this.headerService.setTitle('Account Settings');
  }

}
