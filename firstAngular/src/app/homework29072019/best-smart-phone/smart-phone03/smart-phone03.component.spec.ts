import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPhone03Component } from './smart-phone03.component';

describe('SmartPhone03Component', () => {
  let component: SmartPhone03Component;
  let fixture: ComponentFixture<SmartPhone03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPhone03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPhone03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
