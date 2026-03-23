import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maharastra } from './maharastra';

describe('Maharastra', () => {
  let component: Maharastra;
  let fixture: ComponentFixture<Maharastra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maharastra],
    }).compileComponents();

    fixture = TestBed.createComponent(Maharastra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
