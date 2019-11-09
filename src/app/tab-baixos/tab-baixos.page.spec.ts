import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBaixosPage } from './tab-baixos.page';

describe('TabBaixosPage', () => {
  let component: TabBaixosPage;
  let fixture: ComponentFixture<TabBaixosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBaixosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBaixosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
