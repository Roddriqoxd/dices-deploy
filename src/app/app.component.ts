import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadosComponent } from './componentes/dados/dados.component';
import { DadosEroticosComponent } from "./componentes/dados-eroticos/dados-eroticos.component";
import { MenuComponent } from "./componentes/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DadosComponent, DadosEroticosComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dices-project';
}
