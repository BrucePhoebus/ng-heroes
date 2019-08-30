import { Component, OnInit } from '@angular/core';

import { Hero } from '../../../entity/hero';
import { HeroService } from '../hero.service';

/*
* 展示英雄列表组件
* */

@Component({
  selector: 'app-hero-list',
  // templateUrl: './hero-list.component.html',
  template: `
    <div *ngFor="let hero of heroes">
      {{hero.id}} - {{hero.name}}
    </div>`,
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];

  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }

  ngOnInit() {
  }

}
