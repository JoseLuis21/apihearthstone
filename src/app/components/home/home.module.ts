import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [SearchCardComponent, HomeComponent, CardComponent, BannerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
