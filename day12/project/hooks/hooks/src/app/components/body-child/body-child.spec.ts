import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyChild } from './body-child';

describe('BodyChild', () => {
  let component: BodyChild;
  let fixture: ComponentFixture<BodyChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyChild],
    }).compileComponents();

    fixture = TestBed.createComponent(BodyChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
