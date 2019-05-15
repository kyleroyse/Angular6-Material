import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
/********************* Mat Table *****************************************/
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  /********************************************************************* */

  heroes$ = new BehaviorSubject<{[name: string]: any}>({
    'Hammerer Maccabeus': {
      name: 'Hammerer Maccabeus',
      types: 'Holy/Fire',
      attack: 1,
      defense: 1,
      speed: 1,
      healing: 1,
      recovery: 1,
      health: 5
    },
    'Ethereal Moodmorph': {
      name: 'Ethereal Moodmorph',
      types: 'Water/Fire',
      attack: 1,
      defense: 1,
      speed: 1,
      healing: 1,
      recovery: 1,
      health: 5
    }
  });

  tableDataSource$ = new BehaviorSubject<any[]>([]);
  displayedColumns$ = new BehaviorSubject<string[]>([
    'name',
    'types',
    'attack',
    'defense',
    'speed',
    'healing',
    'recovery',
    'health',
    'levelUp'
  ]);


  constructor() { }

  ngOnInit() {
    this.heroes$.subscribe(changedHeroData => {
      this.tableDataSource$.next(Object.values(changedHeroData));
    });
  }

  levelUp(heroName: string) {
    const updatedHero = { ... this.heroes$.value[heroName] };
    updatedHero.attack++;
    updatedHero.defense++;
    updatedHero.speed++;
    updatedHero.recovery++;
    updatedHero.healing++;
    updatedHero.health++;

    const newHeroData = { ... this.heroes$.value };
    newHeroData[heroName] = updatedHero;

    this.heroes$.next(newHeroData);
  }

}
