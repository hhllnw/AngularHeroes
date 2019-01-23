import {Component, OnInit} from '@angular/core';
import {HeroModel} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: HeroModel[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    // this.heroes = temp_heroes;
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
