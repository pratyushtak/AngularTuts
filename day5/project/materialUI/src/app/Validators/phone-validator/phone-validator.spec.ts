import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneValidator } from './phone-validator';

describe('PhoneValidator', () => {
  let component: PhoneValidator;
  let fixture: ComponentFixture<PhoneValidator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneValidator],
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneValidator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
