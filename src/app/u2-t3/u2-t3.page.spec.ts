import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U2T3Page } from './u2-t3.page';

describe('U2T3Page', () => {
  let component: U2T3Page;
  let fixture: ComponentFixture<U2T3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U2T3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U2T3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
