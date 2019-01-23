import {Component, OnInit} from '@angular/core';
import {HeroModel} from '../hero';
import {temp_heroes} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selecteHero: HeroModel; // = {name: 'Windowstorm', id: 1};
  heroes: HeroModel[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    // this.heroes = temp_heroes;
    this.getHeroes();
  }

  onSelect(hero: HeroModel): void {
    this.selecteHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
