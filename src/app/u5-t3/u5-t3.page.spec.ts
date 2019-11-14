import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U5T3Page } from './u5-t3.page';

describe('U5T3Page', () => {
  let component: U5T3Page;
  let fixture: ComponentFixture<U5T3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U5T3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U5T3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
