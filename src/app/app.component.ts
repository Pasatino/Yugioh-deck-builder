import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from "./card-list/card-list.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardListComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yugioh-deck-builder';
}
