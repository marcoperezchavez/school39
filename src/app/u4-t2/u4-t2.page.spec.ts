import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U4T2Page } from './u4-t2.page';

describe('U4T2Page', () => {
  let component: U4T2Page;
  let fixture: ComponentFixture<U4T2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U4T2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U4T2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
