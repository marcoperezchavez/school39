import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U1T4Page } from './u1-t4.page';

describe('U1T4Page', () => {
  let component: U1T4Page;
  let fixture: ComponentFixture<U1T4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U1T4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U1T4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
