import {Component, Input, OnInit} from '@angular/core';
import {HeroModel} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: HeroModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) {
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  back(): void {
    this.location.back();
  }
}
