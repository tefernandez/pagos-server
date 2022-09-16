import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEcComponent } from './login-ec.component';

describe('LoginEcComponent', () => {
  let component: LoginEcComponent;
  let fixture: ComponentFixture<LoginEcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
