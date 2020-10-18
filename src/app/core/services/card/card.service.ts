import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';
import { Auth } from '../../models/auth';
import { Search } from '../../models/search';
import { Observable } from 'rxjs';
import { SearchResult } from '../../models/response/search-result';
import { Card } from '../../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient, private authService : AuthService) {

  }

  getFindAllCards()
  {    
    return this.http.get<any>(`${environment.HEARTHSTONE_API}?locale=es_Es&access_token=${this.authService.getCardLoggedIn().access_token}&pageSize=11`);
  }

  getFindIdCard(id : string)
  {
    return this.http.get<any>(`${environment.HEARTHSTONE_API}/${id}?locale=es_Es&access_token=${this.authService.getCardLoggedIn().access_token}`);
  }

  findCardsByIds(ids : any)
  {
    return this.http.get<any>(`${environment.HEARTHSTONE_API}/?collectible=${ids}?locale=es_Es&access_token=${this.authService.getCardLoggedIn().access_token}`);
  }

  getFindNameCard(name : string)
  {
    return this.http.get<any>(`${environment.HEARTHSTONE_API}?locale=es_Es&textFilter=${name}&access_token=${this.authService.getCardLoggedIn().access_token}`);
  }
  
  getFindClassCard(classname : string)
  {
    return this.http.get<any>(`${environment.HEARTHSTONE_API}?locale=es_Es&class=${classname}&access_token=${this.authService.getCardLoggedIn().access_token}&pageSize=17`);
  }


  findByFiltersAndPage(search: Search, page: number): Observable<SearchResult<Card>> {
    let url = `${environment.HEARTHSTONE_API}?locale=es_Es&access_token=${this.authService.getCardLoggedIn().access_token}&`;
    if (search) {
      if (search.name !== '') {
        url += `textFilter=${search.name}`;
      }
      if (search.classcard) {
        url += url.includes('=') ? `&class=${search.classcard}` : `class=${search.classcard}`;
      }
    } else {
      url += `page=${page}`;
    }
    return this.http.get<any>(url);
  }


}
