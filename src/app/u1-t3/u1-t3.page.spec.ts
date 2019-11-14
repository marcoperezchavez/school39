import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U1T3Page } from './u1-t3.page';

describe('U1T3Page', () => {
  let component: U1T3Page;
  let fixture: ComponentFixture<U1T3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U1T3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U1T3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
