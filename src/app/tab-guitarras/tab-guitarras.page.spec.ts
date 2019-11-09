import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGuitarrasPage } from './tab-guitarras.page';

describe('TabGuitarrasPage', () => {
  let component: TabGuitarrasPage;
  let fixture: ComponentFixture<TabGuitarrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabGuitarrasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGuitarrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
