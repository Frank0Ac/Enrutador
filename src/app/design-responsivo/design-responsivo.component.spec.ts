import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignResponsivoComponent } from './design-responsivo.component';

describe('DesignResponsivoComponent', () => {
  let component: DesignResponsivoComponent;
  let fixture: ComponentFixture<DesignResponsivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignResponsivoComponent]
    });
    fixture = TestBed.createComponent(DesignResponsivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
