import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U2T4Page } from './u2-t4.page';

describe('U2T4Page', () => {
  let component: U2T4Page;
  let fixture: ComponentFixture<U2T4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U2T4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U2T4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
