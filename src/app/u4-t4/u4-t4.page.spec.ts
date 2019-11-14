import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U4T4Page } from './u4-t4.page';

describe('U4T4Page', () => {
  let component: U4T4Page;
  let fixture: ComponentFixture<U4T4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U4T4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U4T4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
