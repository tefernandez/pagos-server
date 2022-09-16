import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationEcComponent } from './verification-ec.component';

describe('VerificationEcComponent', () => {
  let component: VerificationEcComponent;
  let fixture: ComponentFixture<VerificationEcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationEcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationEcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
