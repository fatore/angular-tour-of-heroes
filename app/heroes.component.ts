import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heros.component.html',
  styleUrls: ['heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
      private router: Router,
      private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  goToDetail(): void {
    let link = ['/detail', this.selectedHero.id];
    this.router.navigate(link);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
  }
 }
