import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DadosComponent } from "../dados/dados.component";

@Component({
  selector: 'app-dados-eroticos',
  imports: [DadosComponent],
  standalone: true,
  templateUrl: './dados-eroticos.component.html',
  styleUrl: './dados-eroticos.component.scss'
})
export class DadosEroticosComponent {
  @ViewChildren(DadosComponent) dadosComponents!: QueryList<DadosComponent>;
  public dadoUno: string[] = ["Besar", "Lamer", "Morder", "Chupar", "Explorar", "Jugar"];
  public dadoDos: string[] = ["Cuello", "Pezones", "Comodin", "Orejas", "Culo", "Genitales"];

  constructor() { }


lanzar(): void {
  this.dadosComponents.first.rollDice();
  this.dadosComponents.last.rollDice();
}
}
