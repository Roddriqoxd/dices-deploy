import { Component, ViewChild, ViewChildren, ViewContainerRef, ComponentRef, Type, ChangeDetectorRef } from '@angular/core';
import { Route } from '@angular/router';
import { DadosEroticosComponent } from '../dados-eroticos/dados-eroticos.component';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  component: Type<DadosEroticosComponent> | null = null;
  public title = 'Lista de juegos';
  public buttonIcon = 'menu';
  isComponentActive = false;


  constructor(private _cdr: ChangeDetectorRef) {

  }

  public navigateTo(): void {
    this.component = DadosEroticosComponent;
    this.title = 'Dados Eróticos';
    this.buttonIcon = 'chevron_left';
    this.isComponentActive = true;
  }

  public retroceder(): void {
    this.component = null;
    this.isComponentActive = false;
    this.title = 'Lista de juegos';
    this.buttonIcon = 'menu';
  }
}
