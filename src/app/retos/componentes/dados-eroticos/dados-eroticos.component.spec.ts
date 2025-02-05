import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosEroticosComponent } from './dados-eroticos.component';

describe('DadosEroticosComponent', () => {
  let component: DadosEroticosComponent;
  let fixture: ComponentFixture<DadosEroticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosEroticosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosEroticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
