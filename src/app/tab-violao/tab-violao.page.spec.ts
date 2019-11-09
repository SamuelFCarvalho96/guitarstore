import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViolaoPage } from './tab-violao.page';

describe('TabViolaoPage', () => {
  let component: TabViolaoPage;
  let fixture: ComponentFixture<TabViolaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabViolaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabViolaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
