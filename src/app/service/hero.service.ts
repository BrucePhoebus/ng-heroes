import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../entity/hero'
// import { HEROES } from '../controller/heroes/mock-heroes'
import { MessageService } from './message.service';

/*
* 英雄服务
* */

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//  @Injectable 装饰器添加元数据
@Injectable({
  // 用根注入器将服务注册成为提供商，注册成功后会创建一个单一共享的实例
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
      private http: HttpClient,
      // 将MessageService服务注入到HeroService服务中
      private messageService: MessageService
  ) {
  }

  // 添加英雄服务
  addHero(name: string): Observable<Hero> {
    let countHero = 0;
    this.getHeroes().subscribe(
        heroes => countHero = heroes.length
    );
    let hero = {
      id: countHero++,
      name: name
    };
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
        tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
    );
  }

  /*
  * getHeroes()提供获取所有英雄数据的服务
  * Observable可观察，需要被订阅，跟of结合实现异步编程(类似promise效果)
  * */
  getHeroes(): Observable<Hero[]> {
    // 在获取所有英雄数据的时候发送一条信息
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
            tap(_ => this.log('fetched heroes')),
            catchError(this.handleError<Hero[]>('getHeroes', []))
        );
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
    );
  }

  // 删除英雄服务
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted hero id=${id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  // 关键字搜索英雄
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found heroes matching "${term}"`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
        .pipe(
            map(heroes => heroes[0]), // returns a {0|1} element array
            tap(h => {
              const outcome = h ? `fetched` : `did not find`;
              this.log(`${outcome} hero id=${id}`);
            }),
            catchError(this.handleError<Hero>(`getHero id=${id}`))
        );
  }

  private log(message: string) {
    this.messageService.addMessage(`HeroService: ${message}`);
  }

  /*
  * 通用化handleError
  * handleError报告异常信息，返回给 catchError 返回一个错误处理函数(安全值)，使应用能正常工作
  * */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
