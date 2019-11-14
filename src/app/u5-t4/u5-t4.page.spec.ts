import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U5T4Page } from './u5-t4.page';

describe('U5T4Page', () => {
  let component: U5T4Page;
  let fixture: ComponentFixture<U5T4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U5T4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U5T4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
