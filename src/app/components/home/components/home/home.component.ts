import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/card';
import { CardService } from 'src/app/core/services/card/card.service';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import Swiper from 'swiper';
import { Search } from 'src/app/core/models/search';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { SearchResult } from 'src/app/core/models/response/search-result';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardList: Card[];
  mySwiper: Swiper;
  loading: boolean = true;
  showDefaultGrid: boolean;
  test: boolean;

  totalRecords: number;
  page: number;
  pageSize: number;
  asyncChracterList: Observable<Card[]>;

  constructor(private cardService: CardService, private snackBar: MatSnackBar)
  {
    this.showDefaultGrid = false;
    this.test = false;
    this.cardList = [];
    this.page = 1;
    this.pageSize = 20;
    this.totalRecords = 0;

    
  }

 


  ngOnInit() {
    this.cardService.getFindAllCards().pipe(take(1)).subscribe(resp => {      
      this.cardList = resp.cards.filter(card => card.text != "" );
      this.loading = false;
    });
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 3000,
      }
    });
  }

  doSearch(event: Search): void {
    if(event) {
      this.test = true;
      this.page = 1;
      if(this.searchingById(event)) {
        this.findCard(event.id);
      }else if(this.searchingByName(event))
      {
        this.findCardName(event.name);
      }else if(this.searchingByClass(event))
      {
        this.findCardClass(event.classcard);
      }else{
        this.showDefaultGrid = false;
        this.cardList = [];
        this.loading = true;
        this.getcardList(event);
      }
    }
  }

  doTryLuck(event: boolean): void {
    if(event) {
      this.loading = true;
      this.showDefaultGrid = false;
      this.test = false;
      this.totalRecords = 0;
      this.showSnackBar();
      this.findCardsByLucky();
    }
  }

  private searchingById(search: Search): boolean {
    let itstrue = false;
    if(search &&  search.id !== 0 ) {
      itstrue = true;
    }
    return itstrue;
  }

  private searchingByName(search: Search): boolean {
    let itstrue = false;
    if(search && search.name != undefined ) {
      itstrue = true;
    }
    return itstrue;
  }

  private searchingByClass(search: Search): boolean {
    let itstrue = false;
    if(search && search.classcard != "" ) {
      itstrue = true;
    }
    return itstrue;
  }

  private findCard(id: number): void {
    let doFindById = true;
    if(this.cardList.length === 1) {
      if(this.cardList[0].id === id) {
        doFindById = false;
      }
    }
    if(doFindById) {
      this.findCardById(id.toString());
    }
  }

  private findCardName(name: string): void {
    let doFindById = true;
    if(this.cardList.length === 1) {
      if(this.cardList[0].name === name) {
        doFindById = false;
      }
    }
    if(doFindById) {
      this.findCardByName(name);
    }
  }

  private findCardClass(classname: string): void {
      this.findCardByClass(classname);
  }

  private findCardById(id: string): void {   
    this.showDefaultGrid = false;
    this.cardList = [];
    this.loading = true;
    this.cardService.getFindIdCard(id).pipe(take(1)).subscribe(
      response => {
        this.cardList.push(response);
        this.loading = false;
        this.showDefaultGrid = true;
      });
  }

  private findCardByName(name: string): void {   
    this.showDefaultGrid = false;
    this.cardList = [];
    this.loading = true;
    this.cardService.getFindNameCard(name).pipe(take(1)).subscribe(
      response => {
        this.cardList = response.cards.filter(card => card.text != "" );
        this.loading = false;
        this.showDefaultGrid = true;
      });
  }

  private findCardByClass(classname: string): void {   
    this.showDefaultGrid = false;
    this.cardList = [];
    this.loading = true;
    this.cardService.getFindClassCard(classname).pipe(take(1)).subscribe(
      response => {
        this.cardList = response.cards.filter(card => card.text != "" );
        this.loading = false;
        this.showDefaultGrid = true;
      });
  }

  private getcardList(search: Search): void {
    this.asyncChracterList = this.loadCards(search).pipe(
      tap(response => {
        this.totalRecords = response.info.count;
        this.loading = false;
      }),
      map (response => response.results)
    );
  }

  private loadCards(search: Search): Observable<SearchResult<Card>> {
    return this.cardService.findByFiltersAndPage(search, this.page);
  }



  private findCardsByLucky(): void {
    this.cardList = [];
    this.cardService.getFindAllCards().pipe(take(1)).subscribe(response => {      
      this.cardList = response.cards.filter(card => card.text != "" );
      this.loading = false;
      this.showDefaultGrid = true;
    });
  }



 
  private showSnackBar(): void {
    let message: string = ' ¡Ah, la de historias que se contarían esa noche!';
    let setAutoHide: boolean = true;
    let autoHide: number = 1500;
    let horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    let verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    let config = new MatSnackBarConfig();
    config.verticalPosition = verticalPosition;
    config.horizontalPosition = horizontalPosition;
    config.duration = setAutoHide ? autoHide : 0;
    this.snackBar.open(message, undefined, config);
  } 


}
