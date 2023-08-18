import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSecurityComponent } from './layout-security.component';

describe('LayoutSecurityComponent', () => {
  let component: LayoutSecurityComponent;
  let fixture: ComponentFixture<LayoutSecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutSecurityComponent]
    });
    fixture = TestBed.createComponent(LayoutSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
