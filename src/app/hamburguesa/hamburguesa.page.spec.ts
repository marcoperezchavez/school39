import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguesaPage } from './hamburguesa.page';

describe('HamburguesaPage', () => {
  let component: HamburguesaPage;
  let fixture: ComponentFixture<HamburguesaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburguesaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburguesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
