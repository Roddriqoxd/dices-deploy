import { Component, ViewChild, ViewChildren, ViewContainerRef, ComponentRef, Type, ChangeDetectorRef } from '@angular/core';
import { Route } from '@angular/router';
import { DadosEroticosComponent } from '../dados-eroticos/dados-eroticos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  component: Type<DadosEroticosComponent> | null = null;
  isComponentActive = false;

  constructor(private _cdr: ChangeDetectorRef) {
  }

  public navigateTo(): void {
    this.component = DadosEroticosComponent;
    this.isComponentActive = true;
  }
}
