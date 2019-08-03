import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPhone01Component } from './smart-phone01.component';

describe('SmartPhone01Component', () => {
  let component: SmartPhone01Component;
  let fixture: ComponentFixture<SmartPhone01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPhone01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPhone01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
