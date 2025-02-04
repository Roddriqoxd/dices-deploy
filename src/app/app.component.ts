import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadosComponent } from './retos/componentes/dados/dados.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dices-project';
}
