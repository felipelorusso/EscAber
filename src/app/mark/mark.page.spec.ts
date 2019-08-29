import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkPage } from './mark.page';

describe('MarkPage', () => {
  let component: MarkPage;
  let fixture: ComponentFixture<MarkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
