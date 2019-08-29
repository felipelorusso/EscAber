import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VestPage } from './vest.page';

describe('VestPage', () => {
  let component: VestPage;
  let fixture: ComponentFixture<VestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
