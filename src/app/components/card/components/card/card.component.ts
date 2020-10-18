import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Card } from 'src/app/core/models/card';
import { CardService } from 'src/app/core/services/card/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  card : Card;
  loading: boolean = true;

  constructor(private router: ActivatedRoute, private cardService: CardService) { }

  ngOnInit() {
    this.loading = true;
    this.router.params.subscribe(routeParams => {  
      this.getCardShow(routeParams.id);
    });
  }


  public getCardShow(cardID: string) {    
    this.cardService.getFindIdCard(cardID).pipe(take(1)).subscribe(res => {          
      this.card = res;
      this.loading = false;
    },
    err => {
      console.log(err);
    });
  }

}
