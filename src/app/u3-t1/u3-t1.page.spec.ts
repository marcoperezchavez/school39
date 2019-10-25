import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U3T1Page } from './u3-t1.page';

describe('U3T1Page', () => {
  let component: U3T1Page;
  let fixture: ComponentFixture<U3T1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U3T1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U3T1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
