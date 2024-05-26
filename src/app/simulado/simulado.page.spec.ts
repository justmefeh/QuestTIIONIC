import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimuladoPage } from './simulado.page';

describe('SimuladoPage', () => {
  let component: SimuladoPage;
  let fixture: ComponentFixture<SimuladoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
