import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPage } from './adm.page';

describe('AdmPage', () => {
  let component: AdmPage;
  let fixture: ComponentFixture<AdmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
