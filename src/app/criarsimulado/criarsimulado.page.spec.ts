import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarsimuladoPage } from './criarsimulado.page';

describe('CriarsimuladoPage', () => {
  let component: CriarsimuladoPage;
  let fixture: ComponentFixture<CriarsimuladoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarsimuladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
