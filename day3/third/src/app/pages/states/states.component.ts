import { Component } from '@angular/core';
import { CardsComponent } from "../../ui/cards/cards.component";
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-states',
  imports: [CardsComponent,RouterLink],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss'
})
export class StatesComponent {

  constructor(public api:ApiService){}

}


