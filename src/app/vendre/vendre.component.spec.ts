import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendreComponent } from './vendre.component';

describe('VendreComponent', () => {
  let component: VendreComponent;
  let fixture: ComponentFixture<VendreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
