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

  /* Variabili per la paginazione */
  page: number = 1;
  pageSize: number = 20;
  totalCards: number = 0;

  constructor(private yugiohApiService: YugiohApiService) {}

  ngOnInit(): void {
    this.yugiohApiService.getCards().subscribe({
      next: (cards) => {
        this.cards = cards;
        this.totalCards = cards.length;
        this.isLoading = false;
        
        
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
        console.log(this.cards);
        
      }
    });    
  }

get paginatedCards(): Card[] {
    const startIndex = (this.page - 1) * this.pageSize;
    return this.cards.slice(startIndex, startIndex + this.pageSize);
}

// Passa alla pagina successiva
nextPage() {
    if (this.page < this.totalPages) {
        this.page++;
    }
}

// Passa alla pagina precedente
previousPage() {
    if (this.page > 1) {
        this.page--;
    }
}

// Calcola il numero totale di pagine
get totalPages(): number {
    return Math.ceil(this.totalCards / this.pageSize);
}
}
