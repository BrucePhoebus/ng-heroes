import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './controller/heroes/heroes.component';
import { HeroDetailComponent } from './controller/hero-detail/hero-detail.component';
import { MessagesComponent } from './controller/messages/messages.component';
import { DashboardComponent } from './controller/dashboard/dashboard.component';
import { HeroSearchComponent } from './controller/hero-search/hero-search.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
        HeroSearchComponent
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
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
