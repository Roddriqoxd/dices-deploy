import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetosParejaComponent } from './retos-pareja.component';

describe('RetosParejaComponent', () => {
  let component: RetosParejaComponent;
  let fixture: ComponentFixture<RetosParejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetosParejaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetosParejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
