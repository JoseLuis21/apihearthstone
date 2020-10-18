import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';
import { Auth } from '../../models/auth';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient, private authService : AuthService) {

  }

  getFindAllCards()
  {    
    return this.http.get<any>(`${environment.HEARTHSTONE_API}?locale=es_ES&access_token=${this.authService.getCardLoggedIn().access_token}`);
  }

  getFindIdCard(id : string)
  {
    return this.http.get<any>(`${environment.HEARTHSTONE_API}?${id}?locale=es_ES&access_token=${this.authService.getCardLoggedIn().access_token}`);
  }
}
