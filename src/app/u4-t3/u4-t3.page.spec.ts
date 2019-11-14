import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U4T3Page } from './u4-t3.page';

describe('U4T3Page', () => {
  let component: U4T3Page;
  let fixture: ComponentFixture<U4T3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U4T3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U4T3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
