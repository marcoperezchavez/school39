import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U2T1Page } from './u2-t1.page';

describe('U2T1Page', () => {
  let component: U2T1Page;
  let fixture: ComponentFixture<U2T1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U2T1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U2T1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
