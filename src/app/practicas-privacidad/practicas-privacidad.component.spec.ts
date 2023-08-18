import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticasPrivacidadComponent } from './practicas-privacidad.component';

describe('PracticasPrivacidadComponent', () => {
  let component: PracticasPrivacidadComponent;
  let fixture: ComponentFixture<PracticasPrivacidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticasPrivacidadComponent]
    });
    fixture = TestBed.createComponent(PracticasPrivacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
