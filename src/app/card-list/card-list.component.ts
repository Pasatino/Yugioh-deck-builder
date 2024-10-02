import { Component, OnInit } from '@angular/core';
import { YugiohApiService } from '../yugioh-api.service';

import type { Card } from '../types/card.model';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit {
  
  cards: Card[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private yugiohApiService: YugiohApiService) {}

  ngOnInit(): void {
    this.yugiohApiService.getCards().subscribe({
      next: (cards) => {
        this.cards = cards;
        this.isLoading = false;
        console.log(this.cards);
        
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
        console.log(this.cards);
        
      }
    });
  }
}
