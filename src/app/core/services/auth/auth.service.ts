import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    // Set data on localStorage
    setCardLoggedIn() {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Basic ` +btoa(`${environment.API_CLIENT}:${environment.API_SECRET}`)
        })
      };
      this.http.get<any>(`https://us.battle.net/oauth/token?grant_type=client_credentials`,httpOptions).subscribe(resp => {
         localStorage.setItem('auth', JSON.stringify(resp));
      });
      console.log('saved on localStorage');
    }
    // get data on localStorage
    getCardLoggedIn() {
      if (localStorage.getItem('auth')) {
        return JSON.parse(localStorage.getItem('auth'));
      } else {
        this.setCardLoggedIn();
      }
    }
    // Optional: clear localStorage
    clearLocalStorage() {
      localStorage.clear();
    }

    // Check Login: 
    checkLocalStorage() {
      if (!localStorage.getItem('auth')) {
        this.setCardLoggedIn();
      } else {
        console.log('localStorage ready!');
      }
    }
}
