import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestesPage } from './testes.page';

describe('TestesPage', () => {
  let component: TestesPage;
  let fixture: ComponentFixture<TestesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
