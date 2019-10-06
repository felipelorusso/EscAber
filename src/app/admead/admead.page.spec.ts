import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmeadPage } from './admead.page';

describe('AdmeadPage', () => {
  let component: AdmeadPage;
  let fixture: ComponentFixture<AdmeadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmeadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmeadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
