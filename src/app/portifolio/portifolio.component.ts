import { Component } from '@angular/core';
import { LineComponent } from "../line/line.component";
import { DarkLineComponent } from "../dark-line/dark-line.component";

@Component({
  selector: 'app-portifolio',
  imports: [DarkLineComponent],
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.css'
})
export class PortifolioComponent {

}
