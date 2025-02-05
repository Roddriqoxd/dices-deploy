import { Component } from '@angular/core';
import { DadosComponent } from "../dados/dados.component";

@Component({
  selector: 'app-dados-eroticos',
  imports: [DadosComponent],
  templateUrl: './dados-eroticos.component.html',
  styleUrl: './dados-eroticos.component.scss'
})
export class DadosEroticosComponent {
  public dadoUno: string[] = ["Besar", "Lamer", "Morder", "Acariciar", "Soplar", "Chupar"];
  public dadoDos: string[] = ["Cuello", "Pecho", "Espalda", "Manos", "Pies", "Genitales"];

  constructor() { }
}
