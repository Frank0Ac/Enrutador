import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasSeguridadComponent } from './medidas-seguridad.component';

describe('MedidasSeguridadComponent', () => {
  let component: MedidasSeguridadComponent;
  let fixture: ComponentFixture<MedidasSeguridadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedidasSeguridadComponent]
    });
    fixture = TestBed.createComponent(MedidasSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
