import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rajasthan } from './rajasthan';

describe('Rajasthan', () => {
  let component: Rajasthan;
  let fixture: ComponentFixture<Rajasthan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rajasthan],
    }).compileComponents();

    fixture = TestBed.createComponent(Rajasthan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
