import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtimPage } from './etim.page';

describe('EtimPage', () => {
  let component: EtimPage;
  let fixture: ComponentFixture<EtimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtimPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
