import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateComp } from './state-comp';

describe('StateComp', () => {
  let component: StateComp;
  let fixture: ComponentFixture<StateComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateComp],
    }).compileComponents();

    fixture = TestBed.createComponent(StateComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
