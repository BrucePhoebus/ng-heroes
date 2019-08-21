import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../entity/hero'
import { HeroService }  from '../../service/hero.service';

/*
* 英雄详情组件
* */

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
      private route: ActivatedRoute,  // 支持路由，获取路由信息
      private heroService: HeroService, // 调用hero服务，获取英雄数据
      private location: Location  // 用来导航回上个视图
  ) {
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

  // 返回上一个视图
  goBack() {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
  }

}
