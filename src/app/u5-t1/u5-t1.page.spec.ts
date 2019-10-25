import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U5T1Page } from './u5-t1.page';

describe('U5T1Page', () => {
  let component: U5T1Page;
  let fixture: ComponentFixture<U5T1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U5T1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U5T1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
