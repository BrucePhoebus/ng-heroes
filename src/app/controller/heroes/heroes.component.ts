import { Component, OnInit } from '@angular/core';

import { Hero }  from '../../entity/hero';
import { HeroService } from '../../service/hero.service'

/*
*  英雄指南系列组件
* */

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(
      // 注入HeroService，创建一个HeroService单例对象：heroService
      private heroService: HeroService
  ) {
  }

  ngOnInit() {
    // 初始化时获取英雄数据，创建完HeroesComponent后调用
    this.getHeroes();
  }

  // 从hero服务中获取英雄数据
  getHeroes(): void {
    // subscribe订阅Observable的服务
    this.heroService.getHeroes().subscribe(
        heroes => this.heroes = heroes
    );
  }

  // 添加英雄
  addHero(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    this.heroService.addHero(name).subscribe(
        hero => this.heroes.push(hero)
    );
  }

  // 删除英雄
  deleteHero(hero) {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
