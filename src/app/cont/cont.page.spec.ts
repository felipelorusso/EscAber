import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContPage } from './cont.page';

describe('ContPage', () => {
  let component: ContPage;
  let fixture: ComponentFixture<ContPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
