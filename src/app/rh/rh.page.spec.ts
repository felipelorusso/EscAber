import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhPage } from './rh.page';

describe('RhPage', () => {
  let component: RhPage;
  let fixture: ComponentFixture<RhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
