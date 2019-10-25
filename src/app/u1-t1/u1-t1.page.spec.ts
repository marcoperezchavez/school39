import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U1T1Page } from './u1-t1.page';

describe('U1T1Page', () => {
  let component: U1T1Page;
  let fixture: ComponentFixture<U1T1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U1T1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U1T1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
