import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { BannerComponent } from './components/banner/banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http'; 



@NgModule({
  declarations: [HomeComponent, CardComponent, BannerComponent, SearchCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
