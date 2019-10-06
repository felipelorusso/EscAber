import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComePage } from './come.page';

describe('ComePage', () => {
  let component: ComePage;
  let fixture: ComponentFixture<ComePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
