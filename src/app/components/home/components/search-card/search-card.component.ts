import { Component, OnInit, Output , EventEmitter} from '@angular/core';

import { Search } from 'src/app/core/models/search';



@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {

  @Output() public filters = new EventEmitter<Search>();
  @Output() public tryLuck = new EventEmitter<boolean>();

  cardId: string;
  cardName: string;
  cardClass: string;

  constructor() { }

  ngOnInit() {
  }

  search(): void {
    let search: Search = new Search();
    search.id = this.getId();
    search.classcard = this.cardClass;
    search.name = this.cardName;
    this.filters.emit(search);
  }

  doTryLuck(): void {
    this.tryLuck.emit(true);
  }
   
  getId(): number {
    let id = 0;
    if(this.cardId && this.cardId !== '') {
      id = parseFloat(this.cardId);
    }
    return id;
  }

}
