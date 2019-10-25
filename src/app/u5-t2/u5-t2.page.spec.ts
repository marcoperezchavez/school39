import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U5T2Page } from './u5-t2.page';

describe('U5T2Page', () => {
  let component: U5T2Page;
  let fixture: ComponentFixture<U5T2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U5T2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U5T2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
