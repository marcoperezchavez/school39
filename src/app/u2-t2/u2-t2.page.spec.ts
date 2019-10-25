import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U2T2Page } from './u2-t2.page';

describe('U2T2Page', () => {
  let component: U2T2Page;
  let fixture: ComponentFixture<U2T2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U2T2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U2T2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
