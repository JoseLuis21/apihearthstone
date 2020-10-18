import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { UtilFunctions } from 'src/app/utils/CommonsUtils';
import Swiper from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor()
  {
  }

  ngOnInit() {

  }
}
