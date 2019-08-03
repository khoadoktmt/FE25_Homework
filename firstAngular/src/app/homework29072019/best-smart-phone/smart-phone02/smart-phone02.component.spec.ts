import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPhone02Component } from './smart-phone02.component';

describe('SmartPhone02Component', () => {
  let component: SmartPhone02Component;
  let fixture: ComponentFixture<SmartPhone02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPhone02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPhone02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
