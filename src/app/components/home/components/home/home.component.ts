import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/card';
import { CardService } from 'src/app/core/services/card/card.service';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardList: Card[];

  constructor(private cardService: CardService)
  {
    
  }

 


  ngOnInit() {
    // console.log(this.cardService);
    this.cardService.getFindAllCards().pipe(take(1)).subscribe(resp => {
      this.cardList = resp.cards.filter(card => card.text != "" );
    });
    // console.log(this.cardService.getFindAllCards());
  }


}
