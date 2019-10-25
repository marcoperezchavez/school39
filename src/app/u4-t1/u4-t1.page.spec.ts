import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U4T1Page } from './u4-t1.page';

describe('U4T1Page', () => {
  let component: U4T1Page;
  let fixture: ComponentFixture<U4T1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U4T1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U4T1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
