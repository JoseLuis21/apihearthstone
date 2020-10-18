import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    CardRoutingModule,
    FormsModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
