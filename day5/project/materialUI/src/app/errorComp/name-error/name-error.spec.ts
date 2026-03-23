import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameError } from './name-error';

describe('NameError', () => {
  let component: NameError;
  let fixture: ComponentFixture<NameError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameError],
    }).compileComponents();

    fixture = TestBed.createComponent(NameError);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
