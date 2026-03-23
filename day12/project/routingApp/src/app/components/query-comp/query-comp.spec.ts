import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryComp } from './query-comp';

describe('QueryComp', () => {
  let component: QueryComp;
  let fixture: ComponentFixture<QueryComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryComp],
    }).compileComponents();

    fixture = TestBed.createComponent(QueryComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
