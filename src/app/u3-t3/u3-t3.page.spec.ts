import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U3T3Page } from './u3-t3.page';

describe('U3T3Page', () => {
  let component: U3T3Page;
  let fixture: ComponentFixture<U3T3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U3T3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U3T3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
