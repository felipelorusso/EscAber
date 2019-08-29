import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPage } from './ds.page';

describe('DsPage', () => {
  let component: DsPage;
  let fixture: ComponentFixture<DsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
