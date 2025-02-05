import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-dados',
  imports: [],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.scss'
})
export class DadosComponent implements AfterViewInit {
  private readonly _TIME: number = 1;

  constructor(private _renderer: Renderer2) {

  }

  ngAfterViewInit(): void {

  }

  public rollDice(base : HTMLDivElement): void {
    this._renderer.setStyle(base, 'transition', '');
    this._renderer.setStyle(base, 'transform', 'translateY(200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)');
    timer(this._TIME * 10).subscribe(() => {
      this._renderer.setStyle(base, 'transition', `transform ${this._TIME}s`);
      const randomValue = Math.floor((Math.random() * 6) + 1);
      switch (randomValue) {
        case 1:
          this._renderer.setStyle(base, 'transform', `translateY(400px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`);
          break;
        case 2:
          this._renderer.setStyle(base, 'transform', `translateY(400px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`);
          break;
        case 3:
          this._renderer.setStyle(base, 'transform', `translateY(400px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`);
          break;
        case 4:
          this._renderer.setStyle(base, 'transform', `translateY(400px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`);
          break;
        case 5:
          this._renderer.setStyle(base, 'transform', `translateY(400px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`);
          break;
        case 6:
          this._renderer.setStyle(base, 'transform', `translateY(400px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`);
          break;
      };

    });
  }
}
