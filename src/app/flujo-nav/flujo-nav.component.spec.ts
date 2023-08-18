import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujoNavComponent } from './flujo-nav.component';

describe('FlujoNavComponent', () => {
  let component: FlujoNavComponent;
  let fixture: ComponentFixture<FlujoNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlujoNavComponent]
    });
    fixture = TestBed.createComponent(FlujoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
