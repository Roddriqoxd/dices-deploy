import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadosComponent } from './retos/componentes/dados/dados.component';
import { DadosEroticosComponent } from "./retos/componentes/dados-eroticos/dados-eroticos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DadosComponent, DadosEroticosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dices-project';
}
