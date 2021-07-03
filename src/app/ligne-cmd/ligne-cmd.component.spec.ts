import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneCMDComponent } from './ligne-cmd.component';

describe('LigneCMDComponent', () => {
  let component: LigneCMDComponent;
  let fixture: ComponentFixture<LigneCMDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneCMDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneCMDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
