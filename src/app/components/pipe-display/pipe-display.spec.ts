import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDisplay } from './pipe-display';

describe('PipeDisplay', () => {
  let component: PipeDisplay;
  let fixture: ComponentFixture<PipeDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
