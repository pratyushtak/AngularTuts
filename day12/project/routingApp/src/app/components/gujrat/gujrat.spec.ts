import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gujrat } from './gujrat';

describe('Gujrat', () => {
  let component: Gujrat;
  let fixture: ComponentFixture<Gujrat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gujrat],
    }).compileComponents();

    fixture = TestBed.createComponent(Gujrat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
