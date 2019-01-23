import {Component, OnInit} from '@angular/core';
import {HeroModel} from '../hero';
import {temp_heroes} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selecteHero: HeroModel; // = {name: 'Windowstorm', id: 1};
  heroes: HeroModel[];

  constructor() {
  }

  ngOnInit() {
    this.heroes = temp_heroes;
  }

  onSelect(hero: HeroModel): void {
   this.selecteHero = hero;
  }

}
