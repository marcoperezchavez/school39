import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U1T2Page } from './u1-t2.page';

describe('U1T2Page', () => {
  let component: U1T2Page;
  let fixture: ComponentFixture<U1T2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U1T2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U1T2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
