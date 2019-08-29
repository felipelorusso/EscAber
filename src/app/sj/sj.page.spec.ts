import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjPage } from './sj.page';

describe('SjPage', () => {
  let component: SjPage;
  let fixture: ComponentFixture<SjPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
