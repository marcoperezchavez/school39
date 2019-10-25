import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U3T2Page } from './u3-t2.page';

describe('U3T2Page', () => {
  let component: U3T2Page;
  let fixture: ComponentFixture<U3T2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U3T2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U3T2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
