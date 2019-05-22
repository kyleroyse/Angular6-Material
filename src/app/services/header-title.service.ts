import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {
  public title = new BehaviorSubject('title');

  constructor() { }

  setTitle(title: string) {
    this.title.next(title);
  }

}
