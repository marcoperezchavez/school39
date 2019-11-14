import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U3T4Page } from './u3-t4.page';

describe('U3T4Page', () => {
  let component: U3T4Page;
  let fixture: ComponentFixture<U3T4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U3T4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U3T4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
