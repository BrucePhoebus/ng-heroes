import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule, AlertModule, AccordionModule } from 'ngx-bootstrap';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './controller/heroes/heroes.component';
import { HeroDetailComponent } from './controller/hero-detail/hero-detail.component';
import { MessagesComponent } from './controller/messages/messages.component';
import { DashboardComponent } from './controller/dashboard/dashboard.component';
import { HeroSearchComponent } from './controller/hero-search/hero-search.component';
import { HeroListComponent } from './controller/heroes/hero-list/hero-list.component';
import { HeaderComponent } from './controller/header/header.component';
import { NavHeroComponent } from './controller/left-nav-hero/nav-hero.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TestBootstrapNgxComponent } from './controller/test-bootstrap-ngx/test-bootstrap-ngx.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
        HeroSearchComponent,
        HeroListComponent,
        HeaderComponent,
        NavHeroComponent,
        TestBootstrapNgxComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            // 接受一个 InMemoryDataService 类（初期的内存数据库）作为参数
            InMemoryDataService,
            { dataEncapsulation: false }
        ),
        TabsModule.forRoot(),
        AlertModule.forRoot(),
        AccordionModule.forRoot(),
        TooltipModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
